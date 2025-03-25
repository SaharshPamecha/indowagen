import React from 'react';
import BlogHero from '@/components/Blog/BlogHero';
import BlogList from "@/components/Blog/BlogList";
import BlogCategories from "@/components/Blog/BlogCategories";
import BlogSubscribe from "@/components/Blog/BlogSubscribe";
import { Metadata } from "next";
import FeaturedPosts from "@/components/Blog/FeaturedPosts";

export const metadata: Metadata = {
  title: "Blog | Indo Wagen - Electric Mobility Insights",
  description:
    "Explore articles, guides, and industry insights about electric rickshaws, sustainable mobility, and the future of transportation in India.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <FeaturedPosts />
      <BlogCategories />
      <BlogList />
      <BlogSubscribe />
    </>
  );
}
