const fs = require('fs');
const path = require('path');

// Directories to clear
const cacheDirs = [
  '.next/cache',
];

// Clear each directory
cacheDirs.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  
  if (fs.existsSync(dirPath)) {
    console.log(`Clearing ${dir}...`);
    
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✓ Cleared ${dir}`);
    } catch (err) {
      console.error(`✗ Failed to clear ${dir}: ${err.message}`);
    }
  } else {
    console.log(`Directory ${dir} does not exist, skipping.`);
  }
});

console.log('Cache clearing complete!');