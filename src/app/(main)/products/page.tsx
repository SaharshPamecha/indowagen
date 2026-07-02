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

// --- Category normalization -------------------------------------------------
// The admin panel stores `vehicles.category` as free text, so the DB holds many
// inconsistent variants ("Passenger Car", "Passenger Car cum Cargo",
// "Passenger Car Cum Cargo", "Passenger", "Passenger " with a trailing space,
// "Loader", "Cargo/E Cart"). Per the client's category sheet (July 2026) the
// products page must surface only THREE buckets:
//
//   • All Products
//   • Passenger Cum Cargo   <- every passenger-type variant above
//   • Cargo/E Cart          <- the loaders / cargo carts (C1 Loader, C8 Loader, C8 Hevy)
//
// Rule: any category text that begins with "passenger" -> Passenger Cum Cargo;
// everything else -> Cargo/E Cart. PRODUCT_CATEGORY_OVERRIDES lets us pin a
// specific vehicle by its url slug if a future model ever needs to break the
// rule — update that map (not the string logic) for one-off reassignments.
const CATEGORY_PASSENGER = 'Passenger Cum Cargo';
const CATEGORY_CARGO = 'Cargo/E Cart';
const PRODUCT_CATEGORIES = ['all', CATEGORY_PASSENGER, CATEGORY_CARGO] as const;

const PRODUCT_CATEGORY_OVERRIDES: Record<string, string> = {
  // 'some-model-slug': CATEGORY_CARGO,
};

function normalizeCategory(product: { url?: string | null; category?: string | null }): string {
  if (product.url && PRODUCT_CATEGORY_OVERRIDES[product.url]) {
    return PRODUCT_CATEGORY_OVERRIDES[product.url];
  }
  const raw = (product.category || '').trim().toLowerCase();
  return raw.startsWith('passenger') ? CATEGORY_PASSENGER : CATEGORY_CARGO;
}

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
          // Collapse the free-text DB category into one of our two display buckets.
          category: normalizeCategory({ url: row.url, category: row.category }),
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
          <Tabs
            value={category}
            onChange={handleCategoryChange}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons={isMobile ? "auto" : false}
            centered={!isMobile}
          >
            {PRODUCT_CATEGORIES.map(cat => (
              <Tab
                key={cat}
                label={cat === 'all' ? 'All Products' : cat}
                value={cat}
              />
            ))}
          </Tabs>
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
                      transform: 'translateY(-4px)',
                    },
                    // Product image zooms in when the card is hovered.
                    '&:hover .product-card-image img': {
                      transform: 'scale(1.08)',
                    },
                  }}
                >
                  <CardMedia
                    component="div"
                    className="product-card-image"
                    sx={{
                      position: 'relative',
                      height: 240,
                      backgroundColor: '#f5f5f5',
                      overflow: 'hidden',
                      '& img': {
                        transition: 'transform 0.5s ease',
                      },
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