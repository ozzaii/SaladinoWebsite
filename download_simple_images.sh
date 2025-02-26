#!/bin/bash

# Use simple direct image URLs from Pexels that don't need complex escaping
# First, create backup copies of any existing files
mkdir -p backups

# Cappadocia balloons
echo "Downloading Cappadocia balloons..."
wget -O public/images/tours/cappadocia-balloons.jpg https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg
cp public/images/tours/cappadocia-balloons.jpg public/images/tours/real-images/cappadocia-balloons.jpg

# Istanbul Hagia Sophia
echo "Downloading Hagia Sophia..."
wget -O public/images/tours/istanbul-hagia-sophia.jpg https://images.pexels.com/photos/3732494/pexels-photo-3732494.jpeg
cp public/images/tours/istanbul-hagia-sophia.jpg public/images/tours/real-images/istanbul-hagia-sophia.jpg

# Turkey-Dubai combined
echo "Downloading Turkey-Dubai image..."
wget -O public/images/tours/turkey-dubai.jpg https://images.pexels.com/photos/4388159/pexels-photo-4388159.jpeg
cp public/images/tours/turkey-dubai.jpg public/images/tours/real-images/turkey-dubai.jpg

# Pamukkale terraces
echo "Downloading Pamukkale terraces..."
wget -O public/images/destinations/pamukkale-terraces.jpg https://images.pexels.com/photos/8876609/pexels-photo-8876609.jpeg

# Istanbul Blue Mosque
echo "Downloading Blue Mosque..."
wget -O public/images/destinations/istanbul-blue-mosque.jpg https://images.pexels.com/photos/10300184/pexels-photo-10300184.jpeg

echo "All images downloaded successfully!" 