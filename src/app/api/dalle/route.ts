import { NextRequest, NextResponse } from 'next/server';

import {
  MissingOpenAiKeyError,
  OpenAiImageError,
  generateDalleImage,
  type GenerateDalleImageOptions
} from '@/lib/dalle';
import { allDallePrompts, dallePrompts, type DalleCategory } from '@/lib/dallePrompts';

export const runtime = 'nodejs';

interface GenerateBody {
  prompt?: string;
  size?: GenerateDalleImageOptions['size'];
  quality?: GenerateDalleImageOptions['quality'];
  category?: DalleCategory;
  fileName?: string;
  user?: string;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') as DalleCategory | null;
  const fileName = searchParams.get('fileName');

  if (category && fileName) {
    const preset = dallePrompts[category]?.[fileName];
    if (!preset) {
      return NextResponse.json({ error: 'Preset not found.' }, { status: 404 });
    }

    return NextResponse.json({ prompt: preset, category, fileName });
  }

  return NextResponse.json({
    prompts: allDallePrompts
  });
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as GenerateBody;
  const { prompt, size, quality, category, fileName, user } = body;

  let resolvedPrompt = prompt?.trim();
  let resolvedSize = size;

  if (category && fileName) {
    const preset = dallePrompts[category]?.[fileName];
    if (!preset) {
      return NextResponse.json(
        {
          error: `Unknown preset for category "${category}" and file "${fileName}".`
        },
        { status: 400 }
      );
    }

    resolvedPrompt = resolvedPrompt || preset.prompt;
    resolvedSize = resolvedSize || preset.size;
  }

  if (!resolvedPrompt) {
    return NextResponse.json(
      {
        error: 'You must provide a prompt or a known preset (category + fileName).'
      },
      { status: 400 }
    );
  }

  try {
    const { imageBase64, revisedPrompt, size: finalSize } = await generateDalleImage({
      prompt: resolvedPrompt,
      size: resolvedSize,
      quality,
      user
    });

    return NextResponse.json({
      imageBase64,
      revisedPrompt,
      size: finalSize,
      meta: {
        category,
        fileName,
        prompt: resolvedPrompt
      }
    });
  } catch (error) {
    if (error instanceof MissingOpenAiKeyError) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (error instanceof OpenAiImageError) {
      return NextResponse.json({ error: error.message }, { status: 502 });
    }

    return NextResponse.json({ error: 'Unexpected error generating image.' }, { status: 500 });
  }
}
