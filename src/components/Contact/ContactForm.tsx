'use client';

import React, { useState } from 'react';
import { companyInfo } from '@/data/company';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Paper,
  Snackbar,
  Alert,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Divider,
  InputAdornment,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';

const enquiryTypes = [
  'Sales Enquiry',
  'Service Support',
  'Spare Parts',
  'Dealership Enquiry',
  'Test Drive Request',
  'Warranty Claim',
  'Corporate Partnership',
  'Media Inquiry',
  'Feedback',
  'Other',
];

const preferredContactMethod = [
  'Email',
  'Phone',
  'WhatsApp',
  'Any',
];

const vehicleModels = [
  'IndoWagen E1',
  'IndoWagen E2 Pro',
  'IndoWagen LoadX',
  'IndoWagen CityGlide',
  'IndoWagen MetroKing',
  'Not Sure / Other',
];

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
    preferredContact: 'Email',
    interestedModel: '',
    hearAboutUs: '',
    urgent: false,
    previousCustomer: '',
    contactTime: '',
    agreeToTerms: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.agreeToTerms) {
      setSnackbar({
        open: true,
        message: 'Please agree to the terms and conditions before submitting.',
        severity: 'error',
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      // In a real implementation, you would send this to the company email: {companyInfo.contact.email}
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSnackbar({
        open: true,
        message: 'Thank you for your message. We will get back to you soon!',
        severity: 'success',
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        enquiryType: '',
        message: '',
        preferredContact: 'Email',
        interestedModel: '',
        hearAboutUs: '',
        urgent: false,
        previousCustomer: '',
        contactTime: '',
        agreeToTerms: false,
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'There was an error sending your message. Please try again.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box
      id="contact-form"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 2,
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <MessageIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
              >
                Send us a Message
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Fill out the form below, and our team will get back to you within 24 hours. We're available Monday to Saturday, {companyInfo.businessHours.weekdays}.
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Personal Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    helperText="We'll never share your email with anyone else"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Preferred Contact Method</FormLabel>
                    <RadioGroup
                      row
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                    >
                      {preferredContactMethod.map(method => (
                        <FormControlLabel 
                          key={method} 
                          value={method} 
                          control={<Radio />} 
                          label={method} 
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              
              <Divider sx={{ my: 4 }} />
              
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Enquiry Details
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    select
                    label="Enquiry Type"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                  >
                    {enquiryTypes.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Interested Vehicle Model"
                    name="interestedModel"
                    value={formData.interestedModel}
                    onChange={handleChange}
                  >
                    <MenuItem value="">Select a model (optional)</MenuItem>
                    {vehicleModels.map(model => (
                      <MenuItem key={model} value={model}>
                        {model}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="How did you hear about us?"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    helperText="Optional"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Are you an existing customer?</FormLabel>
                    <RadioGroup
                      row
                      name="previousCustomer"
                      value={formData.previousCustomer}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    helperText="Please provide as much detail as possible"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                          <MessageIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Best time to contact you"
                    name="contactTime"
                    value={formData.contactTime}
                    onChange={handleChange}
                    helperText="e.g., Weekdays after 5pm"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="urgent"
                        checked={formData.urgent}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          urgent: e.target.checked
                        }))}
                      />
                    }
                    label="This is an urgent inquiry"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          agreeToTerms: e.target.checked
                        }))}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        I agree to the <a href="/terms" style={{ color: theme.palette.primary.main }}>Terms & Conditions</a> and <a href="/privacy" style={{ color: theme.palette.primary.main }}>Privacy Policy</a>
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={isSubmitting}
                    startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                    sx={{ py: 1.5 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </motion.div>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ContactForm;
