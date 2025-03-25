'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
  useTheme,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  image: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: '#f8faff', py: 10, position: 'relative', overflow: 'hidden' }}>
      {/* Decorative elements */}
      <Box sx={{ 
        position: 'absolute', 
        top: '5%', 
        left: '5%', 
        width: 200, 
        height: 200, 
        borderRadius: '50%', 
        background: `linear-gradient(135deg, ${theme.palette.primary.main}22 0%, ${theme.palette.primary.main}00 70%)`,
        zIndex: 0 
      }} />
      <Box sx={{ 
        position: 'absolute', 
        bottom: '10%', 
        right: '10%', 
        width: 300, 
        height: 300, 
        borderRadius: '50%', 
        background: `linear-gradient(135deg, ${theme.palette.secondary.main}11 0%, ${theme.palette.secondary.main}00 70%)`,
        zIndex: 0 
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h4" 
              fontWeight={700} 
              gutterBottom
              sx={{
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: '2px'
                }
              }}
            >
              What Our Dealers Say
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', mt: 3 }}>
              Hear from our successful partners who have grown their businesses with Indowagen
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.1)'
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '5px',
                        background: theme.palette.primary.main
                      }
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        fontSize: 50,
                        color: 'primary.main',
                        opacity: 0.2,
                        mb: 2
                      }}
                    />
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        fontStyle: 'italic',
                        fontWeight: 400,
                        lineHeight: 1.7,
                        mb: 3,
                        flexGrow: 1
                      }}
                    >
                      "{testimonial.quote}"
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                      <Avatar
                        src={testimonial.image}
                        alt={testimonial.author}
                        sx={{ width: 56, height: 56, mr: 2, border: `2px solid ${theme.palette.primary.main}` }}
                      />
                      <Box>
                        <Typography variant="h6" fontWeight={600} sx={{ fontSize: '1rem' }}>
                          {testimonial.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.position}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              href="/contact?dealer=apply"
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1,
                fontWeight: 600
              }}
            >
              Become a Dealer
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
