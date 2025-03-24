'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GroupIcon from '@mui/icons-material/Group';
import EngineeringIcon from '@mui/icons-material/Engineering';

const Vision = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const visionItems = [
    {
      icon: <DirectionsCarIcon sx={{ fontSize: 40 }} />,
      title: 'Sustainable Transport',
      description: 'Promoting a clean and efficient transportation ecosystem.',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
      title: 'Empowering People',
      description: 'Providing income opportunities through electric vehicle adoption.',
    },
    {
      icon: <EngineeringIcon sx={{ fontSize: 40 }} />,
      title: 'Technology-Driven',
      description: 'Leveraging advanced technology and innovation in EV production.',
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
      title: 'Expanding Reach',
      description: 'Strengthening our dealer and showroom network across India.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Our Vision
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: '1000px', mx: 'auto' }}
              >
                At Indo Wagen, we envision a cleaner, greener, and smarter transportation future. 
                Our goal is to be a next-generation EV brand that transforms urban mobility, 
                creates employment opportunities, enhances last-mile connectivity, and contributes 
                to India’s Net Zero Emission target.
              </Typography>
            </motion.div>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Our Mission
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {visionItems.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        p: 2,
                        borderRadius: '50%',
                        mb: 2,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Vision;