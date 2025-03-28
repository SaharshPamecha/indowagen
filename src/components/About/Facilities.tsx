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
import FactoryIcon from '@mui/icons-material/Factory';
import ScienceIcon from '@mui/icons-material/Science';
import BusinessIcon from '@mui/icons-material/Business';
import { companyInfo } from '@/data/company';
import { Description } from '@mui/icons-material';

const Facilities = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const facilities = [
    {
      id: 'manufacturing',
      name: 'Manufacturing Facility',
      //location: 'Noida, UP',
      location: 'West Bengal',
      description : `Zeniak Innovation India Limited (INDOWAGEN), Bagpara, (Near Ideal Public School), 
Village: Kashyabpur, PO - Mahishrekha, Tulsiberia, Block - Uluberia II, Howrah - 711303, 
West Bengal`,
      //description: 'Our state-of-the-art manufacturing unit spreads across 50,000 sq ft and produces up to 1,000 vehicles per month. Equipped with modern assembly lines and quality control systems.',
      features: [
        'Assembly Line Production',
        'Quality Control Lab',
        'Battery Testing Facility',
        'Warehouse & Logistics Hub'
      ],
      image: '/facilities/manufacturing.jpg',
      icon: <FactoryIcon fontSize="large" />,
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
       // 'Performance Testing Track'
      ],
      image: '/facilities/rd.jpg',
      icon: <ScienceIcon fontSize="large" />,
    },
    {
      id: 'headquarters',
      name: 'Corporate Headquarters',
      location: 'Noida, UP',
      description: 'Our corporate headquarters houses our administrative, marketing, sales, and customer support teams.',
      features: [
        'Executive Offices',
        'Marketing & Sales Department',
        'Customer Support Center',
        'Training Facilities'
      ],
      image: '/facilities/training.jpg',
      icon: <BusinessIcon fontSize="large" />,
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
              },
            }}
          >
            {facilities.map((facility, index) => (
              <Tab 
                key={facility.id}
                label={facility.name} 
                icon={facility.icon} 
                iconPosition="start"
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
                    component="div"
                    sx={{
                      height: 300,
                      bgcolor: 'grey.200',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    {facilities[activeTab].icon && (
                      <Box sx={{ fontSize: 80, color: 'grey.400' }}>
                        {facilities[activeTab].icon}
                      </Box>
                    )}
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        position: 'absolute', 
                        bottom: 10, 
                        right: 10, 
                        color: 'grey.500',
                        fontSize: '0.75rem'
                      }}
                    >
                      Facility image placeholder
                    </Typography>
                  </CardMedia>
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

                  {/* <motion.div variants={itemVariants} style={{ marginTop: 24 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ 
                        borderRadius: 2,
                        px: 4, 
                        fontWeight: 600,
                        textTransform: 'none'
                      }}
                    >
                      Schedule a Visit
                    </Button>
                  </motion.div> */}
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
