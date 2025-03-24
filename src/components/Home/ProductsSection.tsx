'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Link from 'next/link';
import ProductCard from '../Products/ProductCard';
import { products } from '../../data/products';

const ProductsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile: < 600px
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Tablet: 600px - 960px

  // Filter and limit to 3 featured products
  const featuredProducts = products.filter((product) => product.featured).slice(0, 3);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: '#f5f5f5', // Flat light grey background
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: 'text.primary',
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            Our Featured Products
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              mb: 2,
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            Discover our range of innovative electric vehicles designed for different needs.
          </Typography>
        </Box>

        {/* Responsive Grid for Products */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr', // 1 column on mobile
              sm: 'repeat(2, 1fr)', // 2 columns on tablet
              md: 'repeat(3, 1fr)', // 3 columns on desktop
            },
            gap: { xs: 2, sm: 3, md: 4 },
            justifyItems: 'center',
          }}
        >
          {featuredProducts.map((product) => (
            <Box
              key={product.id}
              sx={{
                width: '100%',
                maxWidth: { xs: '340px', sm: '320px', md: '360px' }, // Control card width
              }}
            >
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={Link}
            href="/products"
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              borderRadius: '20px',
              bgcolor: '#1976d2',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 6px 20px rgba(0, 123, 255, 0.3)',
              },
            }}
          >
            View All Products
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductsSection;