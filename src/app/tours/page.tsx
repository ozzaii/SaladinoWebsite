import React from 'react';
import { Metadata } from 'next';
import ToursClient from './ToursClient';

export const metadata: Metadata = {
  title: 'Premium Tour Packages | Saladino Travel',
  description: 'Explore our signature tours in Turkey and Dubai designed for Latin American travelers. Experience the perfect blend of luxury and authentic cultural immersion.',
};

export default function ToursPage() {
  return <ToursClient />;
} 