'use client';


import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { products } from '../../../../data/products';

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id as string;
  
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center">
          Product not found
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            startIcon={<ArrowBack />}
            onClick={() => router.push('/products')}
          >
            Back to Products
          </Button>
        </Box>
      </Container>
    );
  }

  // Use the first image from the images array if available, otherwise use the main image
  const defaultImage = (product.images && product.images.length > 0) ? product.images[0] : product.image;
  const [selectedImage, setSelectedImage] = React.useState(defaultImage);

  return (
    <Box component="main" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => router.push('/products')}
          sx={{ mb: 4 }}
        >
          Back to Products
        </Button>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                position: 'relative',
                height: { xs: 300, md: 500 },
                width: '100%',
                overflow: 'hidden'
              }}
              elevation={3}
            >
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  unoptimized={true}
                />
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#f0f0f0'
                  }}
                >
                  <Typography variant="body1" color="text.secondary">
                    Image not available
                  </Typography>
                </Box>
              )}
            </Paper>
            
            {product.images && product.images.length > 1 && (
              <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
                {product.images.map((img, index) => (
                  <Box 
                    key={index}
                    sx={{
                      width: 70,
                      height: 70,
                      position: 'relative',
                      border: selectedImage === img ? '2px solid #1976d2' : '1px solid #e0e0e0',
                      cursor: 'pointer',
                      borderRadius: 1,
                      overflow: 'hidden'
                    }}
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - image ${index + 1}`}
                      fill
                      style={{ objectFit: 'contain' }}
                      unoptimized={true}
                    />
                  </Box>
                ))}
              </Box>
            )}
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: 'info.main', color: 'white', p: 2, mb: 2, borderRadius: 2 }}>
              <Typography variant="h6">Product Detail Page Updated</Typography>
            </Box>
            <Typography variant="h3" component="h1" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              {product.tagline}
            </Typography>
            <Typography variant="h4" color="primary" sx={{ my: 2 }}>
              {product.price}
            </Typography>
            {product.category && (
              <Chip
                label={product.category.replace('-', ' ').toUpperCase()}
                color="primary"
                sx={{ mb: 3 }}
              />
            )}
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>

            <Button
              variant="contained"
              size="large"
              fullWidth
              href="/contact"
              sx={{ mt: 2 }}
            >
              Contact for Purchase
            </Button>
          </Grid>

          {product.specs && (
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }} elevation={2}>
                <Typography variant="h5" gutterBottom>
                  Specifications
                </Typography>
                <List>
                  {product.specs.map((spec, index) => (
                    <React.Fragment key={spec.label}>
                      <ListItem>
                        <ListItemText
                          primary={spec.label}
                          secondary={spec.value}
                          primaryTypographyProps={{
                            variant: 'subtitle1',
                            fontWeight: 'medium'
                          }}
                        />
                      </ListItem>
                      {index < product.specs!.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </Paper>
            </Grid>
          )}

          {product.features && (
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }} elevation={2}>
                <Typography variant="h5" gutterBottom>
                  Key Features
                </Typography>
                <List>
                  {product.features.map((feature, index) => {
                    // Handle both string features and object features
                    if (typeof feature === 'string') {
                      return (
                        <React.Fragment key={`feature-${index}`}>
                          <ListItem>
                            <ListItemText
                              primary={feature}
                              primaryTypographyProps={{
                                variant: 'subtitle1',
                                fontWeight: 'medium'
                              }}
                            />
                          </ListItem>
                          {product.features && index < product.features.length - 1 && <Divider />}
                        </React.Fragment>
                      );
                    } else {
                      return (
                        <React.Fragment key={`feature-${index}`}>
                          <ListItem>
                            <ListItemText
                              primary={feature.title}
                              secondary={feature.description}
                              primaryTypographyProps={{
                                variant: 'subtitle1',
                                fontWeight: 'medium'
                              }}
                            />
                          </ListItem>
                          {product.features && index < product.features.length - 1 && <Divider />}
                        </React.Fragment>
                      );
                    }
                  })}
                </List>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
