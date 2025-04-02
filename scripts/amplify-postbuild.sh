#!/bin/bash

echo "Running post-build script for AWS Amplify deployment..."

# Check for standalone build
if [ -d ".next/standalone" ]; then
  echo "Standalone build detected, setting up for Amplify SSR deployment"
  
  # Copy all necessary server files
  if [ -f ".next/required-server-files.json" ]; then
    cp .next/required-server-files.json .
    echo "Copied required-server-files.json to root directory"
  else
    echo "Warning: required-server-files.json not found in .next directory"
  fi
  
  # Copy server.js to root if it exists in standalone
  if [ -f ".next/standalone/server.js" ]; then
    cp .next/standalone/server.js .
    echo "Copied server.js to root directory"
  fi
  
  # Ensure trace files are available for Amplify
  mkdir -p .next/trace
  touch .next/trace/.trace
  echo "Created trace directory and placeholder file"
  
  # Verify the directory structure
  echo "Root directory contents:"
  ls -la
  echo "Next directory contents:"
  ls -la .next
  
  echo "Post-build script completed successfully"
else
  echo "ERROR: Next.js standalone build was not created correctly!"
  echo "Checking .next directory contents:"
  ls -la .next
  exit 1
fi
