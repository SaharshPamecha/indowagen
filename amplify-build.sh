#!/bin/bash
echo "Starting Indowagen Website Next.js build process"

# Install dependencies
echo "Installing dependencies..."
npm ci --legacy-peer-deps

# Verify assets
echo "Verifying assets..."
bash scripts/copy-missing-assets.sh
ls -la public/images/about/

# Build Next.js application
echo "Building Next.js application..."
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build

echo "Build completed successfully!"
