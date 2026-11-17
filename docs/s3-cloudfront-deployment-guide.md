# AWS S3 and CloudFront Deployment Guide for Indo Wagen Website

This guide walks through deploying the Next.js application to AWS S3 with CloudFront as a CDN and attaching a custom domain.

## Prerequisites

- AWS CLI installed and configured with appropriate permissions
- Next.js application configured for static export (already done in `next.config.js`)
- Domain name that you want to use for the website

## Step 1: Create an S3 Bucket

1. Sign in to the AWS Management Console
2. Navigate to S3 service
3. Click "Create bucket"
4. Enter a globally unique bucket name (e.g., `indowagen-website`)
5. Choose the AWS Region closest to your target audience
6. Leave default settings for "Block Public Access" (we'll use CloudFront for access)
7. Click "Create bucket"

## Step 2: Configure S3 Bucket for Website Hosting

1. Select your newly created bucket
2. Go to the "Properties" tab
3. Scroll down to "Static website hosting" and click "Edit"
4. Select "Enable"
5. For "Index document", enter `index.html`
6. For "Error document", enter `404.html`
7. Click "Save changes"

## Step 3: Create a Bucket Policy for CloudFront Access

1. Go to the "Permissions" tab of your S3 bucket
2. Click "Bucket Policy" and add the following policy (replace `your-bucket-name` with your actual bucket name):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipal",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::your-account-id:distribution/your-distribution-id"
        }
      }
    }
  ]
}
```

Note: You'll need to update this policy after creating your CloudFront distribution.

## Step 4: Create a CloudFront Distribution

1. Navigate to CloudFront service
2. Click "Create Distribution"
3. For "Origin Domain", select your S3 bucket website endpoint
4. For "Origin Access", choose "Origin access control settings (recommended)"
5. Create a new origin access control setting
6. Under "Default cache behavior":
   - Viewer protocol policy: "Redirect HTTP to HTTPS"
   - Allowed HTTP methods: "GET, HEAD"
   - Cache policy: "CachingOptimized"
   - Origin request policy: "CORS-S3Origin"
7. Under "Settings":
   - Default root object: `index.html`
   - Enable "Custom SSL Certificate" if you have a custom domain
8. Click "Create distribution"

## Step 5: Update S3 Bucket Policy with CloudFront Distribution ID

After creating your CloudFront distribution, update the S3 bucket policy with your actual CloudFront distribution ID and account ID.

## Step 6: Configure Custom Domain with Route 53

1. Navigate to Route 53 service
2. Create or select a hosted zone for your domain
3. Create a new record:
   - Record name: your subdomain or @ for root domain
   - Record type: A
   - Route traffic to: "Alias to CloudFront distribution"
   - Select your CloudFront distribution
   - Click "Create records"

## Step 7: Configure SSL Certificate with ACM

1. Navigate to AWS Certificate Manager (ACM)
2. Request a new certificate for your domain
3. Validate the certificate (typically through DNS validation)
4. Once validated, update your CloudFront distribution to use this certificate

## Step 8: Update Deployment Script

Update the `scripts/deploy-to-s3.sh` script with your actual:
- S3 bucket name
- CloudFront distribution ID
- AWS region

## Step 9: Deploy Your Website

Run the deployment script:

```bash
./scripts/deploy-to-s3.sh
```

## Troubleshooting Common Issues

### API Routes in Static Export

Since we're using static export (`output: 'export'`), API routes won't work directly. Consider these alternatives:

1. Move API functionality to serverless functions (AWS Lambda)
2. Use a backend service like AWS AppSync or API Gateway
3. For simple data, pre-generate JSON files during build time

### Image Optimization

Next.js Image Optimization requires a server component. With static export:

1. We've set `unoptimized: true` in `next.config.js`
2. Consider pre-optimizing images during build or using a CDN with image optimization

### Dynamic Routes

For dynamic routes, ensure you're using `generateStaticParams` to pre-render all necessary paths.

## Monitoring and Maintenance

- Set up CloudWatch alarms for monitoring
- Regularly check CloudFront logs for errors
- Consider setting up a CI/CD pipeline for automated deployments

## Cost Considerations

- S3: Storage costs + GET requests
- CloudFront: Data transfer + request costs
- Route 53: Domain and DNS query costs
- ACM: Free for certificates used with CloudFront
