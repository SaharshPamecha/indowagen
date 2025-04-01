'use client';

import React from 'react';
import { Card, CardContent, Typography, Box, Chip, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

export interface Accessory {
  id: string;
  name: string;
  image: string;
  compatibleModels: string[];
  category: string;
  featured?: boolean;
  inStock: boolean;
}

interface AccessoryCardProps {
  accessory: Accessory;
}

const AccessoryCard: React.FC<AccessoryCardProps> = ({ accessory }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          },
        }}
      >
        {/* {accessory.featured && (
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
        )} */}
        
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
              transition: 'transform 0.5s ease-in-out',
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
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AccessoryCard;