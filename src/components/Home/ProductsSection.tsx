'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '../Products/ProductCard';

interface Product {
  id: number;
  model_name: string;
  max_speed?: string;
  charging_time?: string;
  category?: string;
  img_link?: string;
  url?: string;
}

const ProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile: < 600px
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Tablet: 600px - 960px

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        setLoading(true);
        const response = await fetch('/api/featured-products');
        if (!response.ok) throw new Error('Failed to fetch featured products');
        const data = await response.json();

        const fetchedProducts = data.map((row: any) => ({
          id: row.id,
          model_name: row.model_name || 'Unnamed Product',
          
          max_speed: row.max_speed,
          charging_time: row.charging_time,
          category: row.category || 'electric-vehicle',
          img_link: row.img_link || null,
          url: row.url || null
        }));

        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching featured products:', error);
        // Fallback data if fetch fails
        // setProducts([
        //   { id: 1, model_name: 'Model A', price: '₹5,00,000', category: 'e-rickshaw', img_link: null, url: 'model-a' },
        //   { id: 17, model_name: 'Model B', price: '₹7,50,000', category: 'e-cart', img_link: null, url: 'model-b' },
        //   { id: 12, model_name: 'Model C', price: '₹6,25,000', category: 'e-loader', img_link: null, url: 'model-c' },
        // ]);
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedProducts();
  }, []);



  if (loading) {
    return (
      <Box sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h5">Loading featured products...</Typography>
      </Box>
    );
  }

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
             {products.map((product) => (
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