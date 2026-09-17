/**
 * Image Optimization Script
 * Converts PNG/JPG to WebP format
 * Run: node optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Images to convert (prioritized by size)
const imagesToConvert = [
  { input: 'public/services/ml/brain.png', output: 'public/services/ml/brain.webp' },
  { input: 'public/projects/bismark.png', output: 'public/projects/bismark.webp' },
  { input: 'public/avarice.png', output: 'public/avarice.webp' },
  { input: 'public/projects/figtries.png', output: 'public/projects/figtries.webp' },
  { input: 'public/logo/python.png', output: 'public/logo/python.webp' },
  { input: 'public/logo/react.png', output: 'public/logo/react.webp' },
  { input: 'public/logo/kotlin.png', output: 'public/logo/kotlin.webp' },
];

console.log('🖼️  Starting image optimization...\n');

// Check if sharp is installed
try {
  require.resolve('sharp');
} catch (e) {
  console.error('❌ Sharp is not installed. Installing...');
  execSync('npm install sharp --save-dev', { stdio: 'inherit' });
}

const sharp = require('sharp');

async function convertToWebP(input, output) {
  try {
    const inputPath = path.join(__dirname, input);
    const outputPath = path.join(__dirname, output);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${input} - file not found`);
      return;
    }

    // Get original size
    const originalSize = fs.statSync(inputPath).size;
    const originalSizeMB = (originalSize / 1024 / 1024).toFixed(2);

    // Convert to WebP
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    // Get new size
    const newSize = fs.statSync(outputPath).size;
    const newSizeMB = (newSize / 1024 / 1024).toFixed(2);
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`✅ ${path.basename(input)}`);
    console.log(`   ${originalSizeMB} MB → ${newSizeMB} MB (-${savings}%)`);
  } catch (error) {
    console.error(`❌ Error converting ${input}:`, error.message);
  }
}

async function main() {
  for (const image of imagesToConvert) {
    await convertToWebP(image.input, image.output);
  }
  
  console.log('\n✅ Image optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Review the optimized images in your public folder');
  console.log('2. Update your code to use .webp files');
  console.log('3. Keep original files as fallback (optional)');
}

main();
