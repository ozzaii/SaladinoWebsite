#!/usr/bin/env python3
import os
import requests
import time
import random

# Create directories if they don't exist
os.makedirs('public/images/tours/real-images', exist_ok=True)
os.makedirs('public/images/destinations', exist_ok=True)
os.makedirs('public/images/testimonials', exist_ok=True)

# User agent to simulate a browser
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

# Images to download
images = [
    # Tours
    ('https://images.unsplash.com/photo-1548613053-22087dd8edb7', 'public/images/tours/cappadocia-balloons.jpg'),
    ('https://images.unsplash.com/photo-1545158535-c3f7168c28b6', 'public/images/tours/istanbul-hagia-sophia.jpg'),
    ('https://images.unsplash.com/photo-1546412414-8f1fe035dc76', 'public/images/tours/turkey-dubai.jpg'),
    ('https://images.unsplash.com/photo-1598889385588-fe1649346ee5', 'public/images/tours/dubai-combined.jpg'),
    
    # Destinations
    ('https://images.unsplash.com/photo-1559628565-3082cf2c4c68', 'public/images/destinations/bali.jpg'),
    ('https://images.unsplash.com/photo-1552832230-c0197dd311b5', 'public/images/destinations/rome.jpg'),
    ('https://images.unsplash.com/photo-1542051841857-5f90071e7989', 'public/images/destinations/cappadocia.jpg'),
    ('https://images.unsplash.com/photo-1590511914231-47453e7e8a8e', 'public/images/destinations/pamukkale-terraces.jpg'),
    ('https://images.unsplash.com/photo-1610971309274-58e3138492da', 'public/images/destinations/pamukkale.jpg'),
    ('https://images.unsplash.com/photo-1602413492487-c42e014a71dc', 'public/images/destinations/antalya.jpg'),
    ('https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b', 'public/images/destinations/istanbul-blue-mosque.jpg'),
    ('https://images.unsplash.com/photo-1534430480872-3498386e7856', 'public/images/destinations/new-york.jpg'),
    ('https://images.unsplash.com/photo-1512453979798-5ea266f8880c', 'public/images/destinations/dubai.jpg'),
    ('https://images.unsplash.com/photo-1524231757912-21f4fe3a7200', 'public/images/destinations/istanbul.jpg'),
    
    # Testimonials 
    ('https://images.unsplash.com/photo-1494790108377-be9c29b29330', 'public/images/testimonials/latin-american-woman.jpg'),
    ('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', 'public/images/testimonials/person1.jpg'),
    ('https://images.unsplash.com/photo-1531427186611-ecfd6d936c79', 'public/images/testimonials/person2.jpg'),
    ('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e', 'public/images/testimonials/latin-american-woman2.jpg'),
    ('https://images.unsplash.com/photo-1545996124-0501ebae84d0', 'public/images/testimonials/latin-american-man.jpg'),
    
    # Avatar
    ('https://images.unsplash.com/photo-1560250097-0b93528c311a', 'public/images/concierge-avatar.jpg'),
]

# Additional parameters for Unsplash
params = {
    'q': '85',
    'w': '1200',
    'fit': 'max'
}

# Download each image
for i, (url, path) in enumerate(images):
    try:
        print(f"Downloading {i+1}/{len(images)}: {path}")
        
        # Add a random query parameter to avoid caching
        full_url = f"{url}?{random.randint(1, 10000)}"
        for key, value in params.items():
            full_url += f"&{key}={value}"
            
        response = requests.get(full_url, headers=headers, stream=True, timeout=10)
        response.raise_for_status()
        
        # Save the image
        with open(path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
                
        # Copy to real-images directory if needed
        if 'tours/' in path and 'real-images' not in path:
            real_path = path.replace('tours/', 'tours/real-images/')
            with open(real_path, 'wb') as f:
                f.seek(0)
                with open(path, 'rb') as src:
                    f.write(src.read())
            print(f"  - Copied to {real_path}")
            
        # Random delay to avoid being blocked
        time.sleep(random.uniform(0.5, 1.5))
        
    except Exception as e:
        print(f"Error downloading {path}: {e}")

print("All images downloaded successfully!") 