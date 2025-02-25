# Deployment Guide for Saladino Travel Website

This document provides instructions for deploying the Saladino Travel website to GitHub Pages or manually to any web hosting service.

## GitHub Pages Deployment

### Option 1: Using the Prepared Files

1. Create a new repository on GitHub named `SaladinoWebsite`
2. Clone the repository to your local machine
   ```bash
   git clone https://github.com/ozzaii/SaladinoWebsite.git
   cd SaladinoWebsite
   ```
3. Copy the contents of the `docs` folder from this project to your repository
4. Commit and push the changes to GitHub
   ```bash
   git add .
   git commit -m "Initial commit for Saladino Travel website"
   git push origin main
   ```
5. Go to your repository on GitHub
6. Navigate to Settings > Pages
7. Under "Source", select "Deploy from a branch"
8. Select the "main" branch and the "/docs" folder
9. Click "Save"
10. Your site will be published at `https://ozzaii.github.io/SaladinoWebsite/`

### Option 2: Build and Deploy from Source

1. Clone the repository
   ```bash
   git clone https://github.com/ozzaii/SaladinoWebsite.git
   cd SaladinoWebsite
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Build the project
   ```bash
   npm run build
   ```
4. Copy the contents of the `out` directory to the `docs` directory
   ```bash
   rm -rf docs
   cp -r out docs
   touch docs/.nojekyll
   ```
5. Commit and push the changes to GitHub
   ```bash
   git add .
   git commit -m "Build for GitHub Pages"
   git push origin main
   ```
6. Follow steps 5-10 from Option 1 to configure GitHub Pages

## Manual Deployment

### Option 1: Using the Zip Archive

1. Extract the `saladino-website-deploy.zip` file
2. Upload the extracted contents to your web hosting service's root directory
3. Ensure your web server is configured to serve static files properly
4. Make sure the `.nojekyll` file is included to prevent Jekyll processing

### Option 2: Using the Source Code

1. Clone the repository
   ```bash
   git clone https://github.com/ozzaii/SaladinoWebsite.git
   cd SaladinoWebsite
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Build the project
   ```bash
   npm run build
   ```
4. Upload the contents of the `out` directory to your web hosting service
5. Create an empty file named `.nojekyll` in the root directory of your hosting service

## Testing Locally

To test the website locally before deployment:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Troubleshooting

- If images are not showing, check that the paths in the HTML files match the actual location of the image files
- If links are broken, verify that the `basePath` in `next.config.js` matches your deployment URL structure
- For any 404 errors, ensure that all required files have been properly uploaded to the hosting service

## Need Help?

If you encounter any issues with deployment, please contact the development team at info@saladinotravel.com.
