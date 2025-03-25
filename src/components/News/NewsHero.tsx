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

const NewsHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: { xs: 6, md: 12 },
        pb: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
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
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.2,
                }}
              >
                Latest News &
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                    display: "block",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      width: "100%",
                      height: 4,
                      bgcolor: "primary.main",
                      opacity: 0.3,
                    },
                  }}
                >
                  Announcements
                </Box>
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: "600px" }}
              >
                Stay updated with the latest news from Indo Wagen, including
                product launches, corporate announcements, and industry updates.
                Follow our journey as we transform electric mobility in India.
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
                  position: "relative",
                  height: { xs: "300px", md: "500px" },
                  width: "100%",
                }}
              >
                <Image
                  src="/images/news3.jpg"
                  alt="Indo Wagen News and Announcements"
                  fill
                  style={{ objectFit: "cover", borderRadius: "16px" }}
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

export default NewsHero;
