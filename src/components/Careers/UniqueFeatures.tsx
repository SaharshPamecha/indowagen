'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';

const features = [
  {
    icon: <ElectricCarIcon />,
    title: 'Next-Generation EV Brand',
    description: 'Indo Wagen, under Zeniak Innovation Limited, is a leading name in electric rickshaw manufacturing, redefining last-mile connectivity with sustainable transportation',
    color: '#2196F3', // Blue
    delay: 0.1
  },
  {
    icon: <EnergySavingsLeafIcon />,
    title: 'Commitment to Green Energy',
    description: "We align with India's Net Zero Emission goals, fostering an eco-friendly future",
    color: '#4CAF50', // Green
    delay: 0.2
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Rapid Growth',
    description: 'Join a fast-growing company at the forefront of sustainable mobility solutions',
    color: '#FF9800', // Orange
    delay: 0.3
  },
  {
    icon: <StarIcon />,
    title: 'Excellence in Innovation',
    description: 'Be part of a team dedicated to pushing the boundaries of EV technology',
    color: '#9C27B0', // Purple
    delay: 0.4
  }
];

const UniqueFeatures = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        position: 'relative',
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `linear-gradient(30deg, ${theme.palette.primary.main} 12%, transparent 12.5%, transparent 87%, ${theme.palette.primary.main} 87.5%, ${theme.palette.primary.main}),
          linear-gradient(150deg, ${theme.palette.primary.main} 12%, transparent 12.5%, transparent 87%, ${theme.palette.primary.main} 87.5%, ${theme.palette.primary.main}),
          linear-gradient(30deg, ${theme.palette.primary.main} 12%, transparent 12.5%, transparent 87%, ${theme.palette.primary.main} 87.5%, ${theme.palette.primary.main}),
          linear-gradient(150deg, ${theme.palette.primary.main} 12%, transparent 12.5%, transparent 87%, ${theme.palette.primary.main} 87.5%, ${theme.palette.primary.main})`,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            component="h2"
            variant="h3"
            align="center"
            sx={{
              mb: { xs: 6, md: 8 },
              fontWeight: 700,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                borderRadius: 2,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              }
            }}
          >
            What Makes Us Unique
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: feature.delay, duration: 0.5 }}
              >
                <Card
                  sx={{
                    minHeight: 280, // Added fixed minimum height
                    height: '100%',
                    position: 'relative',
                    borderRadius: 4,
                    overflow: 'visible',
                    background: theme.palette.mode === 'dark' 
                      ? 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))'
                      : 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '20px 20px 60px #1a1a1a, -20px -20px 60px #242424'
                      : '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      '& .icon-wrapper': {
                        transform: 'rotate(360deg)',
                      }
                    }
                  }}
                >
                  {/* Icon Wrapper */}
                  <Box
                    className="icon-wrapper"
                    sx={{
                      position: 'absolute',
                      top: -25,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, ${feature.color}, ${feature.color}88)`,
                      boxShadow: `0 4px 20px ${feature.color}50`,
                      transition: 'transform 0.6s ease-in-out',
                      '& svg': {
                        fontSize: 28,
                        color: '#fff'
                      }
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Box sx={{ p: 3, pt: 4, mt: 2 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      align="center"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: feature.color,
                        mb: 2
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default UniqueFeatures;

