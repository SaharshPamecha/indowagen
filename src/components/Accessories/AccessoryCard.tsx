'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
  Rating,
} from '@mui/material';
import { motion } from 'framer-motion';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export interface Accessory {
  id: string;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  image: string;
  compatibleModels: string[];
  category: string;
  rating?: number;
  featured?: boolean;
  inStock: boolean;
}

interface AccessoryCardProps {
  accessory: Accessory;
}

const AccessoryCard: React.FC<AccessoryCardProps> = ({ accessory }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: accessory.id,
      name: accessory.name,
      price: accessory.priceValue,
      image: accessory.image,
      type: 'accessory'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
          },
          '&:hover .accessory-image': {
            transform: 'scale(1.05)',
          }
        }}
      >
        {accessory.featured && (
          <Chip
            label="Featured"
            color="primary"
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 1,
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          />
        )}
        {!accessory.inStock && (
          <Chip
            label="Out of Stock"
            color="error"
            size="small"
            sx={{
              position: 'absolute',
              top: accessory.featured ? 50 : 12,
              right: 12,
              zIndex: 1,
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          />
        )}
        <Box sx={{ 
          position: 'relative', 
          pt: '65%',
          backgroundColor: 'rgba(245, 245, 245, 0.4)' 
        }}>
          <Image
            src={accessory.image}
            alt={accessory.name}
            fill
            style={{ 
              objectFit: 'contain',
              transition: 'transform 0.5s ease-in-out'
            }}
            className="accessory-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={true}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 3, pb: 4 }}>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
              height: '2.6em',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {accessory.name}
          </Typography>
          
          {accessory.rating && (
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Rating value={accessory.rating} precision={0.5} size="small" readOnly />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                ({accessory.rating})
              </Typography>
            </Box>
          )}
          
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {accessory.description}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
            <strong>Category:</strong> {accessory.category}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            <strong>Compatible with:</strong> {accessory.compatibleModels.join(', ')}
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 'auto',
              pt: 2
            }}
          >
            <Typography variant="h6" color="primary.main">
              {accessory.price}
            </Typography>
            <Button
              variant="contained"
              size="small"
              startIcon={<AddShoppingCartIcon />}
              disabled={!accessory.inStock}
              onClick={handleAddToCart}
              sx={{
                borderRadius: '20px',
                px: 2,
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.12)',
                }
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AccessoryCard;
