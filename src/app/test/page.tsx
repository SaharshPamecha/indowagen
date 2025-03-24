'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function TestPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ bgcolor: 'error.main', color: 'white', p: 4, borderRadius: 2, textAlign: 'center' }}>
        <Typography variant="h3">Test Page</Typography>
        <Typography variant="h5">This is a test page to verify routing</Typography>
        <Typography variant="body1">Current time: {new Date().toISOString()}</Typography>
      </Box>
    </Container>
  );
}
