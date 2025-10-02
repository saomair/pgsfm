#!/bin/bash

# PGS FM Static Site Build Script for Cloudways Deployment
# This script builds the static site and prepares it for upload to Cloudways

echo "🚀 Building PGS FM Static Site for Cloudways Deployment..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf out
rm -rf .next

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build static site
echo "🔨 Building static site..."
npm run build:static

# Check if build was successful
if [ ! -d "out" ]; then
    echo "❌ Build failed! No 'out' directory found."
    exit 1
fi

# Create deployment package
echo "📦 Creating deployment package..."
mkdir -p deployment
cp -r out/* deployment/
cp .htaccess deployment/

# Set proper permissions
echo "🔐 Setting file permissions..."
find deployment -type f -name "*.html" -exec chmod 644 {} \;
find deployment -type f -name "*.css" -exec chmod 644 {} \;
find deployment -type f -name "*.js" -exec chmod 644 {} \;
find deployment -type f -name "*.htaccess" -exec chmod 644 {} \;
find deployment -type d -exec chmod 755 {} \;

# Create upload instructions
cat > deployment/UPLOAD_INSTRUCTIONS.txt << EOF
CLOUDWAYS DEPLOYMENT INSTRUCTIONS
==================================

1. Upload all files from this directory to your Cloudways public_html folder
2. Ensure .htaccess is in the root of public_html
3. Set permissions:
   - Files: 644
   - Directories: 755
4. Test your website

IMPORTANT NOTES:
- API routes (/api/*) will not work with static hosting
- Contact form submissions will need alternative handling
- All images and assets are included in this build

Files to upload:
- All contents of this directory
- .htaccess file (already included)

EOF

echo "✅ Build completed successfully!"
echo "📁 Static files are ready in the 'deployment' directory"
echo "📋 Upload instructions are in deployment/UPLOAD_INSTRUCTIONS.txt"
echo ""
echo "Next steps:"
echo "1. Upload the contents of 'deployment' directory to Cloudways public_html"
echo "2. Test your website"
echo "3. Configure contact form handling (API routes won't work with static hosting)"
echo ""
echo "🎉 Ready for Cloudways deployment!"
