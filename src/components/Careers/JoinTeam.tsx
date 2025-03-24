'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const JoinTeam = () => {
  return (
    <Box 
      id="join-team"
      sx={{ 
        py: { xs: 6, md: 8 }, 
        bgcolor: 'background.paper',
        scrollMarginTop: { xs: '56px', sm: '64px' }
      }}
    >
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
          >
            Join Our Team
          </Typography>
          <Typography
            variant="body1"
            align="center"
            paragraph
            sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
          >
            Indo Wagen is always on the lookout for passionate individuals who share our vision of a greener future. Whether you are a fresh graduate eager to make a difference or an experienced professional seeking new challenges, we welcome you to be a part of our journey.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            paragraph
            sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
          >
            Together, we can work to build a better world and promote sustainability, and a healthier future.
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Reach out to us at: <Link href="mailto:hr@zeniak.com">hr@zeniak.com</Link>
            </Typography>
            <Typography variant="h6">
              Visit our website: <Link href="https://www.indowagen.com" target="_blank">www.indowagen.com</Link>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default JoinTeam;