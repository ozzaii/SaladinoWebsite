#!/bin/bash
set -e

# Build the project
echo "Building project..."
npm run build

# Create a fresh gh-pages branch
echo "Creating a fresh gh-pages branch..."
git branch -D gh-pages 2>/dev/null || true
git checkout --orphan gh-pages

# Remove everything
echo "Cleaning the branch..."
git rm -rf . 2>/dev/null || true
rm -rf * .next .github .git/* .gitignore

# Copy only the contents from the out directory
echo "Copying built files from out directory..."
cp -R out/* .
cp -R out/.* . 2>/dev/null || true

# Create a .nojekyll file
echo "Creating .nojekyll file..."
touch .nojekyll

# Commit changes
echo "Committing changes..."
git add .
git config user.name "GitHub Actions Bot"
git config user.email "<>"
git commit -m "Deploy website to GitHub Pages"

# Push to the gh-pages branch
echo "Pushing to gh-pages branch..."
git push -f origin gh-pages

# Switch back to main branch
echo "Switching back to main branch..."
git checkout main

echo "Deployment complete!" 