'use client';

import React, { useState } from 'react';
import DistributorSearch from './DistributorSearch';
import DistributorsMap from './DistributorsMap';
import BecomeDistributor from './BecomeDistributor';
import { Box } from '@mui/material';

const DistributorsSection: React.FC = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleSearch = (state: string, city: string) => {
    setSelectedState(state);
    setSelectedCity(city);
  };

  return (
    <Box component="main">
      <DistributorSearch onSearch={handleSearch} />
      <DistributorsMap selectedState={selectedState} selectedCity={selectedCity} />
      <BecomeDistributor />
    </Box>
  );
};

export default DistributorsSection;
