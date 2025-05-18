'use client';

import React from 'react';
import Head from 'next/head';
import { useParams } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
} from '@mui/material';
import Link from 'next/link';
import BlogHero from '@/components/Blog/BlogHero';
import BlogList from '@/components/Blog/BlogList';
import BlogSubscribe from '@/components/Blog/BlogSubscribe';
import useSWR from 'swr';
import { fetchGraphPosts, PostEdge } from '@/app/libs/graphapi';

export default function CategoryPage() {
  const { slug } = useParams();
  
  // Format slug to match category name (e.g., 'electric-vehicles' -> 'Electric Vehicles')
  const selectedCategory = slug
    ? slug
        .toString()
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : 'All';

  // Fetch posts to extract categories
  const { data: postEdges = [] } = useSWR<PostEdge[]>('posts', fetchGraphPosts, {
    revalidateOnFocus: false,
    dedupingInterval: 60000,
  });

  // Extract unique categories from posts
  const categories = Array.from(
    new Set(
      postEdges
        .map((edge) => edge.node.categories.edges[0]?.node?.name)
        .filter(Boolean)
    )
  ).map((category) => ({
    name: category,
    slug: category.toLowerCase().replace(/\s+/g, '-'),
  }));

  // Fallback predefined categories if posts are unavailable
  const fallbackCategories = [
    { name: 'Electric Vehicles', slug: 'electric-vehicles' },
    { name: 'Sustainable Mobility', slug: 'sustainable-mobility' },
    { name: 'Industry Insights', slug: 'industry-insights' },
    { name: 'Practical Guides', slug: 'practical-guides' },
  ];

  // Use fetched categories if available, else fallback
  const allCategories = categories.length > 0 ? categories : fallbackCategories;

  // Dynamic title and description
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
      <Box sx={{ py: 4, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{ fontWeight: 600, mb: 2 }}
          >
            Explore Other Categories
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Chip
              label="All Articles"
              component={Link}
              href="/blog"
              clickable
              sx={{
                mb: 1,
                bgcolor: selectedCategory === 'All' ? 'primary.main' : 'grey.200',
                color: selectedCategory === 'All' ? 'white' : 'text.primary',
                '&:hover': {
                  bgcolor: selectedCategory === 'All' ? 'primary.dark' : 'grey.300',
                },
              }}
            />
            {allCategories.map((category) => (
              <Chip
                key={category.slug}
                label={category.name}
                component={Link}
                href={`/blog/category/${category.slug}`}
                clickable
                sx={{
                  mb: 1,
                  bgcolor:
                    selectedCategory === category.name ? 'primary.main' : 'grey.200',
                  color:
                    selectedCategory === category.name ? 'white' : 'text.primary',
                  '&:hover': {
                    bgcolor:
                      selectedCategory === category.name
                        ? 'primary.dark'
                        : 'grey.300',
                  },
                }}
              />
            ))}
          </Stack>
        </Container>
      </Box>
      <BlogList selectedCategory={selectedCategory} />
     
    </>
  );
}