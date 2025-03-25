'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
  Chip,
  Paper,
  Stack,
  Badge,
  Divider,
} from '@mui/material';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import { motion } from 'framer-motion';
import ProductsHero from '@/components/Products/ProductsHero';
import { products, Product } from '../../../data/products';

// Allow for more flexible category types including additional ones that may be in the data
type Category = 'all' | 'e-rickshaw' | 'e-cart' | 'e-loader' | 'electric-vehicle' | string;

// Format category display name
const formatCategoryName = (cat: string) => {
  return cat === 'all' 
    ? 'All Products' 
    : cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export default function Products() {
  const [category, setCategory] = React.useState<Category>('all');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Define default category if missing
  const productsWithCategories = products.map(product => ({
    ...product,
    category: product.category || 'e-rickshaw' // Default category if missing
  }));
  
  // Get all products ready for display
  const displayProducts = React.useMemo(() => {
    return productsWithCategories;
  }, [productsWithCategories]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Box component="main">
      {/* Hero Section */}
      <ProductsHero />
      
      <Container maxWidth="lg" id="product-categories" sx={{ pt: 5, pb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Premium Electric Vehicles
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Discover our premium range of electric vehicles designed for efficiency, sustainability, and exceptional performance
          </Typography>
        </motion.div>



        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {displayProducts.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Link href={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                      <Card
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 3,
                          overflow: 'hidden',
                          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
                          position: 'relative',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)'
                          }
                        }}
                      >
                        {/* New badge for recent products */}
                        {index < 2 && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 16,
                              right: 16,
                              zIndex: 2,
                              bgcolor: theme.palette.primary.main,
                              color: 'white',
                              py: 0.5,
                              px: 1.5,
                              borderRadius: 10,
                              fontWeight: 'bold',
                              fontSize: '0.75rem',
                              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                            }}
                          >
                            NEW
                          </Box>
                        )}

                        {/* Product Image */}
                        <Box sx={{ position: 'relative', paddingTop: '56.25%', backgroundColor: '#f6f6f6' }}>
                          <Image
                            src={product.images?.[0] || '/images/products/placeholder.jpg'}
                            alt={product.name}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </Box>

                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                            {product.name}
                          </Typography>

                          <Typography variant="body2" color="text.secondary" paragraph>
                            {product.tagline || 'Eco-friendly electric vehicle for sustainable transportation'}
                          </Typography>
                          
                          <Box display="flex" alignItems="center" mb={2}>
                            <LocalOfferIcon color="primary" sx={{ fontSize: '0.875rem', mr: 0.5 }} />
                            <Typography variant="subtitle1" color="primary" fontWeight="600">
                              {product.price}
                            </Typography>
                          </Box>

                          <Box display="flex" mt={2} justifyContent="space-between" alignItems="center">
                            <Chip 
                              icon={<ElectricCarIcon fontSize="small" />}
                              label={formatCategoryName(product.category)} 
                              size="small" 
                              sx={{ 
                                bgcolor: `${theme.palette.secondary.light}20`,
                                color: theme.palette.secondary.main,
                                borderRadius: '16px',
                                '& .MuiChip-icon': {
                                  color: theme.palette.secondary.main
                                }
                              }} 
                            />
                            <Typography 
                              variant="body2" 
                              color="text.primary"
                              sx={{
                                bgcolor: theme.palette.primary.main,
                                color: 'white',
                                px: 1.5,
                                py: 0.5,
                                borderRadius: '4px',
                                fontWeight: 'medium',
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                              }}
                            >
                              View Details
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                </Grid>
              ))
            )}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
