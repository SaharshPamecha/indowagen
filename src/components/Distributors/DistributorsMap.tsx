'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

// Dynamically import LeafletMap to avoid SSR issues
const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <Box sx={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
      <Typography>Loading map...</Typography>
    </Box>
  )
});

interface Distributor {
  id: number;
  name: string;
  address: string;
  state: string;
  city: string;
  phone: string;
  email: string;
  coordinates: [number, number];
}

const distributors: Distributor[] = [
  // Eastern India Distributors
  {
    id: 1,
    name: "Bengal Electric Mobility",
    address: "15/A Park Street, Kolkata",
    state: "West Bengal",
    city: "Kolkata",
    phone: "+91 9876543201",
    email: "contact@bengalevs.com",
    coordinates: [22.5726, 88.3639]
  },
  {
    id: 2,
    name: "Assam Auto Solutions",
    address: "GS Road, Christian Basti",
    state: "Assam",
    city: "Guwahati",
    phone: "+91 9876543202",
    email: "info@assamauto.com",
    coordinates: [26.1445, 91.7362]
  },
  {
    id: 3,
    name: "Bihar EV Tech",
    address: "Boring Road, Patna",
    state: "Bihar",
    city: "Patna",
    phone: "+91 9876543203",
    email: "sales@biharev.com",
    coordinates: [25.5941, 85.1376]
  },
  {
    id: 4,
    name: "Jharkhand Motors",
    address: "Main Road, Ranchi",
    state: "Jharkhand",
    city: "Ranchi",
    phone: "+91 9876543204",
    email: "info@jharkhandmotors.com",
    coordinates: [23.3441, 85.3096]
  },
  {
    id: 5,
    name: "Siliguri EV Hub",
    address: "Hill Cart Road",
    state: "West Bengal",
    city: "Siliguri",
    phone: "+91 9876543205",
    email: "contact@siliguriehub.com",
    coordinates: [26.7271, 88.3953]
  }
];

interface DistributorsMapProps {
  selectedState?: string;
  selectedCity?: string;
}

const DistributorsMap: React.FC<DistributorsMapProps> = ({ selectedState, selectedCity }) => {
  const filteredDistributors = distributors.filter(distributor => {
    if (selectedState && selectedCity) {
      return distributor.state === selectedState && distributor.city.toLowerCase() === selectedCity.toLowerCase();
    }
    if (selectedState) {
      return distributor.state === selectedState;
    }
    return true;
  });

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Our Distributors
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {filteredDistributors.map(distributor => (
                <Grid item xs={12} key={distributor.id}>
                  <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      {distributor.name}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                      <LocationOnIcon sx={{ mr: 1, mt: 0.5 }} color="primary" />
                      <Typography>
                        {distributor.address}
                        <br />
                        {distributor.city}, {distributor.state}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <PhoneIcon sx={{ mr: 1 }} color="primary" />
                      <Typography>
                        {distributor.phone}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <EmailIcon sx={{ mr: 1 }} color="primary" />
                      <Typography>
                        {distributor.email}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
              {filteredDistributors.length === 0 && (
                <Grid item xs={12}>
                  <Paper sx={{ p: 3, textAlign: 'center' }}>
                    <Typography>
                      No distributors found in the selected location. Please try a different search or{' '}
                      <a href="#become-distributor" style={{ color: 'inherit', textDecoration: 'underline' }}>
                        become a distributor
                      </a>
                      .
                    </Typography>
                  </Paper>
                </Grid>
              )}
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <LeafletMap
                locations={filteredDistributors.map(d => ({
                  id: d.id,
                  name: d.name,
                  coordinates: d.coordinates,
                  address: `${d.address}, ${d.city}, ${d.state}`,
                  phone: d.phone
                }))}
                center={filteredDistributors.length > 0 ? filteredDistributors[0].coordinates : [23.5937, 87.2972]}
                zoom={filteredDistributors.length === 1 ? 12 : 6}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DistributorsMap;
