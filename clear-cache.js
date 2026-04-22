const fs = require('fs');
const path = require('path');

// Paths to clear
const pathsToClear = [
  '.next',
  'node_modules/.cache'
];

console.log('Clearing Next.js cache...');

// Delete directories
pathsToClear.forEach(dirPath => {
  const fullPath = path.join(__dirname, dirPath);
  
  if (fs.existsSync(fullPath)) {
    console.log(`Removing ${dirPath}...`);
    try {
      fs.rmSync(fullPath, { recursive: true, force: true });
      console.log(`Successfully removed ${dirPath}`);
    } catch (err) {
      console.error(`Error removing ${dirPath}:`, err);
    }
  } else {
    console.log(`${dirPath} does not exist, skipping...`);
  }
});

console.log('Cache clearing complete. Please run "npm run dev" to restart your application.');