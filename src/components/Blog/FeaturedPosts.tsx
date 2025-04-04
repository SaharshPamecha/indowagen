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
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { blogPosts } from '@/data/blogs';
import Link from 'next/link';

const FeaturedPosts = () => {
  const theme = useTheme();
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}>
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
            ET news article
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 5, maxWidth: 700 }}
          >
            Discover our most popular articles and stay updated with the latest
            insights in electric mobility
          </Typography>

          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <Grid item xs={12} md={4} key={post.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * parseInt(post.id) }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 8,
                      },
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                    elevation={2}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <CardActionArea
                        sx={{
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "stretch",
                          height: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            height: 240,
                            width: "100%",
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="240"
                            image={post.coverImage}
                            alt={post.title}
                            sx={{ objectFit: "cover" }}
                          />
                          <Chip
                            label={post.category}
                            size="small"
                            sx={{
                              position: "absolute",
                              top: 16,
                              left: 16,
                              bgcolor: "primary.main",
                              color: "white",
                              fontWeight: 500,
                            }}
                          />
                        </Box>
                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h3"
                            sx={{ fontWeight: 600, mb: 1 }}
                          >
                            {post.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 2 }}
                          >
                            {post.excerpt}
                          </Typography>
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            sx={{ mt: "auto" }}
                          >
                            <AccessTimeIcon
                              fontSize="small"
                              sx={{ color: "text.disabled" }}
                            />
                            <Typography variant="caption" color="text.disabled">
                              {post.readTime} min read
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <Typography variant="caption" color="text.disabled">
                              {post.publishDate}
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

export default FeaturedPosts;
