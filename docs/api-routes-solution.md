# API Routes Solution for Static Export

Since we're moving from AWS Amplify's SSR deployment to a static S3/CloudFront deployment, we need to handle API routes differently. Here are solutions for the API routes found in your application:

## Options for API Routes in Static Deployment

### 1. AWS Lambda Functions (Recommended)

Create serverless functions to handle your API logic:

```bash
# Example folder structure
/lambda-functions
  /accessories
    index.js
  /dealers
    index.js
  # etc.
```

Deploy these functions using AWS SAM or the Serverless Framework, and configure API Gateway to expose them.

### 2. Pre-generate Static JSON Files

For data that doesn't change frequently:

```javascript
// scripts/generate-static-data.js
const fs = require('fs');
const path = require('path');

// Your data sources
const accessories = require('../src/data/accessories');
const dealers = require('../src/data/dealers');
// etc.

// Create public/data directory if it doesn't exist
const dataDir = path.join(process.cwd(), 'public', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Write JSON files
fs.writeFileSync(
  path.join(dataDir, 'accessories.json'),
  JSON.stringify(accessories),
  'utf-8'
);

fs.writeFileSync(
  path.join(dataDir, 'dealers.json'),
  JSON.stringify(dealers),
  'utf-8'
);

// etc.
console.log('Static JSON files generated successfully');
```

Then update your application to fetch from these static JSON files:

```javascript
// Before (API route)
const fetchAccessories = async () => {
  const res = await fetch('/api/accessories');
  return res.json();
};

// After (static JSON)
const fetchAccessories = async () => {
  const res = await fetch('/data/accessories.json');
  return res.json();
};
```

### 3. External API Service

Move your API logic to a separate service:

- AWS API Gateway + Lambda
- Express.js on EC2/ECS
- Firebase Functions
- Netlify Functions

## Implementation Plan

1. **For read-only data (products, accessories, etc.):**
   - Generate static JSON files during build
   - Update client-side code to fetch from these files

2. **For interactive endpoints (form submissions):**
   - Create AWS Lambda functions
   - Configure API Gateway
   - Update client-side code to point to the new API endpoints

3. **For sitemap.xml:**
   - Generate a static sitemap.xml file during build
   - Place it in the public directory

## Example: Converting the Accessories API

### Step 1: Create a script to generate static JSON

```javascript
// scripts/generate-static-json.js
const fs = require('fs');
const path = require('path');
const accessoriesData = require('../src/data/accessories');

const outputDir = path.join(process.cwd(), 'public', 'data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outputDir, 'accessories.json'),
  JSON.stringify(accessoriesData),
  'utf-8'
);

console.log('Accessories data generated successfully');
```

### Step 2: Update package.json to run this script during build

```json
"scripts": {
  "prebuild": "node scripts/generate-static-json.js",
  "build": "next build"
}
```

### Step 3: Update client code to fetch from static JSON

```javascript
// Before
const fetchAccessories = async () => {
  const res = await fetch('/api/accessories');
  return res.json();
};

// After
const fetchAccessories = async () => {
  const res = await fetch('/data/accessories.json');
  return res.json();
};
```

## Form Submissions with AWS Lambda

For interactive endpoints like form submissions:

1. Create an AWS Lambda function
2. Configure API Gateway to expose it
3. Update your form submission code to point to the API Gateway endpoint

This approach allows you to maintain the functionality of your API routes while using a static hosting solution.
