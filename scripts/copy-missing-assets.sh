#!/bin/bash

# Create the directory structure
mkdir -p public/images/about

# Create a simple 1x1 transparent GIF for the testimonial image
echo "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" | base64 -d > public/images/about/testimonial-img.jpg

echo "Created placeholder image for testimonial-img.jpg"
