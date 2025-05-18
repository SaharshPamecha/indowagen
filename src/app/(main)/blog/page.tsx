// pages/blog.tsx (Client Component Example)
'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import BlogHero from '@/components/Blog/BlogHero';
import BlogList from '@/components/Blog/BlogList';
import BlogCategories from '@/components/Blog/BlogCategories';
import BlogSubscribe from '@/components/Blog/BlogSubscribe';
import FeaturedPosts from '@/components/Blog/FeaturedPosts';
// import NewsList from '@/components/News/NewsList';
import NewsList from '@/components/News/NewsList';
export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const title = selectedCategory === 'All'
    ? 'Blog | Indo Wagen - Electric Mobility Insights'
    : `${selectedCategory} Articles | Indo Wagen - Electric Mobility Insights`;
  const description = selectedCategory === 'All'
    ? 'Explore articles, guides, and industry insights about electric rickshaws, sustainable mobility, and the future of transportation in India.'
    : `Discover ${selectedCategory.toLowerCase()} articles, guides, and insights about electric rickshaws and sustainable mobility in India.`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <BlogHero />
      <BlogCategories onCategoryChange={handleCategoryChange} />
      {/* <FeaturedPosts /> */}
      <BlogList selectedCategory={selectedCategory} />
      {/* <NewsList /> */}
      {/* <BlogSubscribe /> */}
    </>
  );
}