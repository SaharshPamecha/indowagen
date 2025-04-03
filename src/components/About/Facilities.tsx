'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Button,
  useTheme,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PlaceIcon from '@mui/icons-material/Place';

const Facilities = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const facilities = [
    {
      id: 'manufacturing',
      name: 'Manufacturing Facility',
      location: 'West Bengal',
      description: `Zeniak Innovation India Limited (INDOWAGEN), Bagpara, (Near Ideal Public School), 
Village: Kashyabpur, PO - Mahishrekha, Tulsiberia, Block - Uluberia II, Howrah - 711303, 
West Bengal`,
      features: [
        'Assembly Line Production',
        'Quality Control Lab',
        'Battery Testing Facility',
        'Warehouse & Logistics Hub'
      ],
      image: '/Corporate headquaters image.webp',
      tabImage: '/manufacturing-tab-image.webp',
      googleMapsLink: 'https://maps.google.com/?q=Zeniak+Innovation+India+Limited,+Bagpara,+Kashyabpur,+Mahishrekha,+Tulsiberia,+Uluberia+II,+Howrah+711303,+West+Bengal'
    },
    {
      id: 'c&f',
      name: 'C&F Center',
      location: 'Patna (Bihar), Guwahati (Assam), Lucknow (Uttar Pradesh)',
      description: 'Our C&F center is the innovation hub where we develop new technologies and improve existing products. Focus on battery efficiency, motor performance, and vehicle design.',
      features: [
        'Battery Technology Research',
        'Motor Efficiency Optimization',
        'Vehicle Design Studio',
      ],
      image: '/C&F image.webp',
      tabImage: '/cnf-tab-image.webp',
      // No googleMapsLink needed since we're not showing the button
    },
    {
      id: 'headquarters',
      name: 'Corporate Headquarters',
      location: 'West Bengal',
      description: 'Merlin Infinite, 10th floor, Room No- 1010, Plot No- 5, DN51, Sector V, Saltlake, Kolkata, West Bengal, 700091, India',
      features: [
        'Executive Offices',
        'Marketing & Sales Department',
        'Customer Support Center',
        'Training Facilities'
      ],
      image: '/Corporate headquaters image.webp',
      tabImage: '/headquarters-tab-image.webp',
      googleMapsLink: 'https://maps.google.com/?q=Merlin+Infinite,+DN51,+Sector+V,+Saltlake,+Kolkata,+West+Bengal,+700091,+India'
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Our Facilities
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '800px', mx: 'auto' }}
            >
              Discover the state-of-the-art facilities powering our innovation and production
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ width: '100%', mb: 5 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: 'primary.main',
                height: 3,
              },
              '& .MuiTab-root': {
                minWidth: 120,
                fontWeight: 600,
                padding: 1,
              },
            }}
          >
            {facilities.map((facility) => (
              <Tab
                key={facility.id}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {facility.name}
                  </Box>
                }
              />
            ))}
          </Tabs>
        </Box>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Grid container spacing={5} alignItems="center">
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: theme.shadows[5],
                  }}
                >
                  <CardMedia
                    component="img"
                    image={facilities[activeTab].image}
                    alt={facilities[activeTab].name}
                    sx={{
                      height: 300,
                      objectFit: 'cover',
                    }}
                  />
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                  <motion.div variants={itemVariants}>
                    <Typography variant="h4" component="h3" gutterBottom fontWeight="bold">
                      {facilities[activeTab].name}
                    </Typography>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <PlaceIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="subtitle1" color="text.secondary">
                        {facilities[activeTab].location}
                      </Typography>
                    </Box>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Typography variant="body1" paragraph>
                      {facilities[activeTab].description}
                    </Typography>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Typography variant="h6" gutterBottom fontWeight="medium" sx={{ mt: 3 }}>
                      Key Features:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {facilities[activeTab].features.map((feature, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          custom={index}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: index * 0.1 }}
                        >
                          <Typography variant="body1" paragraph>
                            {feature}
                          </Typography>
                        </motion.li>
                      ))}
                    </Box>
                  </motion.div>

                  {/* Conditionally render the Get Directions button only for facilities with googleMapsLink */}
                  {facilities[activeTab].googleMapsLink && (
                    <motion.div variants={itemVariants} sx={{ mt: 3 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        href={facilities[activeTab].googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          borderRadius: 2,
                          px: 4, 
                          fontWeight: 600,
                          textTransform: 'none'
                        }}
                      >
                        Get Directions
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Facilities;