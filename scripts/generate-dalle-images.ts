#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';

import { allDallePrompts, type DalleCategory } from '../src/lib/dallePrompts';
import { MissingOpenAiKeyError, generateDalleImage } from '../src/lib/dalle';

type CliFilters = {
  categories: Set<DalleCategory>;
  fileNames: Set<string>;
  dryRun: boolean;
};

function parseFilters(): CliFilters {
  const categories = new Set<DalleCategory>();
  const fileNames = new Set<string>();
  let dryRun = false;

  for (const rawArg of process.argv.slice(2)) {
    if (rawArg === '--dry-run') {
      dryRun = true;
      continue;
    }

    if (rawArg.startsWith('--category=')) {
      const values = rawArg.replace('--category=', '').split(',');
      values.forEach((value) => {
        const trimmed = value.trim();
        if (trimmed) {
          categories.add(trimmed as DalleCategory);
        }
      });
      continue;
    }

    if (rawArg.startsWith('--file=')) {
      const values = rawArg.replace('--file=', '').split(',');
      values.forEach((value) => {
        const trimmed = value.trim();
        if (trimmed) {
          fileNames.add(trimmed);
        }
      });
      continue;
    }

    // Treat bare arguments as file names for convenience.
    fileNames.add(rawArg.trim());
  }

  return { categories, fileNames, dryRun };
}

async function main() {
  const { categories, fileNames, dryRun } = parseFilters();

  const prompts = allDallePrompts.filter((entry) => {
    if (categories.size && !categories.has(entry.category)) {
      return false;
    }
    if (fileNames.size && !fileNames.has(entry.fileName) && !fileNames.has(`${entry.category}/${entry.fileName}`)) {
      return false;
    }
    return true;
  });

  if (!prompts.length) {
    console.error('No prompts matched the provided filters.');
    process.exit(1);
  }

  const outputRoot = path.join(process.cwd(), 'public', 'images', 'ai-generated');

  if (dryRun) {
    console.log('Dry run: the following images would be generated:\n');
    prompts.forEach((prompt) => {
      console.log(`- ${prompt.category}/${prompt.fileName} (${prompt.size})`);
      console.log(`  Prompt: ${prompt.prompt}\n`);
    });
    return;
  }

  for (const prompt of prompts) {
    const targetDir = path.join(outputRoot, prompt.category);
    const targetPath = path.join(targetDir, prompt.fileName);

    fs.mkdirSync(targetDir, { recursive: true });

    console.log(`Generating ${prompt.category}/${prompt.fileName} (${prompt.size})...`);

    try {
      const { imageBase64, revisedPrompt } = await generateDalleImage({
        prompt: prompt.prompt,
        size: prompt.size
      });

      const buffer = Buffer.from(imageBase64, 'base64');
      fs.writeFileSync(targetPath, buffer);

      console.log(`✔ Saved to ${path.relative(process.cwd(), targetPath)}`);
      if (revisedPrompt) {
        console.log(`  ↪ Revised prompt: ${revisedPrompt}`);
      }
    } catch (error) {
      if (error instanceof MissingOpenAiKeyError) {
        console.error('OPENAI_API_KEY is not set. Aborting.');
        process.exit(1);
      }

      console.error(`Failed to generate ${prompt.fileName}:`, error);
    }
  }
}

main().catch((error) => {
  console.error('Unexpected error while generating images:', error);
  process.exit(1);
});
