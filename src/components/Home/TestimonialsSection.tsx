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
    name: "Sourav Das",
    role: "",
    avatar: "/images/testimonials/avatar1.jpg",
    content:
      "I am a very happy customer of Indowagen brand battery-operated E-Rickshaw for the past 5 years. Customer support and after-sales service is a delightful experience.",
    rating: 5,
  },
  {
    name: "Rahul Banerjee",
    role: "",
    avatar: "/images/testimonials/avatar2.jpg",
    content:
      "I am a very happy user of Indowagen brand products, including E-Rickshaw and battery-operated Cargo Rickshaw. Whenever I need any spare parts and accessories, they are easily available from them.",
    rating: 5,
  },
  {
    name: "Rajat Mukherjee",
    role: "",
    avatar: "/images/testimonials/avatar3.jpg",
    content:
      "I frequently travel all districts of west Bengal. I have seen their presence almost everywhere. I have noticed many E-Rickshows of this brand are on the road for long tenure. While asked to the drivers they told that this brand is preferred generally for longevity and hard body.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
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
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              What Our Customers Say
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                mb: 4,
              }}
            >
              Hear from our satisfied customers about their experience with Indo
              Wagen
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          <Grid
            container
            spacing={4}
            sx={{ display: "flex", alignItems: "stretch" }}
          >
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index} sx={{ display: "flex" }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ flex: 1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        transition: "transform 0.3s ease-in-out",
                      },
                      minHeight: 300, // Set a consistent minimum height
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          color: "primary.main",
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
                          fontStyle: "italic",
                          minHeight: 100,
                        }}
                      >
                        "{testimonial.content}"
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          src={testimonial.avatar}
                          sx={{ width: 48, height: 48, mr: 2 }}
                        />
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 600 }}
                          >
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
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
