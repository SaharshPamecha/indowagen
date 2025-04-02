#!/bin/bash

echo "Creating trace files specifically for AWS Amplify deployment..."

# Create root trace directory and file
mkdir -p trace
touch trace/.trace
echo "Created trace directory and file at project root"

# Create .next/trace directory and file
if [ -e ".next/trace" ] && [ ! -d ".next/trace" ]; then
  echo "Found .next/trace as a file, removing it..."
  rm -f .next/trace
fi

mkdir -p .next/trace
touch .next/trace/.trace
echo "Created trace directory and file in .next directory"

# Create trace directory at the expected Amplify location
mkdir -p /codebuild/output/src*/src/indowagen/trace
touch /codebuild/output/src*/src/indowagen/trace/.trace
echo "Created trace directory and file at Amplify build output location"

echo "Trace files setup complete!"

# List the created directories to verify
echo "Listing trace directories:"
ls -la trace
ls -la .next/trace
ls -la /codebuild/output/src*/src/indowagen/trace || echo "Not running in Amplify environment"
