const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting static deployment preparation...');

// Create a temporary directory for deployment
const tempDir = path.join(__dirname, 'deploy-static');
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
fs.mkdirSync(tempDir);

// Copy essential files
console.log('Copying essential files...');
const filesToCopy = [
  'package.json',
  'package-lock.json',
  'next.config.mjs',
  'tailwind.config.ts',
  'postcss.config.mjs',
  'tsconfig.json',
  '.env.local',
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
  'public',
  'styles',
  'utils',
  'lib',
  'hooks',
  'data',
];

dirsToCopy.forEach(dir => {
  if (fs.existsSync(path.join(__dirname, dir))) {
    const destDir = path.join(tempDir, dir);
    fs.mkdirSync(destDir, { recursive: true });
    
    try {
      execSync(`xcopy "${path.join(__dirname, dir)}" "${destDir}" /E /I /H`);
    } catch (err) {
      console.error(`Error copying ${dir}:`, err.message);
    }
  }
});

// Modify next.config.mjs for static export
console.log('Configuring for static export...');
const nextConfigPath = path.join(tempDir, 'next.config.mjs');
if (fs.existsSync(nextConfigPath)) {
  let config = fs.readFileSync(nextConfigPath, 'utf8');
  
  // Uncomment output: 'export'
  config = config.replace("// output: 'export',", "output: 'export',");
  
  // Add skipMiddlewareUrlNormalize
  if (!config.includes('skipMiddlewareUrlNormalize')) {
    config = config.replace(
      'const nextConfig = {',
      'const nextConfig = {\n  skipMiddlewareUrlNormalize: true,'
    );
  }
  
  // Disable image optimization for static export
  config = config.replace(
    'images: {\n    unoptimized: true,\n  },',
    'images: {\n    unoptimized: true,\n    remotePatterns: [],\n  },'
  );
  
  fs.writeFileSync(nextConfigPath, config);
}

// Create a simple deployment script
const deployScript = `@echo off
echo Building static export...
call npm install
call npm run build
echo.
echo Static export complete! Files are in the "out" directory.
echo You can deploy these files to any static hosting service.
`;

fs.writeFileSync(path.join(tempDir, 'build-static.bat'), deployScript);

console.log('\nDeployment preparation complete!');
console.log(`\nTo build and deploy:`);
console.log(`1. cd "${tempDir}"`);
console.log('2. Run build-static.bat');
console.log('3. Upload the "out" directory to any static hosting service');