'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';

const ProductsHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Delay visibility for animation effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '600px', md: '700px' },
        mb: 8,
        overflow: 'hidden',
      }}
    >
      {/* Banner Image */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <Image
          src="/products/Product banner 1/Products Panner.jpeg"
          alt="Indo Wagen Products"
          fill
          priority
          style={{ 
            objectFit: 'cover', 
            objectPosition: 'center',
          }}
        />
        {/* Overlay Gradient */}
        {/* <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 100%)',
            zIndex: 1,
          }}
        /> */}
      </Box>

      {/* Content */}
      <Container 
        maxWidth="lg"
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          style={{
            width: isMobile ? '100%' : '60%',
            padding: isMobile ? theme.spacing(3) : theme.spacing(5),
          }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.light,
                fontWeight: 600,
                fontSize: { xs: '0.9rem', md: '1.1rem' },
                mb: 1,
                display: 'block',
              }}
            >
              INDO WAGEN INNOVATIONS
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: 'white',
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Revolutionizing Electric Mobility in India
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                mb: 4,
                opacity: 0.9,
                maxWidth: '90%',
                lineHeight: 1.6,
              }}
            >
              Discover our premium range of electric vehicles designed for efficiency, 
              sustainability, and exceptional performance. From e-rickshaws to e-loaders, 
              we provide innovative solutions for modern transportation needs.
            </Typography>
          </motion.div>
          
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <motion.div variants={itemVariants}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                href="#product-categories"
                startIcon={<ElectricRickshawIcon />}
                sx={{
                  py: 1.5,
                  px: 3,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontSize: '1rem',
                  boxShadow: '0 4px 14px rgba(0, 123, 255, 0.4)',
                }}
              >
                Explore Products
              </Button>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Button
                variant="outlined"
                size="large"
                color="inherit"
                href="/contact"
                startIcon={<DirectionsCarIcon />}
                sx={{
                  py: 1.5,
                  px: 3,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontSize: '1rem',
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: theme.palette.primary.light,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Request Demo
              </Button>
            </motion.div>
          </Box>
          
          
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 1, 
              mt: 6,
              alignItems: 'center',
            }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              >
                <Box
                  sx={{
                    width: { xs: 8, md: 12 },
                    height: { xs: 8, md: 12 },
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main,
                  }}
                />
              </motion.div>
            ))}
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'white', 
                ml: 1,
                opacity: 0.8,
              }}
            >
              EV Revolution in Motion
            </Typography>
          </Box>
        </motion.div> */}
      </Container>
    </Box>
  );
};

export default ProductsHero;
