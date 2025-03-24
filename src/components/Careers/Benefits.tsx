'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LaptopIcon from '@mui/icons-material/Laptop';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <BusinessCenterIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Career Growth',
    description: 'We believe in nurturing talent and providing opportunities to grow within the organization.'
  },
  {
    icon: <LaptopIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Technology-Driven Environment',
    description: 'Work with advanced manufacturing techniques and SAP-based business operations.'
  },
  {
    icon: <WorkIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Impactful Work',
    description: 'Contribute to the green revolution by being part of a company that is making transportation more sustainable.'
  },
  {
    icon: <GroupIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Employee-Centric Culture',
    description: 'A work environment that encourages learning, innovation, and professional development.'
  }
];

export default function Benefits() {
  return (
    <Box component="section" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography
          component="h2"
          variant="h3"
          align="center"
          sx={{ mb: 6 }}
        >
          Why Work With Us
        </Typography>
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 2,
                    minHeight: { xs: 'auto', sm: '340px' }
                  }}
                >
                  <Box sx={{ mb: 2, mt: 2 }}>
                    {benefit.icon}
                  </Box>
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    p: 2,
                    "&:last-child": { pb: 3 }
                  }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        minHeight: '64px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
