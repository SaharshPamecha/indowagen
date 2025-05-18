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
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Post } from '@/types/post';
import Link from 'next/link';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

interface BlogRelatedPostsProps {
  posts: Post[];
}

const BlogRelatedPosts: React.FC<BlogRelatedPostsProps> = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
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
            sx={{ mb: 4, fontWeight: 600 }}
          >
            Related Articles
          </Typography>

          <Grid container spacing={4}>
            {posts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
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
                            <Typography variant="caption" fontWeight={500}>
                              {post.author}
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <CalendarTodayIcon
                              fontSize="small"
                              sx={{ color: 'text.disabled' }}
                            />
                            <Typography variant="caption" color="text.disabled">
                              {post.publishDate || post.date}
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
        </motion.div>
      </Container>
    </Box>
  );
};

export default BlogRelatedPosts;