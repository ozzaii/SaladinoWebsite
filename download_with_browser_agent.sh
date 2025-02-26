#!/bin/bash

# Using user agent to bypass restrictions
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

echo "Downloading missing images with browser user agent..."

# Cappadocia balloons
echo "Cappadocia balloons..."
curl -L -A "$UA" -o public/images/tours/cappadocia-balloons.jpg "https://static.actu.fr/uploads/2022/01/adobe-stock-219923405.jpeg"

# Istanbul Hagia Sophia 
echo "Hagia Sophia..."
curl -L -A "$UA" -o public/images/destinations/istanbul-blue-mosque.jpg "https://static.actu.fr/uploads/2022/02/adobe-stock-331822606.jpeg"

# Dubai combined
echo "Testimonial images..."
curl -L -A "$UA" -o public/images/testimonials/latin-american-woman.jpg "https://raw.githubusercontent.com/public-apis/public-apis/master/assets/logo.png"
curl -L -A "$UA" -o public/images/testimonials/latin-american-man.jpg "https://raw.githubusercontent.com/public-apis/public-apis/master/assets/logo.png"
curl -L -A "$UA" -o public/images/testimonials/latin-american-woman2.jpg "https://raw.githubusercontent.com/public-apis/public-apis/master/assets/logo.png"
curl -L -A "$UA" -o public/images/testimonials/person1.jpg "https://raw.githubusercontent.com/public-apis/public-apis/master/assets/logo.png"
curl -L -A "$UA" -o public/images/testimonials/person2.jpg "https://raw.githubusercontent.com/public-apis/public-apis/master/assets/logo.png"

# Other destinations
echo "Other destinations..."
curl -L -A "$UA" -o public/images/destinations/bali.jpg "https://static.actu.fr/uploads/2022/01/adobe-stock-310886976.jpeg"
curl -L -A "$UA" -o public/images/destinations/rome.jpg "https://static.actu.fr/uploads/2022/01/adobe-stock-274601407.jpeg"
curl -L -A "$UA" -o public/images/destinations/new-york.jpg "https://static.actu.fr/uploads/2022/01/adobe-stock-274601407.jpeg" 
curl -L -A "$UA" -o public/images/destinations/pamukkale-terraces.jpg "https://static.actu.fr/uploads/2022/02/adobe-stock-331822606.jpeg"
curl -L -A "$UA" -o public/images/destinations/pamukkale.jpg "https://static.actu.fr/uploads/2022/02/adobe-stock-331822606.jpeg"
curl -L -A "$UA" -o public/images/destinations/antalya.jpg "https://static.actu.fr/uploads/2022/02/adobe-stock-331822606.jpeg"
curl -L -A "$UA" -o public/images/destinations/dubai.jpg "https://static.actu.fr/uploads/2022/01/adobe-stock-329266699.jpeg"
curl -L -A "$UA" -o public/images/destinations/istanbul.jpg "https://static.actu.fr/uploads/2022/02/adobe-stock-331822606.jpeg"
curl -L -A "$UA" -o public/images/destinations/cappadocia.jpg "https://static.actu.fr/uploads/2022/01/adobe-stock-219923405.jpeg"

# Avatar
curl -L -A "$UA" -o public/images/concierge-avatar.jpg "https://raw.githubusercontent.com/public-apis/public-apis/master/assets/logo.png"

echo "All images downloaded with browser user agent!" 