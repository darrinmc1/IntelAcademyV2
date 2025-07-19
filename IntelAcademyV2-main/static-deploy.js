const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create a minimal static version of the app
console.log('Creating a minimal static version of the app...');

// 1. Create a temporary directory
const tempDir = path.join(__dirname, 'static-deploy');
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
fs.mkdirSync(tempDir);
fs.mkdirSync(path.join(tempDir, 'public'));

// 2. Create a minimal index.html
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Intel Academy</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
      color: #333;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: #666;
    }
    .button {
      display: inline-block;
      background-color: #0070f3;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.2s;
    }
    .button:hover {
      background-color: #0051a8;
    }
    .logo {
      max-width: 200px;
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <img src="/placeholder-logo.svg" alt="Intel Academy Logo" class="logo">
    <h1>Intel Academy</h1>
    <p>Welcome to the Intel Academy. Our full site is coming soon.</p>
    <p>Last updated: July 15, 2025</p>
    <a href="mailto:info@TheIntelAnalystAcademy.com.au" class="button">Contact Us</a>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(tempDir, 'index.html'), indexHtml);

// 3. Copy placeholder logo
fs.copyFileSync(
  path.join(__dirname, 'public', 'placeholder-logo.svg'),
  path.join(tempDir, 'public', 'placeholder-logo.svg')
);

console.log('Static version created successfully!');
console.log(`Files are in: ${tempDir}`);
console.log('\nTo deploy:');
console.log('1. Upload the contents of this directory to any web hosting service');
console.log('2. For Vercel, run: vercel --prod ' + tempDir);