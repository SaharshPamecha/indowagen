'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BlogHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: { xs: 6, md: 12 },
        pb: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                component="h1"
                variant="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                }}
              >
                Electric Mobility
                <Box
                  component="span"
                  sx={{
                    color: 'primary.main',
                    display: 'block',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: '100%',
                      height: 4,
                      bgcolor: 'primary.main',
                      opacity: 0.3,
                    },
                  }}
                >
                  Insights & Updates
                </Box>
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: '600px' }}
              >
                Explore our collection of articles, guides, and insights on electric mobility, sustainable transportation, and the future of movement in India. Stay informed about the latest industry trends, product innovations, and best practices.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '300px', md: '500px' },
                  width: '100%',
                }}
              >
                <Image
                  src="/images/blog/blog-hero.jpg"
                  alt="Electric Mobility Insights"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '16px' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogHero;
