#!/usr/bin/env tsx

/**
 * Script to list all image usage in the codebase for easy replacement
 * Run with: npx tsx scripts/list-image-usage.ts
 */

import fs from 'fs';
import path from 'path';

interface ImageUsage {
  file: string;
  line: number;
  content: string;
  type: 'placehold.co' | 'getImageUrl' | 'static' | 'other';
}

const imageUsages: ImageUsage[] = [];

function scanFile(filePath: string) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      
      // Check for placehold.co URLs
      if (line.includes('placehold.co')) {
        imageUsages.push({
          file: filePath,
          line: lineNumber,
          content: line.trim(),
          type: 'placehold.co'
        });
      }
      
      // Check for getImageUrl calls
      if (line.includes('getImageUrl')) {
        imageUsages.push({
          file: filePath,
          line: lineNumber,
          content: line.trim(),
          type: 'getImageUrl'
        });
      }
      
      // Check for static image imports
      if (line.includes('/images/') || line.includes('/public/')) {
        imageUsages.push({
          file: filePath,
          line: lineNumber,
          content: line.trim(),
          type: 'static'
        });
      }
    });
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
  }
}

function scanDirectory(dirPath: string) {
  try {
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        scanFile(fullPath);
      }
    });
  } catch (error) {
    console.error(`Error scanning directory ${dirPath}:`, error);
  }
}

// Scan the src directory
const srcPath = path.join(process.cwd(), 'src');
scanDirectory(srcPath);

// Group by type
const groupedUsages = imageUsages.reduce((acc, usage) => {
  if (!acc[usage.type]) {
    acc[usage.type] = [];
  }
  acc[usage.type].push(usage);
  return acc;
}, {} as Record<string, ImageUsage[]>);

// Print results
console.log('🖼️  Image Usage Report\n');
console.log('=' .repeat(50));

Object.entries(groupedUsages).forEach(([type, usages]) => {
  console.log(`\n📁 ${type.toUpperCase()} (${usages.length} occurrences)\n`);
  
  usages.forEach(usage => {
    const relativePath = path.relative(process.cwd(), usage.file);
    console.log(`  📄 ${relativePath}:${usage.line}`);
    console.log(`     ${usage.content}`);
    console.log('');
  });
});

console.log('\n' + '=' .repeat(50));
console.log('\n📋 Summary:');
console.log(`   Total image references: ${imageUsages.length}`);
console.log(`   Placeholder images: ${groupedUsages['placehold.co']?.length || 0}`);
console.log(`   getImageUrl calls: ${groupedUsages['getImageUrl']?.length || 0}`);
console.log(`   Static images: ${groupedUsages['static']?.length || 0}`);

console.log('\n🔧 Next Steps:');
console.log('   1. Replace placehold.co URLs with your actual images');
console.log('   2. Update getImageUrl calls with proper image paths');
console.log('   3. Add your images to the /public/images/ directory');
console.log('   4. Update image presets in src/lib/imagePresets.ts');

console.log('\n✨ Happy coding!');
