'use client';

import React, { useEffect, useState } from 'react';
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
import ProductsHero from '@/components/Products/ProductsHero';
import { motion } from "framer-motion";

interface Product {
  id: number;
  model_name: string;
  tagline?: string;
  price?: string;
  category?: string;
  img_link?: string;
  url?: string;
}

type Category = 'all' | 'e-rickshaw' | 'e-cart' | 'e-loader' | 'electric-vehicle' | string;

export default function Products() {
  const [category, setCategory] = useState<Category>('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        
        const fetchedProducts = data.map((row: any) => ({
          id: row.id,
          model_name: row.model_name,
          tagline: row.tagline || 'Premium Electric Vehicle',
          price: row.price ? `₹${row.price}` : 'Contact',
          category: row.category || 'electric-vehicle',
          img_link: row.img_link || null,
          url: row.url || null
        }));
        
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = React.useMemo(() => {
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
  }, [category, products]);

  const handleCategoryChange = (_event: React.SyntheticEvent, newValue: Category) => {
    setCategory(newValue);
  };

  if (loading) {
    return (
      <Box sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h5">Loading products...</Typography>
      </Box>
    );
  }

  return (
    <Box component="main">
      <ProductsHero />
      <Container maxWidth="lg">
      
  <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Premium Electric Vehicles
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
          >
            Discover our premium range of electric vehicles designed for
            efficiency, sustainability, and exceptional performance
          </Typography>
        </motion.div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          {(() => {
            const categories = ['all', ...new Set(products.map(p => p.category || 'electric-vehicle'))];
            
            return (
              <Tabs
                value={category}
                onChange={handleCategoryChange}
                variant={isMobile ? "scrollable" : "standard"}
                scrollButtons={isMobile ? "auto" : false}
                centered={!isMobile}
              >
                {categories.map(cat => {
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
              <Link href={`/products/${product.url}`} style={{ textDecoration: 'none' }}>
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
                    {product.img_link ? (
                      <Image
                        src={`https://forestgreen-capybara-315761.hostingersite.com/assets/products/${product.img_link}`}
                        alt={product.model_name}
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
                      {product.model_name}
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
                        {product.category}
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