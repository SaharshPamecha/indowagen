#!/bin/bash

# S3/CloudFront Deployment Script for Next.js
# This script builds and deploys the Next.js application to AWS S3 and invalidates CloudFront cache

# Exit on error
set -e

# Configuration - Update these values
S3_BUCKET="your-s3-bucket-name"
CLOUDFRONT_DISTRIBUTION_ID="your-cloudfront-distribution-id"
REGION="us-east-1" # Change to your AWS region

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting deployment process for Indo Wagen website...${NC}"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}AWS CLI is not installed. Please install it first.${NC}"
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}AWS credentials are not configured. Please run 'aws configure' first.${NC}"
    exit 1
fi

# Step 1: Build the Next.js application
echo -e "${YELLOW}Building Next.js application for static export...${NC}"
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
    echo -e "${RED}Build failed. 'out' directory not found.${NC}"
    exit 1
fi

# Step 2: Sync files to S3
echo -e "${YELLOW}Deploying to S3 bucket: ${S3_BUCKET}...${NC}"
aws s3 sync out/ s3://${S3_BUCKET} --delete --region ${REGION}

# Step 3: Set proper cache control headers
echo -e "${YELLOW}Setting cache control headers...${NC}"
# Cache static assets for 1 year (immutable)
aws s3 cp s3://${S3_BUCKET}/_next s3://${S3_BUCKET}/_next --recursive --metadata-directive REPLACE --cache-control "public, max-age=31536000, immutable" --region ${REGION}
# Cache HTML files for 1 day
aws s3 cp s3://${S3_BUCKET} s3://${S3_BUCKET} --recursive --exclude "*" --include "*.html" --metadata-directive REPLACE --cache-control "public, max-age=86400" --region ${REGION}

# Step 4: Invalidate CloudFront cache
echo -e "${YELLOW}Invalidating CloudFront cache...${NC}"
aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} --paths "/*" --region ${REGION}

echo -e "${GREEN}Deployment completed successfully!${NC}"
echo -e "${GREEN}Your website should be available at: https://${S3_BUCKET}.s3.${REGION}.amazonaws.com${NC}"
echo -e "${YELLOW}Note: For production use, access your site through the CloudFront URL or your custom domain.${NC}"
