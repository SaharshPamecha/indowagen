'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Avatar,
  Divider,
  Stack,
  IconButton,
  useTheme,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  CircularProgress,
  Modal,
  Fade,
  Backdrop,
} from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import { Post } from '@/types/post';
import Link from 'next/link';
import useSWR from 'swr';
import { fetchGraphCategories, fetchGraphRecentPosts, CategoryEdge, RecentPostNode } from '@/app/libs/graphapi';
import he from 'he';

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

interface BlogPostDetailProps {
  post: Post;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post }) => {
  const theme = useTheme();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Handle modal open/close
  const handleOpenImageModal = () => setIsImageModalOpen(true);
  const handleCloseImageModal = () => setIsImageModalOpen(false);

  // Fetch categories using SWR
  const { data: categoryEdges = [], error: categoryError, isLoading: isLoadingCategories } = useSWR<CategoryEdge[]>(
    'categories',
    fetchGraphCategories,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  );

  // Fetch recent posts using SWR
  const { data: recentPosts = [], error: recentPostsError, isLoading: isLoadingRecentPosts } = useSWR<RecentPostNode[]>(
    'recentPosts',
    fetchGraphRecentPosts,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  );

  // Process categories
  const categories = categoryEdges.length
    ? Array.from(
        new Set(
          categoryEdges.map((edge) =>
            stripHtmlTags(edge.node.name || 'Uncategorized').trim().toLowerCase()
          )
        )
      )
        .sort()
        .map((category) => category.charAt(0).toUpperCase() + category.slice(1))
    : [];

  // Process latest posts
  const latestPosts = recentPosts.map((post) => ({
    title: stripHtmlTags(post.title),
    date: formatDate(post.date),
    slug: post.slug,
  }));

  if (isLoadingCategories || isLoadingRecentPosts) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (categoryError || recentPostsError) {
    return (
      <Box sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant='body1' color='error'>
          Failed to load sidebar data. Please try again later.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Breadcrumb and category */}
              <Box sx={{ mb: 4 }}>
                <Link href="/blog" style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      mb: 2,
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    ← Back to all articles
                  </Typography>
                </Link>
                <Chip
                  label={post.category}
                  size="small"
                  sx={{
                    ml: 2,
                    bgcolor: 'primary.main',
                    color: 'white',
                    fontWeight: 500,
                  }}
                />
              </Box>

              {/* Title */}
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  mb: 3,
                }}
              >
                {post.title}
              </Typography>

              {/* Author info and metadata */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                alignItems={{ xs: 'flex-start', sm: 'center' }}
                sx={{ mb: 5 }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    src={post.authorAvatar}
                    alt={post.author}
                    sx={{ width: 50, height: 50 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {post.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.authorTitle || 'Contributor'}
                    </Typography>
                  </Box>
                </Stack>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ display: { xs: 'none', sm: 'block' } }}
                />
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 3 }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <CalendarTodayIcon
                      fontSize="small"
                      sx={{ mr: 1, fontSize: '1rem' }}
                    />
                    {post.publishDate || post.date}
                  </Typography>
                  {post.readTime && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <AccessTimeIcon
                        fontSize="small"
                        sx={{ mr: 1, fontSize: '1rem' }}
                      />
                      {post.readTime} min read
                    </Typography>
                  )}
                </Stack>
              </Stack>

              {/* Featured image */}
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '250px', md: '450px' },
                  width: '100%',
                  mb: 5,
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 3,
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
                onClick={handleOpenImageModal}
                role="button"
                tabIndex={0}
                aria-label="View larger image"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOpenImageModal();
                  }
                }}
              >
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>

              {/* Image View Modal */}
              <Modal
                open={isImageModalOpen}
                onClose={handleCloseImageModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
                aria-labelledby="image-modal-title"
                aria-describedby="image-modal-description"
              >
                <Fade in={isImageModalOpen}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '85vw',
                      height: '85vh',
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                      boxShadow: 24,
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      outline: 'none',
                      overflow: 'hidden',
                    }}
                  >
                    <IconButton
                      aria-label="Close image modal"
                      onClick={handleCloseImageModal}
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 1000,
                        color: 'white',
                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                        '&:hover': {
                          bgcolor: 'rgba(0, 0, 0, 0.8)',
                        },
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                        padding: 1,
                      }}
                    >
                      <CloseIcon fontSize="medium" />
                    </IconButton>
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                      }}
                    >
                      <Image
                        src={post.coverImage || '/default-image.jpg'}
                        alt={post.title}
                        fill
                        style={{
                          objectFit: 'contain',
                          borderRadius: 2,
                        }}
                        priority
                      />
                    </Box>
                  </Box>
                </Fade>
              </Modal>

              {/* Content */}
              <Container maxWidth="md">
                <Box
                  sx={{
                    '& p': {
                      mb: 3,
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                    },
                    '& h2': {
                      mt: 5,
                      mb: 3,
                      fontWeight: 700,
                      fontSize: '1.8rem',
                    },
                    '& h3': {
                      mt: 4,
                      mb: 2,
                      fontWeight: 600,
                      fontSize: '1.5rem',
                    },
                    '& ul, & ol': {
                      mb: 3,
                      pl: 4,
                    },
                    '& li': {
                      mb: 1,
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: post.content || '' }}
                />

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <Box sx={{ mt: 6, mb: 4 }}>
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                      Tags:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {post.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="medium"
                          sx={{
                            bgcolor: 'action.hover',
                            '&:hover': { bgcolor: 'action.selected' },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}

                {/* Share */}
                <Divider sx={{ my: 4 }} />
                <Box sx={{ mb: 6 }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Share this article:
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      aria-label="share on facebook"
                      sx={{
                        color: '#1877F2',
                        bgcolor: 'rgba(24, 119, 242, 0.1)',
                        '&:hover': { bgcolor: 'rgba(24, 119, 242, 0.2)' },
                      }}
                    >
                      <FacebookIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share on twitter"
                      sx={{
                        color: '#1DA1F2',
                        bgcolor: 'rgba(29, 161, 242, 0.1)',
                        '&:hover': { bgcolor: 'rgba(29, 161, 242, 0.2)' },
                      }}
                    >
                      <TwitterIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share on linkedin"
                      sx={{
                        color: '#0A66C2',
                        bgcolor: 'rgba(10, 102, 194, 0.1)',
                        '&:hover': { bgcolor: 'rgba(10, 102, 194, 0.2)' },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share on whatsapp"
                      sx={{
                        color: '#25D366',
                        bgcolor: 'rgba(37, 211, 102, 0.1)',
                        '&:hover': { bgcolor: 'rgba(37, 211, 102, 0.2)' },
                      }}
                    >
                      <WhatsAppIcon />
                    </IconButton>
                  </Stack>
                </Box>

                {/* Author bio */}
                <Paper
                  elevation={1}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    bgcolor: theme.palette.grey[50],
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 3,
                    alignItems: { xs: 'center', sm: 'flex-start' },
                  }}
                >
                  <Avatar
                    src={post.authorAvatar}
                    alt={post.author}
                    sx={{ width: 80, height: 80 }}
                  />
                  <Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      About {post.author}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {post.authorTitle || 'Contributor'} at Indo Wagen. Passionate about electric mobility and sustainable transportation solutions for India's evolving urban landscape.
                    </Typography>
                  </Box>
                </Paper>
              </Container>
            </motion.div>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: '100px' }}>
              {/* Categories */}
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  mb: 4,
                  borderRadius: 2,
                  bgcolor: theme.palette.grey[50],
                }}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Categories
                </Typography>
                <List dense>
                  {categories.map((category, index) => (
                    <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                      <MuiLink
                        href={`/blog/category/${category.toLowerCase()}`}
                        underline="hover"
                        sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}
                      >
                        {category}
                      </MuiLink>
                    </ListItem>
                  ))}
                </List>
              </Paper>

              {/* Latest Posts */}
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  bgcolor: theme.palette.grey[50],
                }}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Latest Posts
                </Typography>
                <List dense>
                  {latestPosts.map((latestPost, index) => (
                    <ListItem key={index} sx={{ py: 1, px: 0 }}>
                      <ListItemText
                        primary={
                          <MuiLink
                            href={`/blog/${latestPost.slug}`}
                            underline="hover"
                            sx={{ color: 'text.primary', fontWeight: 500, '&:hover': { color: 'primary.main' } }}
                          >
                            {latestPost.title}
                          </MuiLink>
                        }
                        secondary={
                          <Typography variant="body2" color="text.secondary">
                            {latestPost.date}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPostDetail;