# Cloudways Static Site Deployment Guide

This guide will help you deploy the PGS FM website as a static site on Cloudways.

## Prerequisites

- Node.js 18+ installed locally
- Cloudways account with a server
- Domain configured on Cloudways

## Build Process

### 1. Install Dependencies
```bash
npm install
```

### 2. Build Static Site
```bash
npm run build:static
```

This will create an `out` directory with all static files.

### 3. Verify Build
Check that the `out` directory contains:
- `index.html` (homepage)
- Static assets (CSS, JS, images)
- Individual page directories with `index.html` files

## Cloudways Deployment

### 1. Upload Files
- Upload the entire contents of the `out` directory to your Cloudways public_html folder
- Upload the `.htaccess` file to the root of public_html

### 2. File Structure on Cloudways
```
public_html/
├── .htaccess
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── about/
│   └── index.html
├── services/
│   ├── index.html
│   └── [slug]/
├── contact/
│   └── index.html
└── ... (other pages)
```

### 3. Set Permissions
```bash
chmod 644 .htaccess
chmod 644 *.html
chmod -R 755 _next/
chmod -R 755 */
```

### 4. Test Deployment
- Visit your domain
- Test all navigation links
- Verify images load correctly
- Check that the terrorism alert appears in the footer

## Configuration Details

### Next.js Configuration (`next.config.ts`)
- `output: 'export'` - Enables static export
- `trailingSlash: true` - Adds trailing slashes to URLs
- `images.unoptimized: true` - Disables Next.js image optimization for static export

### .htaccess Configuration
- Handles Next.js static export routing
- Sets up proper caching headers
- Enables compression
- Adds security headers
- Prevents access to sensitive files

## Troubleshooting

### Common Issues

1. **404 Errors on Page Refresh**
   - Ensure `.htaccess` is uploaded correctly
   - Check that rewrite rules are working

2. **Images Not Loading**
   - Verify image paths in the `out` directory
   - Check that images are in the `public` folder

3. **CSS/JS Not Loading**
   - Ensure `_next/static` directory is uploaded
   - Check file permissions

### Performance Optimization

1. **Enable Gzip Compression**
   - Already configured in `.htaccess`

2. **Set Cache Headers**
   - Static assets cached for 1 year
   - HTML files cached for 1 hour

3. **Enable HTTPS**
   - Uncomment HTTPS redirect rules in `.htaccess`

## Maintenance

### Updating the Site
1. Make changes locally
2. Run `npm run build:static`
3. Upload new `out` directory contents to Cloudways
4. Test the updated site

### Monitoring
- Check Cloudways server logs for any errors
- Monitor site performance and loading times
- Verify all links and functionality work correctly

## Security Considerations

- The `.htaccess` file prevents access to sensitive files
- Security headers are configured
- HTTPS redirect is available (uncomment when SSL is ready)

## Support

For issues with:
- **Next.js build**: Check Next.js documentation
- **Cloudways deployment**: Contact Cloudways support
- **Website functionality**: Review the codebase and configurations
