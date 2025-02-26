#!/bin/bash

# Create necessary directories
mkdir -p public/images/about public/images/contact public/images/team

# Istanbul images
curl -o public/images/tours/istanbul.jpg https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80
curl -o public/images/tours/real-images/istanbul.jpg https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80
curl -o public/images/destinations/istanbul-blue-mosque.jpg https://images.unsplash.com/photo-1596819203538-78a18d50f601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80

# Istanbul Hagia Sophia
curl -o public/images/tours/istanbul-hagia-sophia.jpg https://images.unsplash.com/photo-1585148859412-3a7119427f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80
curl -o public/images/tours/real-images/istanbul-hagia-sophia.jpg https://images.unsplash.com/photo-1585148859412-3a7119427f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80

# Cappadocia images
curl -o public/images/tours/cappadocia-balloons.jpg https://images.unsplash.com/photo-1605904565269-00b35a026216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80
curl -o public/images/tours/real-images/cappadocia-balloons.jpg https://images.unsplash.com/photo-1605904565269-00b35a026216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80

# Dubai images
curl -o public/images/tours/dubai-skyline.jpg https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80
curl -o public/images/tours/real-images/dubai-skyline.jpg https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80
curl -o public/images/tours/turkey-dubai.jpg https://images.unsplash.com/photo-1546412414-e1885e51cfa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80
curl -o public/images/tours/real-images/turkey-dubai.jpg https://images.unsplash.com/photo-1546412414-e1885e51cfa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80

# About page images
curl -o public/images/about/about-hero.jpg https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80
curl -o public/images/about/team-photo.jpg https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80
curl -o public/images/about/office.jpg https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80

# Contact page images
curl -o public/images/contact/contact-hero.jpg https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80
curl -o public/images/contact/map.jpg https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80

# Team member images
curl -o public/images/team/guide1.jpg https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80
curl -o public/images/team/guide2.jpg https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80
curl -o public/images/team/guide3.jpg https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80
curl -o public/images/team/guide4.jpg https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80

# Destinations that were missing
curl -o public/images/destinations/pamukkale-terraces.jpg https://images.unsplash.com/photo-1590562177987-947ec27177a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80
curl -o public/images/destinations/rome.jpg https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80
curl -o public/images/destinations/paris.jpg https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80
curl -o public/images/destinations/tokyo.jpg https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80
curl -o public/images/destinations/new-york.jpg https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80
curl -o public/images/destinations/bali.jpg https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80

# Hero image
curl -o public/images/istanbul-hero.jpg https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80

echo "All images downloaded successfully!" 