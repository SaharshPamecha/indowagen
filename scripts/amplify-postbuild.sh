#!/bin/bash

echo "Running post-build script for AWS Amplify deployment..."

# Ensure the required-server-files.json is available at the expected location
if [ -f ".next/standalone/server.js" ] && [ -f ".next/required-server-files.json" ]; then
  echo "Standalone build detected, setting up for Amplify SSR deployment"
  
  # Create a backup of required-server-files.json at the root if needed
  cp .next/required-server-files.json .
  echo "Copied required-server-files.json to root directory"
  
  # Verify the structure of the standalone build
  ls -la .next/standalone
  ls -la .next/static
  
  echo "Post-build script completed successfully"
else
  echo "ERROR: Next.js standalone build was not created correctly!"
  echo "Checking .next directory contents:"
  ls -la .next
  exit 1
fi
