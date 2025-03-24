'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DiversityIcon from '@mui/icons-material/Diversity3';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const reasons = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Innovation First',
    description: 'Work on cutting-edge EV technology and help shape the future of sustainable transportation in India.'
  },
  {
    icon: <DiversityIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Inclusive Culture',
    description: 'Join a diverse team that values different perspectives and fosters an environment of mutual respect.'
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Growth Opportunities',
    description: 'Benefit from structured career development paths and mentorship programs.'
  }
];

const WhyJoinUs = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Why Join Indo Wagen?
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {reasons.map((reason, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  <Box sx={{ mb: 2 }}>{reason.icon}</Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {reason.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {reason.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyJoinUs;