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
import Image from 'next/image';

const states = [
  'Maharashtra',
  'Gujarat',
  'Delhi',
  'Uttar Pradesh',
  'Karnataka',
  'Tamil Nadu',
  'Telangana',
  'West Bengal',
  'Rajasthan',
  'Madhya Pradesh',
  'Punjab',
  'Haryana',
  'Bihar',
  'Odisha',
  'Kerala',
];

const StateApprovals = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
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
                State Approvals
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: '800px', mx: 'auto' }}
              >
                Our vehicles are approved and registered across multiple states in
                India
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={3}>
            {states.map((state, index) => (
              <Grid item xs={6} sm={4} md={3} key={state}>
                <motion.div variants={itemVariants}>
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'white',
                        transform: 'translateY(-4px)',
                        transition: 'all 0.3s ease-in-out',
                      },
                    }}
                  >
                    <Typography variant="h6">{state}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <motion.div variants={itemVariants}>
              <Typography variant="body1" color="text.secondary">
                * Additional state approvals in process
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default StateApprovals;
