'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  useTheme,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { motion } from 'framer-motion';

// Pricing plan data
const pricingPlans = [
  {
    title: 'Basic',
    price: '₹1,10,000',
    description: 'Perfect for small businesses or individual operators',
    features: [
      { name: 'E-Rickshaw base model', included: true },
      { name: '1-year warranty', included: true },
      { name: 'Basic service package', included: true },
      { name: 'Standard battery', included: true },
      { name: 'Extended range battery', included: false },
      { name: 'Premium interior finishes', included: false },
      { name: 'GPS tracking system', included: false },
      { name: 'Priority service', included: false },
    ],
    buttonText: 'Select Plan',
    highlighted: false,
  },
  {
    title: 'Standard',
    price: '₹1,45,000',
    description: 'Our most popular plan for fleet operators',
    features: [
      { name: 'E-Rickshaw standard model', included: true },
      { name: '2-year warranty', included: true },
      { name: 'Enhanced service package', included: true },
      { name: 'Extended range battery', included: true },
      { name: 'Premium interior finishes', included: true },
      { name: 'GPS tracking system', included: false },
      { name: 'Priority service', included: false },
      { name: 'Custom branding options', included: false },
    ],
    buttonText: 'Select Plan',
    highlighted: true,
  },
  {
    title: 'Premium',
    price: '₹1,85,000',
    description: 'For businesses requiring premium features and service',
    features: [
      { name: 'E-Rickshaw premium model', included: true },
      { name: '3-year warranty', included: true },
      { name: 'Comprehensive service package', included: true },
      { name: 'Extended range battery', included: true },
      { name: 'Premium interior finishes', included: true },
      { name: 'GPS tracking system', included: true },
      { name: 'Priority service', included: true },
      { name: 'Custom branding options', included: true },
    ],
    buttonText: 'Select Plan',
    highlighted: false,
  },
];

export default function PricingPage() {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Transparent Pricing Plans
            </Typography>
            <Typography variant="h5" color="textSecondary" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
              Choose the plan that fits your business needs and budget
            </Typography>
          </motion.div>
        </Box>

        {/* Pricing Plans */}
        <Grid container spacing={4} justifyContent="center">
          {pricingPlans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={plan.highlighted ? 8 : 2}
                  sx={{
                    height: '100%',
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    transform: plan.highlighted ? 'scale(1.05)' : 'scale(1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
                    },
                    border: plan.highlighted ? `2px solid ${theme.palette.primary.main}` : 'none',
                  }}
                >
                  {plan.highlighted && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 15,
                        right: 0,
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15,
                        fontSize: '0.875rem',
                        fontWeight: 'bold',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        zIndex: 1,
                      }}
                    >
                      Most Popular
                    </Box>
                  )}
                  <CardHeader
                    title={plan.title}
                    titleTypographyProps={{
                      align: 'center',
                      variant: 'h4',
                      fontWeight: 'bold',
                      color: plan.highlighted ? 'primary.main' : 'inherit',
                    }}
                    sx={{
                      backgroundColor: plan.highlighted ? 'rgba(25, 118, 210, 0.08)' : 'grey.50',
                      py: 3,
                    }}
                  />
                  <CardContent sx={{ px: 3, pt: 4, pb: 8 }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Typography variant="h3" color="text.primary" sx={{ fontWeight: 'bold' }}>
                        {plan.price}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                        {plan.description}
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <List sx={{ py: 2 }}>
                      {plan.features.map((feature, idx) => (
                        <ListItem key={idx} sx={{ py: 1 }}>
                          <ListItemIcon>
                            {feature.included ? (
                              <CheckCircleIcon color="success" />
                            ) : (
                              <CancelIcon color="disabled" />
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={feature.name}
                            sx={{
                              '& .MuiListItemText-primary': {
                                color: feature.included ? 'text.primary' : 'text.disabled',
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: 'background.paper',
                      borderTop: `1px solid ${theme.palette.divider}`,
                      position: 'absolute',
                      bottom: 0,
                      width: '100%',
                      textAlign: 'center',
                    }}
                  >
                    <Button
                      fullWidth
                      variant={plan.highlighted ? 'contained' : 'outlined'}
                      color="primary"
                      size="large"
                      sx={{
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 'bold',
                        boxShadow: plan.highlighted ? 4 : 0,
                      }}
                    >
                      {plan.buttonText}
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Additional Information */}
        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Need a Custom Solution?
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
              We offer flexible pricing for large fleet operators and customized solutions to meet your specific requirements.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 4, py: 1.5, borderRadius: 2, fontWeight: 'bold' }}
            >
              Contact Sales Team
            </Button>
          </motion.div>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ mt: 12 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Do you offer financing options?
              </Typography>
              <Typography variant="body1" paragraph>
                Yes, we offer flexible financing options with competitive interest rates. Our partnerships with leading 
                financial institutions allow us to provide tailored solutions based on your business requirements.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                What does the warranty cover?
              </Typography>
              <Typography variant="body1" paragraph>
                Our warranties cover manufacturing defects, motor issues, controller problems, and battery 
                performance. Detailed warranty information is provided with each purchase and can be found on our warranty page.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Are spare parts included in the price?
              </Typography>
              <Typography variant="body1" paragraph>
                Basic spare parts are included in our service packages. Additional or specialized parts can be purchased 
                separately through our service centers nationwide.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Do you offer bulk discounts?
              </Typography>
              <Typography variant="body1" paragraph>
                Yes, we offer special pricing for bulk orders. The discount percentage increases based on the order quantity. 
                Please contact our sales team for custom quotes on bulk purchases.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
