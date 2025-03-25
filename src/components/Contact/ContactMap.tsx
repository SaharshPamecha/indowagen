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

  const manufacturingAddress = companyInfo?.manufacturingAddress || companyInfo?.address || {};
  const corporateAddress = companyInfo?.corporateAddress || {};
  const registeredAddress = companyInfo?.registeredAddress || {};
  
  interface AddressType {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }

  const getFullAddress = (address: AddressType) => {
    return `${address.street}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}`;
  };
  
  const getGoogleMapsUrl = (address: AddressType) => {
    const fullAddress = getFullAddress(address);
    const encodedAddress = encodeURIComponent(fullAddress);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };
  
  const manufacturingFullAddress = getFullAddress(manufacturingAddress);
  const corporateFullAddress = getFullAddress(corporateAddress);
  const registeredFullAddress = getFullAddress(registeredAddress);
  
  const manufacturingGoogleMapsUrl = getGoogleMapsUrl(manufacturingAddress);
  const corporateGoogleMapsUrl = getGoogleMapsUrl(corporateAddress);
  const registeredGoogleMapsUrl = getGoogleMapsUrl(registeredAddress);

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
            Visit Our Locations
          </Typography>
          
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 4, color: 'text.secondary' }}>
            We have multiple offices across West Bengal to serve you better
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
                  {manufacturingAddress.name || 'Manufacturing Unit'}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'center', px: 2 }}>
                  {manufacturingAddress.street}
                  <br />
                  {manufacturingAddress.city}, {manufacturingAddress.state} {manufacturingAddress.zip}
                  <br />
                  {manufacturingAddress.country}
                </Typography>
                <Button 
                  variant="contained" 
                  startIcon={<DirectionsIcon />}
                  href={manufacturingGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </Button>
              </Box>
            </Box>
            
            <CardContent sx={{ py: 3 }}>
              <Typography variant="body1" gutterBottom>
                <strong>Manufacturing Unit:</strong> {manufacturingFullAddress}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Corporate Office:</strong> {corporateFullAddress}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Registered Office:</strong> {registeredFullAddress}
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
              Our offices are open Monday through Saturday from {companyInfo.businessHours.weekdays}.
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
