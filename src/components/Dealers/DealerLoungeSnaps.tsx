'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

// Define interfaces for the data structure
interface Image {
  src: string;
  alt: string;
}

interface GallerySection {
  id: string;
  title: string;
  images: Image[];
}

const DealerLoungeSnaps: React.FC = () => {
  const theme = useTheme();

  // Data for the photo gallery sections based on folder names
  const gallerySections = [
    {
      id: 'dealerss-meet',
      title: 'Dealerss Meet',
      images: [
        { src: '/dealer-lounge-snaps/Dealerss-Meet/Dealerss-1.webp', alt: 'Dealerss Meet Snap 1' },
        { src: '/dealer-lounge-snaps/Dealerss-Meet/Dealerss-2.webp', alt: 'Dealerss Meet Snap 2' },
        { src: '/dealer-lounge-snaps/Dealerss-Meet/Dealerss-3.webp', alt: 'Dealerss Meet Snap 3' },
        { src: '/dealer-lounge-snaps/Dealerss-Meet/Dealerss-4.webp', alt: 'Dealerss Meet Snap 4' },
       
      ],
    },
    {
      id: 'dubai-trip',
      title: 'Dubai Trip',
      images: [
        { src: '/dealer-lounge-snaps/Dubai-Trip/Dubai-1.webp', alt: 'Dubai Trip Snap 1' },
        { src: '/dealer-lounge-snaps/Dubai-Trip/Dubai-2.webp', alt: 'Dubai Trip Snap 2' },
        { src: '/dealer-lounge-snaps/Dubai-Trip/Dubai-3.webp', alt: 'Dubai Trip Snap 3' },
       
      ],
    },
    {
      id: 'happy-customers',
      title: 'Happy Customers',
      images: [
        { src: '/dealer-lounge-snaps/Happy-customers/Happy-1.webp', alt: 'Happy Customers Snap 1' },
        { src: '/dealer-lounge-snaps/Happy-customers/Happy-2.webp', alt: 'Happy Customers Snap 2' },
        { src: '/dealer-lounge-snaps/Happy-customers/Happy-3.webp', alt: 'Happy Customers Snap 3' },
       
      ],
    },
    {
      id: 'indowagen-exclusive-store',
      title: 'Indowagen Exclusive Store',
      images: [
        { src: '/dealer-lounge-snaps/Indowagen-Exclusive-Store/Indowagen-1.webp', alt: 'Indowagen Exclusive Store Snap 1' },
        { src: '/dealer-lounge-snaps/Indowagen-Exclusive-Store/Indowagen-2.webp', alt: 'Indowagen Exclusive Store Snap 2' },
        { src: '/dealer-lounge-snaps/Indowagen-Exclusive-Store/Indowagen-3.webp', alt: 'Indowagen Exclusive Store Snap 3' },
        { src: '/dealer-lounge-snaps/Indowagen-Exclusive-Store/Indowagen-4.webp', alt: 'Indowagen Exclusive Store Snap 4' },
        { src: '/dealer-lounge-snaps/Indowagen-Exclusive-Store/Indowagen-5.webp', alt: 'Indowagen Exclusive Store Snap 5' },
      ],
    },
    {
      id: 'milaap',
      title: 'Milaap',
      images: [
        { src: '/dealer-lounge-snaps/Milaap/Milaap-1.webp', alt: 'Milaap Snap 1' },
        { src: '/dealer-lounge-snaps/Milaap/Milaap-2.webp', alt: 'Milaap Snap 2' },
        { src: '/dealer-lounge-snaps/Milaap/Milaap-3.webp', alt: 'Milaap Snap 3' },
        { src: '/dealer-lounge-snaps/Milaap/Milaap-4.webp', alt: 'Milaap Snap 4' },
        { src: '/dealer-lounge-snaps/Milaap/Milaap-5.webp', alt: 'Milaap Snap 5' },
        { src: '/dealer-lounge-snaps/Milaap/Milaap-6.webp', alt: 'Milaap Snap 6' },
        { src: '/dealer-lounge-snaps/Milaap/Milaap-7.webp', alt: 'Milaap Snap 7' },
        { src: '/dealer-lounge-snaps/Milaap/Milaap-8.webp', alt: 'Milaap Snap 8' },
        { src: '/dealer-lounge-snaps/Milaap/Milaap-9.webp', alt: 'Milaap Snap 9' },
        { src: '/dealer-lounge-snaps/Milaap/Milaap-10.webp', alt: 'Milaap Snap 10' },
        { src: '/dealer-lounge-snaps/Milaap/Milaap-11.webp', alt: 'Milaap Snap 11' },
      ],
    },
    {
      id: 'phuket-trip',
      title: 'Phuket Trip',
      images: [
        { src: '/dealer-lounge-snaps/Phuket-Trip/Phuket-1.webp', alt: 'Phuket Trip Snap 1' },
        { src: '/dealer-lounge-snaps/Phuket-Trip/Phuket-2.webp', alt: 'Phuket Trip Snap 2' },
        
      ],
    },
    {
      id: 'scratch-win',
      title: 'Scratch Win',
      images: [
        { src: '/dealer-lounge-snaps/Scratch-Win/Scratch-1.webp', alt: 'Scratch Win Snap 1' },
        { src: '/dealer-lounge-snaps/Scratch-Win/Scratch-2.webp', alt: 'Scratch Win Snap 2' },
        { src: '/dealer-lounge-snaps/Scratch-Win/Scratch-3.webp', alt: 'Scratch Win Snap 3' },
        { src: '/dealer-lounge-snaps/Scratch-Win/Scratch-4.webp', alt: 'Scratch Win Snap 4' },
        { src: '/dealer-lounge-snaps/Scratch-Win/Scratch-5.webp', alt: 'Scratch Win Snap 5' },
        { src: '/dealer-lounge-snaps/Scratch-Win/Scratch-6.webp', alt: 'Scratch Win Snap 6' },
        { src: '/dealer-lounge-snaps/Scratch-Win/Scratch-7.webp', alt: 'Scratch Win Snap 7' },
        { src: '/dealer-lounge-snaps/Scratch-Win/Scratch-8.webp', alt: 'Scratch Win Snap 8' },
        { src: '/dealer-lounge-snaps/Scratch-Win/Scratch-9.webp', alt: 'Scratch Win Snap 9' },
        { src: '/dealer-lounge-snaps/Scratch-Win/Scratch-10.webp', alt: 'Scratch Win Snap 10' },
        { src: '/dealer-lounge-snaps/Scratch-Win/Scratch-11.webp', alt: 'Scratch Win Snap 11' },
      ],
    },
    {
      id: 'store-opening',
      title: 'Store Opening',
      images: [
        { src: '/dealer-lounge-snaps/Store-opening/Store-1.webp', alt: 'Store Opening Snap 1' },
        { src: '/dealer-lounge-snaps/Store-opening/Store-2.webp', alt: 'Store Opening Snap 2' },
        { src: '/dealer-lounge-snaps/Store-opening/Store-3.webp', alt: 'Store Opening Snap 3' },
      ]
    },
    {
      id: 'warehouse',
      title: 'Warehouse',
      images: [
        { src: '/dealer-lounge-snaps/Warehouse/Warehouse-1.webp', alt: 'Warehouse Snap 1' },
        { src: '/dealer-lounge-snaps/Warehouse/Warehouse-2.webp', alt: 'Warehouse Snap 2' },
        { src: '/dealer-lounge-snaps/Warehouse/Warehouse-3.webp', alt: 'Warehouse Snap 3' },
        { src: '/dealer-lounge-snaps/Warehouse/Warehouse-4.webp', alt: 'Warehouse Snap 4' },
       
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Dealer Lounge Snaps
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '800px', mx: 'auto' }}
            >
              Capturing moments of dealer interactions, trips, and store activities
            </Typography>
          </Box>
        </motion.div>

        {/* Gallery Sections */}
        {gallerySections.map((section) => (
          <Box key={section.id} sx={{ mb: 8 }}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 'bold', mb: 4 }}
                >
                  {section.title}
                </Typography>
              </motion.div>

              <Grid container spacing={3}>
                {section.images.map((image, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <motion.div variants={itemVariants}>
                      <Card
                        sx={{
                          borderRadius: 2,
                          overflow: 'hidden',
                          boxShadow: theme.shadows[3],
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                          height: '100%', // Ensure Card takes full height of parent
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={image.src}
                          alt={image.alt}
                          sx={{
                            height: '100%', // Set height to 100% to fill Card
                            width: '100%', // Ensure width adjusts with height
                            objectFit: 'cover', // Maintain aspect ratio
                          }}
                        />
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default DealerLoungeSnaps;