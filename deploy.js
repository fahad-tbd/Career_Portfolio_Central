#!/usr/bin/env node

/**
 * Career Portfolio Central - Deployment Script
 * 
 * This script helps prepare and deploy your Career Portfolio Central website
 * to various hosting platforms.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(colors[color] + message + colors.reset);
}

function banner() {
  log('\n' + '='.repeat(60), 'blue');
  log('🚀 Career Portfolio Central - Deployment Helper', 'bold');
  log('='.repeat(60), 'blue');
}

function checkEnvironment() {
  log('\n📋 Checking environment...', 'blue');
  
  // Check if we're in the right directory
  if (!fs.existsSync('package.json')) {
    log('❌ Error: package.json not found. Please run this script from the project root.', 'red');
    process.exit(1);
  }
  
  // Check if production build exists
  if (!fs.existsSync('production-build')) {
    log('❌ Error: production-build folder not found.', 'red');
    log('💡 Run "npm run build" first to create the production build.', 'yellow');
    process.exit(1);
  }
  
  log('✅ Environment check passed!', 'green');
}

function showDeploymentOptions() {
  log('\n🌐 Deployment Options:', 'blue');
  log('');
  log('1. 📦 Netlify (Recommended for beginners)', 'green');
  log('   - Go to netlify.com');
  log('   - Drag and drop the "production-build" folder');
  log('   - Your site will be live instantly!');
  log('');
  log('2. ⚡ Vercel (Great for developers)', 'green');
  log('   - Run: npm i -g vercel');
  log('   - Run: cd production-build && vercel --prod');
  log('');
  log('3. 🐙 GitHub Pages (Free hosting)', 'green');
  log('   - Upload production-build contents to gh-pages branch');
  log('   - Enable GitHub Pages in repository settings');
  log('');
  log('4. 🔧 Custom Server', 'green');
  log('   - Upload production-build contents to your web server');
  log('   - Configure server to serve index.html for all routes');
  log('');
}

function showTestingInfo() {
  log('\n🧪 Local Testing:', 'blue');
  log('');
  log('To test your production build locally:');
  log('cd production-build', 'yellow');
  log('npx serve . -p 3000', 'yellow');
  log('');
  log('Then visit: http://localhost:3000', 'green');
  log('');
}

function showBuildInfo() {
  log('\n📊 Build Information:', 'blue');
  
  const buildPath = path.join(process.cwd(), 'production-build');
  
  try {
    const stats = fs.statSync(buildPath);
    log(`📅 Build Date: ${stats.mtime.toLocaleString()}`, 'green');
    
    // Count files
    function countFiles(dir) {
      let count = 0;
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
          count += countFiles(filePath);
        } else {
          count++;
        }
      }
      return count;
    }
    
    const fileCount = countFiles(buildPath);
    log(`📁 Total Files: ${fileCount}`, 'green');
    
    // Get folder size (approximate)
    const sizeOutput = execSync(`du -sh "${buildPath}" 2>/dev/null || echo "Size calculation not available"`, { encoding: 'utf8' });
    if (!sizeOutput.includes('not available')) {
      log(`💾 Build Size: ${sizeOutput.split('\t')[0]}`, 'green');
    }
    
  } catch (error) {
    log('⚠️  Could not gather build statistics', 'yellow');
  }
}

function main() {
  banner();
  checkEnvironment();
  showBuildInfo();
  showDeploymentOptions();
  showTestingInfo();
  
  log('\n' + '='.repeat(60), 'blue');
  log('🎉 Your Career Portfolio Central is ready for deployment!', 'green');
  log('📁 All files are in the "production-build" folder', 'blue');
  log('📖 See production-build/README.md for detailed instructions', 'blue');
  log('='.repeat(60), 'blue');
  log('');
}

if (require.main === module) {
  main();
}

module.exports = { main, checkEnvironment, showDeploymentOptions };
