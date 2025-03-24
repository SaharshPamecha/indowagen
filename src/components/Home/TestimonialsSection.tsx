'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  Rating,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Fleet Owner',
    avatar: '/images/testimonials/avatar1.jpg',
    content:
      'The electric rickshaw from Indo Wagen has been a game-changer for my business. Low maintenance costs and reliable performance have significantly improved my earnings.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Transport Operator',
    avatar: '/images/testimonials/avatar2.jpg',
    content:
      'Excellent build quality and after-sales service. The vehicle has been running smoothly for over a year now, and the battery performance is still great.',
    rating: 5,
  },
  {
    name: 'Priya Singh',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar3.jpg',
    content:
      'The cargo variant has been perfect for my delivery business. The spacious storage and long battery life help me complete all deliveries efficiently.',
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              What Our Customers Say
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                mb: 4,
              }}
            >
              Hear from our satisfied customers about their experience with Indo Wagen
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        color: 'primary.main',
                        opacity: 0.2,
                      }}
                    >
                      <FormatQuoteIcon sx={{ fontSize: 40 }} />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Rating value={testimonial.rating} readOnly />
                    </Box>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 3,
                        fontStyle: 'italic',
                        minHeight: 100,
                      }}
                    >
                      "{testimonial.content}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        src={testimonial.avatar}
                        sx={{ width: 48, height: 48, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
