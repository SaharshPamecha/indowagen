'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import DirectionsIcon from '@mui/icons-material/Directions';
import { companyInfo } from '@/data/company';

const ContactMap = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const address = companyInfo?.address || {
    street: '123, Industrial Area, Phase 1',
    city: 'Noida',
    state: 'Uttar Pradesh',
    zip: '201301',
    country: 'India'
  };
  const fullAddress = `${address.street}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}`;
  const encodedAddress = encodeURIComponent(fullAddress);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ textAlign: 'center', mb: 4 }}
          >
            Visit Our Headquarters
          </Typography>
          
          <Card 
            elevation={4}
            sx={{
              overflow: 'hidden',
              borderRadius: 2,
              mb: 4,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                height: { xs: '300px', md: '450px' },
                bgcolor: 'grey.200',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* In a real application, you would embed a Google Maps iframe here */}
              <Typography variant="body1" color="text.secondary">
                Interactive Map Would Be Displayed Here
              </Typography>
              
              {/* This placeholder represents where a real map would be */}
              <Box 
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'rgba(0, 0, 0, 0.05)',
                  borderRadius: 2,
                }}
              >
                <Box 
                  component="img"
                  src="/location-pin.svg"
                  alt="Location"
                  sx={{ 
                    width: 60,
                    height: 60,
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.2))',
                    mb: 2,
                  }}
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Indo Wagen Headquarters
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'center', px: 2 }}>
                  {address.street}
                  <br />
                  {address.city}, {address.state} {address.zip}
                  <br />
                  {address.country}
                </Typography>
                <Button 
                  variant="contained" 
                  startIcon={<DirectionsIcon />}
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </Button>
              </Box>
            </Box>
            
            <CardContent sx={{ py: 3 }}>
              <Typography variant="body1" gutterBottom>
                <strong>Address:</strong> {address.street}, {address.city}, {address.state}, {address.zip}, {address.country}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Phone:</strong> {companyInfo.contact?.phone || '+91-120-4567890'}
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong> {companyInfo.contact?.email || 'info@indowagen.com'}
              </Typography>
            </CardContent>
          </Card>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="body1" gutterBottom>
              Our headquarters is open Monday through Friday from 9:00 AM to 6:00 PM.
            </Typography>
            <Typography variant="body1">
              If you're planning a visit, please call ahead to schedule an appointment with our team.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactMap;
