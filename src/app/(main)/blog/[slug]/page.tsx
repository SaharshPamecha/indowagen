import React from 'react';
import { blogPosts } from '@/data/blogs';
import BlogPostDetail from '@/components/Blog/BlogPostDetail';
import BlogRelatedPosts from '@/components/Blog/BlogRelatedPosts';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Indo Wagen',
      description: 'The blog post you are looking for could not be found.',
    };
  }
  
  return {
    title: `${post.title} | Indo Wagen Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Get related posts based on category or tags
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);
  
  return (
    <>
      <BlogPostDetail post={post} />
      <BlogRelatedPosts posts={relatedPosts} />
    </>
  );
}
