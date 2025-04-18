'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const states = [
  'Assam', 'Bihar', 'Chhattisgarh',
   'Jharkhand', 
   'Madhya Pradesh',
   'Odisha', 
   'Tripura', 'Uttar Pradesh', 'West Bengal'
];


interface DistributorSearchProps {
  onSearch: (state: string, city: string) => void;
}

const DistributorSearch: React.FC<DistributorSearchProps> = ({ onSearch }) => {
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');

  const handleSearch = () => {
    onSearch(state, city);
  };

  return (
    <Box sx={{ py: 4, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg"> 
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Find a Dealer Near You
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          Locate your nearest INDO WAGEN dealer by selecting your state and city
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>State</InputLabel>
              <Select
                value={state}
                label="State"
                onChange={(e) => setState(e.target.value)}
              >
                {states.map(state => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleSearch}
              startIcon={<SearchIcon />}
              sx={{ height: '56px' }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DistributorSearch;
