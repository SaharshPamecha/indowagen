// DistributorsMap.tsx
'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Box, Container, Typography, Paper, Grid, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import RefreshIcon from '@mui/icons-material/Refresh';

const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <Box sx={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
      <Typography>Loading map...</Typography>
    </Box>
  ),
});

interface RawDealer {
  id: number;
  name: string;
  address: string;
  state: string;
  city: string;
  phone: string;
  latitude: number | null;
  longitude: number | null;
}

interface Distributor {
  id: number;
  name: string;
  address: string;
  state: string;
  city: string;
  phone: string;
  email: string;
  coordinates: [number, number] | null;
}

interface DistributorsMapProps {
  selectedState?: string;
  selectedCity?: string;
  onReset?: () => void; // Add reset callback prop
}

const DistributorsMap: React.FC<DistributorsMapProps> = ({ selectedState, selectedCity, onReset }) => {
  const [distributors, setDistributors] = useState<Distributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDealer, setSelectedDealer] = useState<Distributor | null>(null);

  useEffect(() => {
    const fetchDistributors = async () => {
      try {
        const response = await fetch('/api/dealers');
        if (!response.ok) throw new Error('Failed to fetch dealers');
        const rawData: RawDealer[] = await response.json();

        const allDistributors = rawData.map((dealer) => ({
          id: dealer.id,
          name: dealer.name,
          address: dealer.address,
          state: dealer.state,
          city: dealer.city,
          phone: dealer.phone,
          email: 'N/A',
          coordinates: dealer.latitude !== null && dealer.longitude !== null 
            ? [dealer.latitude, dealer.longitude] as [number, number] 
            : null,
        }));

        setDistributors(allDistributors);
      } catch (error) {
        console.error('Error fetching distributors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDistributors();
  }, []);

  const listDistributors = selectedDealer
    ? [selectedDealer]
    : selectedState
    ? distributors.filter((distributor) =>
        selectedCity
          ? distributor.state === selectedState && distributor.city.toLowerCase() === selectedCity.toLowerCase()
          : distributor.state === selectedState
      )
    : [];

  const mapDistributors = selectedState
    ? distributors.filter((distributor) =>
        selectedCity
          ? distributor.state === selectedState && distributor.city.toLowerCase() === selectedCity.toLowerCase()
          : distributor.state === selectedState
      )
    : distributors;

  const validMapDistributors = mapDistributors.filter((d) => d.coordinates !== null);

  if (loading) {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography>Loading distributors...</Typography>
      </Box>
    );
  }

  const handleMarkerClick = (dealerId: number) => {
    const dealer = distributors.find((d) => d.id === dealerId) || null;
    setSelectedDealer(dealer);
  };

  const handleResetClick = () => {
    setSelectedDealer(null); // Clear selected dealer
    if (onReset) onReset(); // Clear search filters
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" component="h2">
            Our Distributors
          </Typography>
          {(selectedState || selectedDealer) && (
            <Button
              variant="outlined"
              startIcon={<RefreshIcon />}
              onClick={handleResetClick}
            >
              Reset
            </Button>
          )}
        </Box>

        <Grid container spacing={3}>
          {listDistributors.length > 0 && (
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                {listDistributors.map((distributor) => (
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
                        <Typography>{distributor.phone}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <EmailIcon sx={{ mr: 1 }} color="primary" />
                        <Typography>{distributor.email}</Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
                {listDistributors.length === 0 && (
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
          )}

          <Grid item xs={12} md={listDistributors.length > 0 ? 6 : 12}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <LeafletMap
                locations={validMapDistributors.map((d) => ({
                  id: d.id,
                  name: d.name,
                  coordinates: d.coordinates!, // Non-null since filtered
                  address: `${d.address}, ${d.city}, ${d.state}`,
                  phone: d.phone,
                }))}
                center={
                  validMapDistributors.length > 0
                    ? validMapDistributors[0].coordinates!
                    : [26.8467, 80.9462] // Default center (Lucknow, UP)
                }
                zoom={validMapDistributors.length === 1 ? 12 : 6}
                onMarkerClick={handleMarkerClick}
                selectedDealerId={selectedDealer?.id}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DistributorsMap;