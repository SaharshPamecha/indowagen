'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { motion } from 'framer-motion';

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

const BecomeDistributor = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    state: '',
    city: '',
    experience: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      state: '',
      city: '',
      experience: '',
      message: ''
    });
  };

  return (
    <Box component="section" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            Become a Distributor
          </Typography>
          <Typography variant="h5" component="h2" align="center" color="text.secondary" paragraph>
            Join our network of successful distributors and grow with us
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ 
                p: 4, 
                height: '100%', 
                bgcolor: 'primary.main', 
                color: 'primary.contrastText',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '150px',
                    height: '150px',
                    background: 'linear-gradient(45deg, transparent 49%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1))',
                    transform: 'rotate(0deg)'
                  }}
                />

                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', position: 'relative' }}>
                  Why Partner with Us?
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, position: 'relative' }}>
                  Join the electric revolution with India's fastest-growing EV company
                </Typography>
              
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ mr: 1, fontSize: '1.5rem' }}>🌟</Box>
                        Exclusive Territory
                      </Typography>
                      <Typography sx={{ opacity: 0.9 }}>
                        Secure exclusive rights to sell in your territory
                      </Typography>
                    </Box>
                  </Grid>
                
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ mr: 1, fontSize: '1.5rem' }}>📈</Box>
                        High Margins
                      </Typography>
                      <Typography sx={{ opacity: 0.9 }}>
                        Enjoy competitive margins and incentives
                      </Typography>
                    </Box>
                  </Grid>
                
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ mr: 1, fontSize: '1.5rem' }}>🎯</Box>
                        Marketing Support
                      </Typography>
                      <Typography sx={{ opacity: 0.9 }}>
                        Access professional marketing and lead generation
                      </Typography>
                    </Box>
                  </Grid>
                
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ mr: 1, fontSize: '1.5rem' }}>🔧</Box>
                        Technical Training
                      </Typography>
                      <Typography sx={{ opacity: 0.9 }}>
                        Comprehensive product and service training
                      </Typography>
                    </Box>
                  </Grid>
                
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ mr: 1, fontSize: '1.5rem' }}>💡</Box>
                        Business Growth
                      </Typography>
                      <Typography sx={{ opacity: 0.9 }}>
                        Regular programs to accelerate your growth
                      </Typography>
                    </Box>
                  </Grid>
                
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ mr: 1, fontSize: '1.5rem' }}>🤝</Box>
                        Dedicated Support
                      </Typography>
                      <Typography sx={{ opacity: 0.9 }}>
                        Priority access to our support team
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper component="form" onSubmit={handleSubmit} sx={{ p: 4 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                      <InputLabel>State</InputLabel>
                      <Select
                        name="state"
                        value={formData.state}
                        label="State"
                        onChange={handleChange}
                      >
                        {states.map(state => (
                          <MenuItem key={state} value={state}>
                            {state}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Years of Experience in Automotive Industry"
                      name="experience"
                      type="number"
                      value={formData.experience}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Additional Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Submit Application
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BecomeDistributor;
