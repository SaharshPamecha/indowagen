const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// List of critical files that should be checked
const criticalFiles = [
  'public/images/about/testimonial-img.jpg'
];

// Create a simple 1x1 transparent GIF
const transparentPixelBase64 = 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
const emptyImageBuffer = Buffer.from(transparentPixelBase64, 'base64');

// Use shell commands for more robust directory creation
function ensureDirectoryExists(dirPath) {
  try {
    execSync(`mkdir -p "${dirPath}"`);
    return true;
  } catch (error) {
    console.error(`Failed to create directory: ${dirPath}`, error);
    return false;
  }
}

// Check each file and create a placeholder if missing
criticalFiles.forEach(filePath => {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    const directory = path.dirname(fullPath);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      console.log(`Missing file detected: ${filePath}`);
      
      // Ensure directory exists using shell command
      console.log(`Creating directory: ${directory}`);
      const dirCreated = ensureDirectoryExists(directory);
      
      if (dirCreated) {
        // Create a placeholder file based on extension
        const ext = path.extname(filePath).toLowerCase();
        if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif') {
          console.log(`Creating placeholder image: ${filePath}`);
          try {
            // Try to write the file
            fs.writeFileSync(fullPath, emptyImageBuffer);
            console.log(`Successfully created placeholder for: ${filePath}`);
          } catch (writeError) {
            console.error(`Failed to write image file: ${fullPath}`, writeError);
            // Fallback: try using touch command
            try {
              execSync(`touch "${fullPath}"`);
              execSync(`echo "${transparentPixelBase64}" | base64 -d > "${fullPath}"`);
              console.log(`Created placeholder using shell commands: ${filePath}`);
            } catch (touchError) {
              console.error(`Failed to create file using touch: ${fullPath}`, touchError);
            }
          }
        } else {
          // For other file types, create an empty file
          console.log(`Creating empty file: ${filePath}`);
          try {
            fs.writeFileSync(fullPath, '');
          } catch (writeError) {
            console.error(`Failed to write empty file: ${fullPath}`, writeError);
            // Fallback: try using touch command
            try {
              execSync(`touch "${fullPath}"`);
              console.log(`Created empty file using touch: ${filePath}`);
            } catch (touchError) {
              console.error(`Failed to create file using touch: ${fullPath}`, touchError);
            }
          }
        }
      }
    } else {
      console.log(`File exists: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing file: ${filePath}`, error);
  }
});

console.log('Asset verification complete');
