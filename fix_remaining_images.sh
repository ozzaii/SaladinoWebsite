#!/bin/bash

# Fix remaining small images with properly quoted URLs

# Cappadocia balloons
curl -o public/images/tours/cappadocia-balloons.jpg "https://cdn.pixabay.com/photo/2018/05/16/15/49/hot-air-balloon-3406652_1280.jpg"
curl -o public/images/tours/real-images/cappadocia-balloons.jpg "https://cdn.pixabay.com/photo/2018/05/16/15/49/hot-air-balloon-3406652_1280.jpg"

# Istanbul Hagia Sophia 
curl -o public/images/tours/istanbul-hagia-sophia.jpg "https://cdn.pixabay.com/photo/2019/09/21/13/32/hagia-sophia-4493731_1280.jpg"
curl -o public/images/tours/real-images/istanbul-hagia-sophia.jpg "https://cdn.pixabay.com/photo/2019/09/21/13/32/hagia-sophia-4493731_1280.jpg"

# Turkey-Dubai combined image
curl -o public/images/tours/turkey-dubai.jpg "https://cdn.pixabay.com/photo/2016/05/13/17/16/istanbul-1390503_1280.jpg"
curl -o public/images/tours/real-images/turkey-dubai.jpg "https://cdn.pixabay.com/photo/2016/05/13/17/16/istanbul-1390503_1280.jpg"

# Additional destination images
curl -o public/images/destinations/pamukkale-terraces.jpg "https://cdn.pixabay.com/photo/2018/11/16/23/07/pamukkale-3820285_1280.jpg"
curl -o public/images/destinations/istanbul-blue-mosque.jpg "https://cdn.pixabay.com/photo/2019/09/23/17/56/blue-mosque-4499528_1280.jpg"

# Also make sure logo is properly sized
curl -o public/images/saladino-travel-logo.png "https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2023924_640.png"

echo "All remaining images fixed!" 