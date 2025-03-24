'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const CompanyIntro = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        py: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              maxWidth: '900px',
              mx: 'auto',
              textAlign: 'center',
              position: 'relative',
              '&::before, &::after': {
                content: '""',  // Changed from '"' to empty content
                display: 'none', // Hiding the problematic quotes altogether
              },
            }}
          >
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.8,
                fontWeight: 400,
                '& strong': {
                  color: 'text.primary',
                  fontWeight: 600,
                },
              }}
            >
              At <strong>Indo Wagen</strong>, we are more than just a workplace; we are a driving force behind the future of green mobility. Since our inception in 2013, we have been pioneers in revolutionizing the electric vehicle industry with cutting-edge technology and a commitment to sustainability. By joining us, you become part of a dynamic team that values innovation, collaboration, and positive societal impact.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CompanyIntro;