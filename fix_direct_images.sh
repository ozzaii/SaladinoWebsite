#!/bin/bash

# Using direct image URLs that don't require redirection

# Cappadocia balloons - direct high quality image
echo "Fixing Cappadocia balloons image..."
curl -L -o public/images/tours/cappadocia-balloons.jpg "https://images.unsplash.com/photo-1570598442183-6d34a2b539bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
curl -L -o public/images/tours/real-images/cappadocia-balloons.jpg "https://images.unsplash.com/photo-1570598442183-6d34a2b539bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"

# Istanbul Hagia Sophia - direct high quality image
echo "Fixing Hagia Sophia image..."
curl -L -o public/images/tours/istanbul-hagia-sophia.jpg "https://images.unsplash.com/photo-1636299954740-b08e9c4b43e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
curl -L -o public/images/tours/real-images/istanbul-hagia-sophia.jpg "https://images.unsplash.com/photo-1636299954740-b08e9c4b43e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"

# Turkey-Dubai combined image
echo "Fixing Turkey-Dubai image..."
curl -L -o public/images/tours/turkey-dubai.jpg "https://images.unsplash.com/photo-1590622541550-5bc1b2df427a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
curl -L -o public/images/tours/real-images/turkey-dubai.jpg "https://images.unsplash.com/photo-1590622541550-5bc1b2df427a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"

# Additional destination images
echo "Fixing Pamukkale image..."
curl -L -o public/images/destinations/pamukkale-terraces.jpg "https://images.unsplash.com/photo-1590511914231-47453e7e8a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"

echo "Fixing Blue Mosque image..."
curl -L -o public/images/destinations/istanbul-blue-mosque.jpg "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"

echo "All remaining images fixed with direct URLs!" 