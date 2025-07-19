const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

console.log('Installing SWC dependencies...');

// Get the Next.js version from package.json
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
const nextVersion = packageJson.dependencies.next.replace('^', '');

console.log(`Detected Next.js version: ${nextVersion}`);
console.log(`Platform: ${os.platform()}, Architecture: ${os.arch()}`);

// Install SWC dependencies for the detected Next.js version based on platform
try {
  let swcPackage = '';
  
  // Determine the correct SWC package based on platform and architecture
  if (os.platform() === 'win32' && os.arch() === 'x64') {
    swcPackage = '@next/swc-win32-x64-msvc';
  } else if (os.platform() === 'linux' && os.arch() === 'x64') {
    swcPackage = '@next/swc-linux-x64-gnu';
  } else {
    console.log(`No SWC package available for ${os.platform()} ${os.arch()}`);
    console.log('Continuing with build...');
    process.exit(0);
  }
  
  console.log(`Installing ${swcPackage}@${nextVersion}...`);
  
  try {
    execSync(`npm install ${swcPackage}@${nextVersion} --save-dev --no-fund`, { stdio: 'inherit' });
    console.log(`Successfully installed ${swcPackage}`);
  } catch (error) {
    console.log(`Error installing ${swcPackage}, it may already be installed or not available for this platform`);
    console.log('Continuing with build...');
  }
} catch (error) {
  console.error('Error in SWC dependency installation process:', error);
  console.log('Continuing with build...');
}