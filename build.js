const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Log the current directory structure
console.log('Current directory structure:');
console.log('- Root directory:', __dirname);
console.log('- IntelAcademyV2-main directory:', path.join(__dirname, 'IntelAcademyV2-main'));

// Check if both app folders exist
const rootAppDir = path.join(__dirname, 'app');
const mainAppDir = path.join(__dirname, 'IntelAcademyV2-main', 'app');

console.log('Checking app directories:');
console.log('- Root app directory exists:', fs.existsSync(rootAppDir));
console.log('- IntelAcademyV2-main app directory exists:', fs.existsSync(mainAppDir));

// Change to the IntelAcademyV2-main directory
console.log('Changing to IntelAcademyV2-main directory...');
process.chdir(path.join(__dirname, 'IntelAcademyV2-main'));

// Install dependencies
console.log('Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('Dependencies installed successfully');
} catch (error) {
  console.error('Error installing dependencies:', error);
  process.exit(1);
}

// Run the build
console.log('Building the application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build completed successfully');
} catch (error) {
  console.error('Error building the application:', error);
  process.exit(1);
}