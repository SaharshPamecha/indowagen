import React from 'react';
import AccessoriesPage from '@/components/Accessories/AccessoriesPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessories | Indo Wagen - Electric Vehicle Accessories',
  description: 'Browse our high-quality accessories for your electric vehicle. Enhance performance, comfort, and functionality with genuine Indo Wagen accessories.',
};

export default function Accessories() {
  return <AccessoriesPage />;
}
