/**
 * Convert products.js to JSON for validation
 */

const fs = require('fs');
const path = require('path');

// Read the products file
const productsFilePath = path.join(__dirname, '..', 'src', 'data', 'products.js');
const productsContent = fs.readFileSync(productsFilePath, 'utf8');

// Extract just the array part
const arrayStartIndex = productsContent.indexOf('[');
const arrayEndIndex = productsContent.lastIndexOf(']') + 1;

if (arrayStartIndex === -1 || arrayEndIndex === -1) {
  console.error('Could not find products array in file');
  process.exit(1);
}

const arrayContent = productsContent.substring(arrayStartIndex, arrayEndIndex);

// Save to a temporary JSON file
const jsonOutputPath = path.join(__dirname, 'products_temp.json');
fs.writeFileSync(jsonOutputPath, arrayContent);

console.log(`Products data extracted to ${jsonOutputPath}`);
console.log('You can now run: node scripts/validate_products_json.js');
