'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Link from 'next/link';
import useSWR from 'swr';
import { fetchGraphFeaturedPost, fetchGraphLatestPosts, FeaturedPostNode, PostNode } from '@/app/libs/graphapi';
import he from 'he';

// Define Post type (aligned with Graph API data)
export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: string;
  date: string;
  publishDate?: string;
};

// Utility function to strip HTML tags and decode HTML entities
const stripHtmlTags = (html: string): string => {
  return he.decode(
    html
      .replace(/<\/?[^>]+(>|$)/g, '')
      .replace(/\[…\]/g, '...')
      .replace(/\n/g, ' ')
      .trim()
  );
};

// Utility function to format date (e.g., "May 16, 2025")
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

// Fallback post data for when API fails
const fallbackFeaturedPost: Post = {
  id: 'fallback',
  slug: 'fallback-post',
  title: 'Welcome to Indo Wagen',
  excerpt: 'Discover the latest in electric mobility and sustainable transportation.',
  coverImage: '/default-image.jpg',
  category: 'Uncategorized',
  author: 'Indo Wagen Team',
  date: formatDate(new Date().toISOString()),
};

const BlogHero = () => {
  // Fetch featured post
  const { data: featuredPostRaw, error: featuredError, isLoading: isLoadingFeatured } = useSWR<FeaturedPostNode | null>(
    'featuredPost',
    fetchGraphFeaturedPost,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
      fallbackData: null,
    }
  );

  // Fetch latest 3 posts
  const { data: latestPostsRaw = [], error: latestError, isLoading: isLoadingLatest } = useSWR<PostNode[]>(
    'latestPosts',
    fetchGraphLatestPosts,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
      fallbackData: [],
    }
  );

  // Map featured post to Post type
  const featuredPost: Post = featuredPostRaw
    ? {
        id: featuredPostRaw.id,
        slug: featuredPostRaw.slug,
        title: stripHtmlTags(featuredPostRaw.title || 'Untitled'),
        excerpt: stripHtmlTags(featuredPostRaw.excerpt || 'No excerpt available'),
        coverImage: featuredPostRaw.featuredImage?.node?.sourceUrl || '/default-image.jpg',
        category: stripHtmlTags(featuredPostRaw.categories.edges[0]?.node?.name || 'Uncategorized'),
        author: stripHtmlTags(featuredPostRaw.author.node.name || 'Unknown Author'),
        date: formatDate(featuredPostRaw.date),
      }
    : fallbackFeaturedPost;

  // Map latest posts to Post type
  const latestPosts: Post[] = latestPostsRaw.length > 0
    ? latestPostsRaw.map((post) => ({
        id: post.id,
        slug: post.slug,
        title: stripHtmlTags(post.title || 'Untitled'),
        excerpt: stripHtmlTags(post.excerpt || 'No excerpt available'),
        coverImage: post.featuredImage?.node?.sourceUrl || '/default-image.jpg',
        category: stripHtmlTags(post.categories.edges[0]?.node?.name || 'Uncategorized'),
        author: stripHtmlTags(post.author.node.name || 'Unknown Author'),
        date: formatDate(post.date),
      }))
    : [];

  if (isLoadingFeatured || isLoadingLatest) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (featuredError || latestError) {
    console.error("Featured error:", featuredError);
    console.error("Latest posts error:", latestError);
    // Render with fallback data
  }

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: { xs: 6, md: 8 },
        pb: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {/* Featured Post (Left Side) */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    },
                    bgcolor: 'background.paper',
                  }}
                  elevation={1}
                >
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="350"
                        image={featuredPost.coverImage}
                        alt={featuredPost.title}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                        <Typography
                          variant="h5"
                          component="h2"
                          sx={{
                            fontWeight: 700,
                            fontSize: { xs: '1.25rem', md: '1.75rem' },
                            lineHeight: 1.3,
                            mb: 2,
                          }}
                        >
                          {featuredPost.title}
                        </Typography>
                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                          justifyContent="space-between"
                          sx={{ mb: 2 }}
                        >
                          <Stack direction="row" spacing={1} alignItems="center">
                            <CalendarTodayIcon
                              fontSize="small"
                              sx={{ color: 'text.disabled' }}
                            />
                            <Typography
                              variant="caption"
                              color="text.disabled"
                              sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                            >
                              {featuredPost.date}
                            </Typography>
                          </Stack>
                          <Typography
                            variant="body2"
                            color="primary.main"
                            sx={{
                              fontWeight: 600,
                              fontSize: { xs: '0.875rem', md: '1rem' },
                              display: 'inline-block',
                              '&:hover': {
                                textDecoration: 'underline',
                              },
                            }}
                          >
                            Read More
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </motion.div>
            </Grid>

            {/* Latest Posts (Right Side) */}
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                {latestPosts.length > 0 ? (
                  latestPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <Card
                        sx={{
                          borderRadius: 2,
                          overflow: 'hidden',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                          },
                          bgcolor: 'background.paper',
                        }}
                        elevation={1}
                      >
                        <Link
                          href={`/blog/${post.slug}`}
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          <CardActionArea>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <CardMedia
                                component="img"
                                image={post.coverImage}
                                alt={post.title}
                                sx={{
                                  width: { xs: 120, md: 150 },
                                  height: { xs: 80, md: 100 },
                                  objectFit: 'cover',
                                }}
                              />
                              <CardContent sx={{ flex: 1, p: { xs: 1.5, md: 2 } }}>
                                <Typography
                                  variant="h6"
                                  component="h3"
                                  sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '0.875rem', md: '1.125rem' },
                                    lineHeight: 1.3,
                                    mb: 1,
                                  }}
                                >
                                  {post.title}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  sx={{
                                    mb: 1,
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                                  }}
                                >
                                  {post.excerpt}
                                </Typography>
                                <Stack direction="row" spacing={1} alignItems="center">
                                  <CalendarTodayIcon
                                    fontSize="small"
                                    sx={{ color: 'text.disabled' }}
                                  />
                                  <Typography
                                    variant="caption"
                                    color="text.disabled"
                                    sx={{ fontSize: { xs: '0.75rem', md: '0.8125rem' } }}
                                  >
                                    {post.date}
                                  </Typography>
                                </Stack>
                              </CardContent>
                            </Box>
                          </CardActionArea>
                        </Link>
                      </Card>
                    </motion.div>
                  ))
                ) : (
                  <Typography variant="body1" color="text.secondary" textAlign="center">
                    No latest posts available.
                  </Typography>
                )}
              </Stack>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BlogHero;