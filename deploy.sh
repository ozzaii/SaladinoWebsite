#!/bin/bash
set -e

# Build the project
echo "Building project..."
npm run build

# Create a temporary directory for the gh-pages branch
echo "Creating temporary directory..."
rm -rf tmp-gh-pages
mkdir tmp-gh-pages
cd tmp-gh-pages
git init
git remote add origin $(git -C .. config --get remote.origin.url)
git checkout -b gh-pages

# Copy the contents of the out directory
echo "Copying built files..."
cp -R ../out/* .
cp -R ../out/.* . 2>/dev/null || :

# Add .nojekyll file to disable Jekyll
echo "" > .nojekyll

# Commit and push
echo "Committing changes..."
git add -A
git commit -m "Deploy website"

echo "Pushing to gh-pages branch..."
git push -f origin gh-pages

# Clean up
cd ..
rm -rf tmp-gh-pages

echo "Deployment complete!" 