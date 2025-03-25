import React from 'react';
import NewsHero from '@/components/News/NewsHero';
import NewsList from '@/components/News/NewsList';
import FeaturedNews from '@/components/News/FeaturedNews';
import NewsSubscribe from '@/components/News/NewsSubscribe';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News | Indo Wagen - Latest Updates & Announcements',
  description: 'Stay informed about Indo Wagen\'s latest products, initiatives, industry updates, and events in the electric mobility sector.',
};

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <FeaturedNews />
      <NewsList />
      <NewsSubscribe />
    </>
  );
}
