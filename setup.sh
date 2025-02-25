#!/bin/bash

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}==== Saladino Travel Website Setup ====${NC}"
echo -e "${YELLOW}This script will install dependencies and set up your project for deployment${NC}"

# Create necessary directories
echo -e "\n${GREEN}Creating necessary directories...${NC}"
mkdir -p public/images/{destinations,tours,team,testimonials}
mkdir -p src/components/tours
mkdir -p src/components/destinations
mkdir -p src/components/shared

# Install dependencies
echo -e "\n${GREEN}Installing dependencies...${NC}"
npm install --save @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio

# Next.js for GitHub Pages setup
echo -e "\n${GREEN}Setting up for GitHub Pages deployment...${NC}"
npm install --save next-export-optimize-images

# Create .github/workflows directory
mkdir -p .github/workflows

# Create GitHub Actions workflow file for automatic deployment
cat > .github/workflows/deploy.yml << 'EOF'
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build with Next.js
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./out
  
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
EOF

# Update next.config.js for GitHub Pages
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Add basePath if deploying to GitHub Pages from a user or organization repository
  // basePath: '/SaladinoWebsite',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
EOF

# Create a placeholder .nojekyll file (needed for GitHub Pages)
touch out/.nojekyll

# Add scripts to package.json
npx json -I -f package.json -e 'this.scripts["export"] = "next build && next export"'
npx json -I -f package.json -e 'this.scripts["deploy"] = "next build && touch out/.nojekyll && git add out/ && git commit -m \"Deploy to gh-pages\" && git subtree push --prefix out origin gh-pages"'

echo -e "\n${GREEN}Setup complete!${NC}"
echo -e "${YELLOW}To deploy to GitHub Pages:${NC}"
echo -e "1. Push your changes to GitHub"
echo -e "2. GitHub Actions will automatically build and deploy your site"
echo -e "3. Your site will be available at https://ozzaii.github.io/SaladinoWebsite"
echo -e "\n${YELLOW}For manual deployment:${NC}"
echo -e "1. Run: npm run deploy"
echo -e "\n${GREEN}Happy coding!${NC}" 