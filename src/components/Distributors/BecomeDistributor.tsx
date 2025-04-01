'use client';

import React, { useState } from 'react';
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
  Snackbar,
  Alert,
  CircularProgress,
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    state: '',
    city: '',
    experience: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    state: '',
    city: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const [loading, setLoading] = useState(false); // New state for loading

  const validateForm = () => {
    const newErrors = {
      name: formData.name ? '' : 'Full Name is required',
      email: formData.email ? '' : 'Email is required',
      phone: formData.phone ? '' : 'Phone is required',
      company: formData.company ? '' : 'Company Name is required',
      state: formData.state ? '' : 'State is required',
      city: formData.city ? '' : 'City is required',
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for the field being edited
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true); // Show loader

    try {
      const response = await fetch('/api/distributor-applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Application submitted successfully!',
          severity: 'success',
        });
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
      } else {
        setSnackbar({
          open: true,
          message: result.error || 'Failed to submit application',
          severity: 'error',
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'An error occurred while submitting the application',
        severity: 'error',
      });
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
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
                      error={!!errors.name}
                      helperText={errors.name}
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
                      error={!!errors.email}
                      helperText={errors.email}
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
                      error={!!errors.phone}
                      helperText={errors.phone}
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
                      error={!!errors.company}
                      helperText={errors.company}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required error={!!errors.state}>
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
                      {errors.state && <Typography color="error" variant="caption">{errors.state}</Typography>}
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
                      error={!!errors.city}
                      helperText={errors.city}
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
                      disabled={loading} // Disable button while loading
                      startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null} // Show loader
                    >
                      {loading ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BecomeDistributor;