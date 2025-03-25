'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Divider,
  Button,
  Avatar,
  Pagination,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import { blogPosts } from '@/data/blogs';
import Link from 'next/link';

const BlogList = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  // Exclude featured posts from the regular list
  const regularPosts = blogPosts.filter(post => !post.featured);
  
  // Calculate pagination
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const currentPosts = regularPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    // Scroll to top of the list when changing pages
    window.scrollTo({
      top: document.getElementById('blog-list')?.offsetTop || 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }} id="blog-list">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ mb: 1, fontWeight: 600 }}
          >
            Latest Articles
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ mb: 5, maxWidth: 700 }}
          >
            Browse our collection of articles on electric mobility, industry insights, and practical guides
          </Typography>

          <Grid container spacing={4}>
            {currentPosts.map((post) => (
              <Grid item xs={12} md={6} lg={4} key={post.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * parseInt(post.id) % 3 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                      borderRadius: 2,
                      overflow: 'hidden',
                    }}
                    elevation={1}
                  >
                    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '100%' }}>
                        <Box sx={{ position: 'relative', height: 200, width: '100%' }}>
                          <CardMedia
                            component="img"
                            height="200"
                            image={post.coverImage}
                            alt={post.title}
                            sx={{ objectFit: 'cover' }}
                          />
                          <Chip 
                            label={post.category} 
                            size="small" 
                            sx={{ 
                              position: 'absolute', 
                              top: 16, 
                              left: 16,
                              bgcolor: 'primary.main',
                              color: 'white',
                              fontWeight: 500,
                            }} 
                          />
                        </Box>
                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                          <Typography 
                            gutterBottom 
                            variant="h6" 
                            component="h3"
                            sx={{ fontWeight: 600, mb: 1 }}
                          >
                            {post.title}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ 
                              mb: 2,
                              display: '-webkit-box',
                              overflow: 'hidden',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 3,
                            }}
                          >
                            {post.excerpt}
                          </Typography>
                          
                          <Divider sx={{ my: 2 }} />
                          
                          <Stack 
                            direction="row" 
                            spacing={1} 
                            alignItems="center"
                            sx={{ mt: 'auto' }}
                          >
                            <Avatar
                              src={post.authorAvatar}
                              alt={post.author}
                              sx={{ width: 24, height: 24 }}
                            >
                              <PersonIcon fontSize="small" />
                            </Avatar>
                            <Typography variant="caption" fontWeight={500}>
                              {post.author}
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <AccessTimeIcon fontSize="small" sx={{ color: 'text.disabled' }} />
                            <Typography variant="caption" color="text.disabled">
                              {post.readTime} min
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
                size="large"
                sx={{
                  '& .MuiPaginationItem-root': {
                    fontWeight: 500,
                  }
                }}
              />
            </Box>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default BlogList;
