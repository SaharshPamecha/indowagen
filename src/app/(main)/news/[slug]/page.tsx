import React from 'react';
import { newsItems } from '@/data/news';
import NewsArticleDetail from '@/components/News/NewsArticleDetail';
import NewsRelatedArticles from '@/components/News/NewsRelatedArticles';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface NewsArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const article = newsItems.find((item) => item.slug === params.slug);
  
  if (!article) {
    return {
      title: 'News Article Not Found | Indo Wagen',
      description: 'The news article you are looking for could not be found.',
    };
  }
  
  return {
    title: `${article.title} | Indo Wagen News`,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = newsItems.find((item) => item.slug === params.slug);
  
  if (!article) {
    notFound();
  }
  
  // Get related articles based on tags
  const relatedArticles = newsItems
    .filter((item) => {
      if (item.id === article.id) return false;
      // Check if there are any matching tags
      return item.tags.some(tag => article.tags.includes(tag));
    })
    .slice(0, 3);
  
  return (
    <>
      <NewsArticleDetail article={article} />
      <NewsRelatedArticles articles={relatedArticles} />
    </>
  );
}
