'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  Alert,
  useTheme,
  useMediaQuery,
  InputAdornment,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import DirectionsIcon from '@mui/icons-material/Directions';
import { companyInfo } from '@/data/company';

// Sample dealer data
const dealerLocations = [
  {
    id: 'dl001',
    name: 'Indo Wagen Flagship Store',
    location: 'Delhi NCR',
    address: '123 Main Avenue, Sector 14, Gurugram, Haryana',
    phone: '+91 98765 43210',
    email: 'gurgaon@indowagen.com',
    type: 'Sales & Service',
    rating: 4.8,
    services: ['Sales', 'Service', 'Test Drive', 'Spare Parts'],
  },
  {
    id: 'dl002',
    name: 'Indo Wagen Mumbai Central',
    location: 'Mumbai',
    address: '456 Marine Drive, Nariman Point, Mumbai, Maharashtra',
    phone: '+91 98765 43211',
    email: 'mumbai@indowagen.com',
    type: 'Sales & Service',
    rating: 4.6,
    services: ['Sales', 'Service', 'Test Drive', 'Spare Parts'],
  },
  {
    id: 'dl003',
    name: 'Indo Wagen Bangalore Tech Park',
    location: 'Bangalore',
    address: '789 Electronics City, Phase 1, Bangalore, Karnataka',
    phone: '+91 98765 43212',
    email: 'bangalore@indowagen.com',
    type: 'Sales Only',
    rating: 4.7,
    services: ['Sales', 'Test Drive'],
  },
  {
    id: 'dl004',
    name: 'Indo Wagen Chennai Express',
    location: 'Chennai',
    address: '101 Anna Salai, T. Nagar, Chennai, Tamil Nadu',
    phone: '+91 98765 43213',
    email: 'chennai@indowagen.com',
    type: 'Service Center',
    rating: 4.5,
    services: ['Service', 'Spare Parts', 'Battery Replacement'],
  },
  {
    id: 'dl005',
    name: 'Indo Wagen Hyderabad Hub',
    location: 'Hyderabad',
    address: '202 Banjara Hills, Road No. 3, Hyderabad, Telangana',
    phone: '+91 98765 43214',
    email: 'hyderabad@indowagen.com',
    type: 'Sales & Service',
    rating: 4.9,
    services: ['Sales', 'Service', 'Test Drive', 'Spare Parts', 'Battery Replacement'],
  },
];

const DealerLocator = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchResults, setSearchResults] = useState(dealerLocations);
  const [hasSearched, setHasSearched] = useState(false);
  
  const locations = Array.from(new Set(dealerLocations.map(dealer => dealer.location)));

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLocation(e.target.value);
  };

  const handleSearch = () => {
    setHasSearched(true);
    
    const results = dealerLocations.filter(dealer => {
      const matchesSearch = searchTerm.trim() === '' || 
        dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dealer.address.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchesLocation = selectedLocation === '' ||
        dealer.location === selectedLocation;
        
      return matchesSearch && matchesLocation;
    });
    
    setSearchResults(results);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedLocation('');
    setSearchResults(dealerLocations);
    setHasSearched(false);
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: theme.palette.background.paper,
        position: 'relative',
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
            sx={{ 
              textAlign: 'center', 
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1 
            }}
          >
            <StoreIcon color="primary" sx={{ fontSize: 32 }} />
            Find a Dealer Near You
          </Typography>
          
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ textAlign: 'center', mb: 5, maxWidth: '800px', mx: 'auto' }}
          >
            With {companyInfo.dealerNetwork.count} dealerships across India, we're never too far away.
            Enter your location or browse by city to find your nearest Indo Wagen dealership.
          </Typography>
          
          <Card
            elevation={3}
            sx={{
              mb: 5,
              borderRadius: 2,
              p: { xs: 2, md: 3 },
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  placeholder="Search by name or address"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  select
                  label="Select City"
                  value={selectedLocation}
                  onChange={handleLocationChange}
                  variant="outlined"
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSearch}
                    fullWidth
                  >
                    Find Dealers
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Card>

          {hasSearched && searchResults.length === 0 && (
            <Alert severity="info" sx={{ mb: 4 }}>
              No dealers found matching your search criteria. Please try a different search or browse all dealers.
            </Alert>
          )}

          <Grid container spacing={3}>
            {searchResults.map((dealer, index) => (
              <Grid item xs={12} md={6} key={dealer.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box>
                          <Typography variant="h6" gutterBottom>
                            {dealer.name}
                          </Typography>
                          <Chip 
                            label={dealer.type} 
                            size="small" 
                            color={dealer.type.includes('Sales & Service') ? 'primary' : 'secondary'} 
                            variant="outlined"
                          />
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography variant="body2" color="text.secondary">
                            Rating
                          </Typography>
                          <Typography variant="h6" color="primary">
                            {dealer.rating} / 5
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Divider sx={{ my: 2 }} />
                      
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 2 }}>
                        <LocationOnIcon color="action" sx={{ mt: 0.5 }} />
                        <Typography variant="body2" color="text.secondary">
                          {dealer.address}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <PhoneIcon color="action" />
                        <Typography variant="body2">{dealer.phone}</Typography>
                      </Box>
                      
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        <strong>Email:</strong> {dealer.email}
                      </Typography>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          <strong>Available Services:</strong>
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {dealer.services.map(service => (
                            <Chip key={service} label={service} size="small" />
                          ))}
                        </Box>
                      </Box>
                    </CardContent>
                    
                    <Box sx={{ display: 'flex', p: 2, pt: 0 }}>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{ mr: 1 }}
                        href={`tel:${dealer.phone}`}
                        startIcon={<PhoneIcon />}
                      >
                        Call
                      </Button>
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<DirectionsIcon />}
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dealer.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Directions
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h6" gutterBottom>
              Interested in becoming a dealer?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Join our growing network of Indo Wagen dealers across India
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              href="#contact-form"
              sx={{ px: 3 }}
            >
              Apply for Dealership
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default DealerLocator;
