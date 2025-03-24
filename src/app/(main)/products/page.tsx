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
  Tabs,
  Tab,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { products, Product } from '../../../data/products';

// Allow for more flexible category types including additional ones that may be in the data
type Category = 'all' | 'e-rickshaw' | 'e-cart' | 'e-loader' | 'electric-vehicle' | string;

export default function Products() {
  const [category, setCategory] = React.useState<Category>('all');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Define default category if missing
  const productsWithCategories = products.map(product => ({
    ...product,
    category: product.category || 'e-rickshaw' // Default category if missing
  }));
  
  const filteredProducts = React.useMemo(() => {
    if (category === 'all') return productsWithCategories;
    return productsWithCategories.filter(product => product.category === category);
  }, [category, productsWithCategories]);

  const handleCategoryChange = (_event: React.SyntheticEvent, newValue: Category) => {
    setCategory(newValue);
  };

  return (
    <Box component="main" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mb: 4, borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="h5">NEW UPDATE: Products page has been refreshed!</Typography>
        </Box>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Our Products Collection - Updated
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Discover our premium range of electric vehicles designed for various needs
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          {/* Extract unique categories from products */}
          {(() => {
            // Get all unique categories from the products data
            const categories = ['all', ...new Set(productsWithCategories.map(p => p.category || 'electric-vehicle'))];
            
            return (
              <Tabs
                value={category}
                onChange={handleCategoryChange}
                variant={isMobile ? "scrollable" : "standard"}
                scrollButtons={isMobile ? "auto" : false}
                centered={!isMobile}
              >
                {categories.map(cat => {
                  // Format category name for display
                  const displayName = cat === 'all' ? 'All Products' : 
                    cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                  
                  return <Tab key={cat} label={displayName} value={cat} />;
                })}
              </Tabs>
            );
          })()}
        </Box>

        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Link href={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      position: 'relative',
                      height: 240,
                      backgroundColor: '#f5f5f5'
                    }}
                  >
                    {/* Use first image from images array if available, otherwise fall back to single image */}
                    {(product.images && product.images.length > 0) ? (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        style={{ objectFit: 'contain' }}
                        unoptimized={true}
                      />
                    ) : product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{ objectFit: 'contain' }}
                        unoptimized={true}
                      />
                    ) : (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: '#f0f0f0'
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          Image not available
                        </Typography>
                      </Box>
                    )}
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {product.tagline}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6" color="primary">
                        {product.price}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          textTransform: 'uppercase',
                          bgcolor: 'primary.main',
                          color: 'white',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1
                        }}
                      >
                        {product.category.replace('-', ' ')}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
