'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SavingsIcon from '@mui/icons-material/Savings';

const features = [
  {
    icon: <BatteryChargingFullIcon sx={{ fontSize: 48 }} />,
    title: 'Long Battery Life',
    description: 'Extended range with our advanced lithium-ion battery technology.',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 48 }} />,
    title: 'High Performance',
    description: 'Powerful motors delivering smooth and efficient performance.',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48 }} />,
    title: 'Safety First',
    description: 'Built with advanced safety features for peace of mind.',
  },
  {
    icon: <EngineeringIcon sx={{ fontSize: 48 }} />,
    title: 'Easy Maintenance',
    description: 'Simple maintenance and reliable after-sales service.',
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 48 }} />,
    title: 'Versatile Use',
    description: 'Perfect for both passenger and cargo transportation needs.',
  },
  {
    icon: <SavingsIcon sx={{ fontSize: 48 }} />,
    title: 'Cost Effective',
    description: 'Lower operating costs and excellent return on investment.',
  },
];

const FeaturesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Why Choose Indo Wagen
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                mb: 4,
              }}
            >
              Experience the benefits of our innovative electric vehicles
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    p: 3,
                    height: '100%',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    align="center"
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
