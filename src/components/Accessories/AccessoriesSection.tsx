'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';

const accessories = [
  {
    id: 1,
    name: 'Lithium-ion Battery Pack',
    description: 'High-performance battery pack with extended life and quick charging capability.',
    image: '/images/accessories/battery-pack.jpg',
    price: '₹45,000',
  },
  {
    id: 2,
    name: 'Digital Display Unit',
    description: 'Advanced digital display with speed, battery, and performance metrics.',
    image: '/images/accessories/display-unit.jpg',
    price: '₹12,000',
  },
  {
    id: 3,
    name: 'Fast Charger',
    description: 'Rapid charging solution for quick turnaround times.',
    image: '/images/accessories/fast-charger.jpg',
    price: '₹8,500',
  },
  {
    id: 4,
    name: 'LED Light Kit',
    description: 'Energy-efficient LED lighting system for enhanced visibility.',
    image: '/images/accessories/led-kit.jpg',
    price: '₹3,500',
  },
  {
    id: 5,
    name: 'Suspension Kit',
    description: 'Premium suspension system for a smoother ride.',
    image: '/images/accessories/suspension-kit.jpg',
    price: '₹15,000',
  },
  {
    id: 6,
    name: 'Weather Protection Kit',
    description: 'Complete weather protection for all seasons.',
    image: '/images/accessories/weather-kit.jpg',
    price: '₹6,500',
  },
];

const AccessoriesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { addItem } = useCart();

  const handleAddToCart = (accessory: typeof accessories[0]) => {
    // Parse price string (₹45,000) to number (45000)
    const parsedPrice = parseInt(accessory.price.replace(/[^0-9]/g, ''));
    
    addItem({
      id: accessory.id.toString(),
      name: accessory.name,
      price: parsedPrice,
      image: accessory.image,
      type: 'accessory',
    });
  };

  return (
    <Box component="section" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 6,
            }}
          >
            Genuine Accessories
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {accessories.map((accessory, index) => (
            <Grid item xs={12} sm={6} md={4} key={accessory.id}>
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
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={accessory.image}
                    alt={accessory.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {accessory.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {accessory.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ fontWeight: 600 }}
                    >
                      {accessory.price}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                      fullWidth
                      onClick={() => handleAddToCart(accessory)}
                    >
                      Add to Cart
                    </Button>
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

export default AccessoriesSection;
