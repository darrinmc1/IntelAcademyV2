const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create a temporary deployment directory
const tempDir = path.join(__dirname, 'deploy-temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

// Copy essential files
console.log('Copying essential files...');
const filesToCopy = [
  'package.json',
  'package-lock.json',
  'next.config.mjs',
  '.env.local',
  'tsconfig.json',
  'tailwind.config.ts',
  'postcss.config.mjs',
];

filesToCopy.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    fs.copyFileSync(
      path.join(__dirname, file),
      path.join(tempDir, file)
    );
  }
});

// Copy directories
const dirsToCopy = [
  'app',
  'components',
  'data',
  'hooks',
  'lib',
  'public',
  'styles',
  'utils',
];

dirsToCopy.forEach(dir => {
  if (fs.existsSync(path.join(__dirname, dir))) {
    execSync(`xcopy "${path.join(__dirname, dir)}" "${path.join(tempDir, dir)}" /E /I /H`);
  }
});

// Remove problematic files
console.log('Removing problematic files...');
const problematicFiles = [
  'app/admin/image-debug/page.tsx',
  'app/admin/image-check/page.tsx',
];

problematicFiles.forEach(file => {
  const filePath = path.join(tempDir, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
});

// Create placeholder files for problematic pages
console.log('Creating placeholder files...');
const placeholders = [
  {
    path: 'app/admin/image-debug/page.tsx',
    content: `"use client"
export default function ImageDebugPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Image Debug Tool</h1>
      <p>This feature has been temporarily disabled.</p>
    </div>
  )
}`
  },
  {
    path: 'app/admin/image-check/page.tsx',
    content: `export default function ImageCheckPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Image Path Verification</h1>
      <p className="mb-6">
        This tool has been temporarily disabled.
      </p>
    </main>
  )
}`
  }
];

placeholders.forEach(({ path: filePath, content }) => {
  const fullPath = path.join(tempDir, filePath);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(fullPath, content);
});

console.log('Deployment preparation complete!');
console.log(`\nTo deploy, run the following commands:\n`);
console.log(`cd "${tempDir}"`);
console.log('vercel login');
console.log('vercel --prod');