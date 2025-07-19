const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

console.log('Installing SWC dependencies...');
console.log(`Platform: ${os.platform()}, Architecture: ${os.arch()}`);

// Get the Next.js version from package.json
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
const nextVersion = packageJson.dependencies.next.replace('^', '');

console.log(`Detected Next.js version: ${nextVersion}`);

// Don't install platform-specific dependencies
// Next.js will handle this automatically
console.log('Skipping platform-specific SWC installation. Next.js will handle this automatically.');