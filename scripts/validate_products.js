/**
 * Product Data Validation Script
 * 
 * This script validates the product data structure to ensure all required fields
 * are present and image paths are valid.
 */

const fs = require('fs');
const path = require('path');

// Read the products file directly since it uses ESM exports
const productsFilePath = path.join(__dirname, '..', 'src', 'data', 'products.js');
const productsContent = fs.readFileSync(productsFilePath, 'utf8');

// Extract the products array using regex (simplified approach for this script)
const productsMatch = productsContent.match(/export const products = (\[\s\S*\]);/);
if (!productsMatch) {
  console.error('Could not parse products file');
  process.exit(1);
}

// Evaluate the products array string
let products;
try {
  // Create a function that will evaluate the array string in a safe context
  const evalInContext = (str) => {
    return eval(`(${str})`);
  };
  products = evalInContext(productsMatch[1]);
} catch (error) {
  console.error('Error evaluating products data:', error);
  process.exit(1);
}

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Required fields that should be present in all products
const REQUIRED_FIELDS = ['id', 'name', 'tagline', 'description', 'price', 'image'];

// Optional fields that are recommended but not strictly required
const RECOMMENDED_FIELDS = ['images', 'category', 'features', 'specs', 'longDescription'];

console.log(`Validating ${products.length} products...`);
console.log('='.repeat(50));

let errors = 0;
let warnings = 0;

products.forEach((product, index) => {
  console.log(`\nProduct ${index + 1}: ${product.id || 'MISSING ID'}`);
  console.log('-'.repeat(50));
  
  // Check required fields
  REQUIRED_FIELDS.forEach(field => {
    if (!product[field]) {
      console.error(`❌ ERROR: Missing required field "${field}"`);
      errors++;
    }
  });
  
  // Check recommended fields
  RECOMMENDED_FIELDS.forEach(field => {
    if (!product[field]) {
      console.warn(`⚠️ WARNING: Missing recommended field "${field}"`);
      warnings++;
    }
  });
  
  // Validate image paths
  if (product.image) {
    const imagePath = path.join(PUBLIC_DIR, product.image);
    if (!fs.existsSync(imagePath)) {
      console.error(`❌ ERROR: Image file not found: ${product.image}`);
      errors++;
    }
  }
  
  // Validate multiple images if present
  if (product.images && Array.isArray(product.images)) {
    product.images.forEach((img, imgIndex) => {
      const imagePath = path.join(PUBLIC_DIR, img);
      if (!fs.existsSync(imagePath)) {
        console.error(`❌ ERROR: Image ${imgIndex + 1} not found: ${img}`);
        errors++;
      }
    });
  } else if (product.images && !Array.isArray(product.images)) {
    console.error(`❌ ERROR: "images" field must be an array`);
    errors++;
  }
  
  // Check category field
  if (!product.category) {
    console.warn(`⚠️ WARNING: Missing category, default "electric-vehicle" will be used`);
    warnings++;
  }
  
  // Check features structure
  if (product.features) {
    if (Array.isArray(product.features)) {
      // Valid structure, check each entry
      product.features.forEach((feature, featureIndex) => {
        if (typeof feature !== 'string' && (!feature.title || !feature.description)) {
          console.error(`❌ ERROR: Feature ${featureIndex + 1} has invalid structure`);
          errors++;
        }
      });
    } else {
      console.error(`❌ ERROR: "features" must be an array`);
      errors++;
    }
  }
});

console.log('\n' + '='.repeat(50));
console.log(`Validation complete: ${errors} errors, ${warnings} warnings`);

if (errors > 0) {
  console.log('\n❌ FAILED: Please fix the errors above before proceeding.');
  process.exit(1);
} else if (warnings > 0) {
  console.log('\n⚠️ PASSED WITH WARNINGS: Consider addressing the warnings for better content quality.');
  process.exit(0);
} else {
  console.log('\n✅ PASSED: All products validated successfully!');
  process.exit(0);
}
