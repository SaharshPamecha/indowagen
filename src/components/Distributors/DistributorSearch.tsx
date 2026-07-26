'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface DistributorSearchProps {
  onSearch: (state: string, city: string) => void;
}

interface DealerLite {
  state: string;
  city: string;
}

const DistributorSearch: React.FC<DistributorSearchProps> = ({ onSearch }) => {
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');
  // state -> sorted unique cities, built from the live dealer list so every
  // option maps to real dealers and the downstream exact-match filter keeps
  // working. Fetching here rather than hardcoding avoids drift as new dealers
  // are added in the admin.
  const [stateCities, setStateCities] = React.useState<Record<string, string[]>>({});

  React.useEffect(() => {
    let active = true;
    const fetchDealers = async () => {
      try {
        const res = await fetch('/api/dealers');
        if (!res.ok) throw new Error('Failed to fetch dealers');
        const dealers: DealerLite[] = await res.json();

        const map: Record<string, Set<string>> = {};
        dealers.forEach((d) => {
          const s = (d.state || '').trim();
          const c = (d.city || '').trim();
          if (!s) return;
          if (!map[s]) map[s] = new Set<string>();
          if (c) map[s].add(c);
        });

        const result: Record<string, string[]> = {};
        Object.keys(map).forEach((s) => {
          result[s] = Array.from(map[s]).sort((a, b) => a.localeCompare(b));
        });

        if (active) setStateCities(result);
      } catch (error) {
        console.error('Error loading dealer locations:', error);
      }
    };
    fetchDealers();
    return () => {
      active = false;
    };
  }, []);

  const states = React.useMemo(
    () => Object.keys(stateCities).sort((a, b) => a.localeCompare(b)),
    [stateCities]
  );
  const cities = state ? stateCities[state] ?? [] : [];

  const handleStateChange = (value: string) => {
    setState(value);
    setCity(''); // reset city whenever the state changes
  };

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
                onChange={(e) => handleStateChange(e.target.value)}
              >
                {states.map((s) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth disabled={!state || cities.length === 0}>
              <InputLabel>City</InputLabel>
              <Select
                value={city}
                label="City"
                onChange={(e) => setCity(e.target.value)}
              >
                {cities.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
