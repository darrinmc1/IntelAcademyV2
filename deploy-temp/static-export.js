const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting static export process...');

// 1. Clear cache
console.log('Clearing cache...');
try {
  if (fs.existsSync(path.join(__dirname, '.next'))) {
    fs.rmSync(path.join(__dirname, '.next'), { recursive: true, force: true });
  }
  console.log('✓ Cache cleared');
} catch (err) {
  console.error('✗ Failed to clear cache:', err);
}

// 2. Update next.config.mjs to use static export
console.log('Updating next.config.mjs for static export...');
try {
  let config = fs.readFileSync(path.join(__dirname, 'next.config.mjs'), 'utf8');
  config = config.replace('// output: \'export\',', 'output: \'export\',');
  fs.writeFileSync(path.join(__dirname, 'next.config.mjs'), config);
  console.log('✓ Config updated');
} catch (err) {
  console.error('✗ Failed to update config:', err);
}

// 3. Build the project
console.log('Building project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✓ Build completed');
} catch (err) {
  console.error('✗ Build failed:', err);
  process.exit(1);
}

console.log('\nStatic export complete! The output is in the "out" directory.');
console.log('You can deploy this directory to any static hosting service like:');
console.log('- Vercel');
console.log('- Netlify');
console.log('- GitHub Pages');
console.log('- AWS S3');
console.log('- Azure Static Web Apps');