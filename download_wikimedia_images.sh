#!/bin/bash

# Using Wikimedia Commons images which allows direct downloads

# Cappadocia balloons
echo "Downloading Cappadocia balloons..."
curl -L -o public/images/tours/cappadocia-balloons.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Cappadocia_Balloon_Trip.jpg/1280px-Cappadocia_Balloon_Trip.jpg"
cp public/images/tours/cappadocia-balloons.jpg public/images/tours/real-images/cappadocia-balloons.jpg

# Istanbul Hagia Sophia
echo "Downloading Hagia Sophia..."
curl -L -o public/images/tours/istanbul-hagia-sophia.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/1280px-Hagia_Sophia_Mars_2013.jpg"
cp public/images/tours/istanbul-hagia-sophia.jpg public/images/tours/real-images/istanbul-hagia-sophia.jpg

# Turkey-Dubai combined image (Dubai skyline)
echo "Downloading Turkey-Dubai image..."
curl -L -o public/images/tours/turkey-dubai.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1280px-Dubai_Marina_Skyline.jpg"
cp public/images/tours/turkey-dubai.jpg public/images/tours/real-images/turkey-dubai.jpg

# Pamukkale terraces
echo "Downloading Pamukkale terraces..."
curl -L -o public/images/destinations/pamukkale-terraces.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Pamukkale_30.jpg/1280px-Pamukkale_30.jpg"

# Istanbul Blue Mosque
echo "Downloading Blue Mosque..."
curl -L -o public/images/destinations/istanbul-blue-mosque.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Blue_Mosque_Istanbul_Turkey_retouched.jpg/1280px-Blue_Mosque_Istanbul_Turkey_retouched.jpg"

# Also get some more images for the other destination files that might be small
echo "Downloading additional destination images..."

# Paris
curl -L -o public/images/destinations/paris.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"

# Rome
curl -L -o public/images/destinations/rome.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Colosseum_in_Rome-April_2007-1-_copie_2B.jpg/1280px-Colosseum_in_Rome-April_2007-1-_copie_2B.jpg" 

# Tokyo
curl -L -o public/images/destinations/tokyo.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/1280px-Skyscrapers_of_Shinjuku_2009_January.jpg"

# New York
curl -L -o public/images/destinations/new-york.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/1280px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg"

# Bali
curl -L -o public/images/destinations/bali.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Pura_Ulun_Danu_Bratan_Bali.jpg/1280px-Pura_Ulun_Danu_Bratan_Bali.jpg"

echo "All images downloaded successfully from Wikimedia Commons!" 