#!/bin/bash
set -e  # Exit immediately if a command exits with non-zero status

echo "Installing dependencies..."
npm install --save-dev tailwindcss postcss autoprefixer

echo "Building project..."
export PATH="$PATH:./node_modules/.bin"
npx next build && node fix-html.js

# Check if build succeeded
if [ ! -d "out" ] || [ -z "$(ls -A out 2>/dev/null)" ]; then
  echo "Build failed or 'out' directory is empty. Exiting."
  exit 1
fi

echo "Saving built files..."
rm -rf /tmp/next-out
mkdir -p /tmp/next-out
cp -R out/* /tmp/next-out/
cp -R out/.[!.]* /tmp/next-out/ 2>/dev/null || true

echo "Creating a fresh gh-pages branch..."
git checkout --orphan gh-pages

echo "Cleaning the branch..."
# Keep .git directory but remove everything else
find . -maxdepth 1 -not -path "./.git" -not -path "." -exec rm -rf {} \;

echo "Copying built files from saved out directory..."
cp -R /tmp/next-out/* .
cp -R /tmp/next-out/.[!.]* . 2>/dev/null || true

echo "Creating .nojekyll file..."
touch .nojekyll

echo "Committing changes..."
git add -A
git commit -m "Deploy website to GitHub Pages" --no-verify

echo "Pushing to gh-pages branch..."
# Push in smaller chunks with increased timeout and buffer size
git config http.postBuffer 524288000
git config http.lowSpeedLimit 1000
git config http.lowSpeedTime 300
git push -f origin gh-pages

echo "Deployment completed successfully!"
git checkout main 