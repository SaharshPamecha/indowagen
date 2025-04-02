// DistributorsSection.tsx
'use client';

import React, { useState } from 'react';
import DistributorSearch from './DistributorSearch';
import DistributorsMap from './DistributorsMap';
import BecomeDistributor from './BecomeDistributor';
import { Box } from '@mui/material';

const DistributorsSection: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | undefined>(undefined);
  const [selectedCity, setSelectedCity] = useState<string | undefined>(undefined);

  const handleSearch = (state: string, city: string) => {
    console.log('Search triggered:', { state, city });
    setSelectedState(state || undefined);
    setSelectedCity(city || undefined);
  };

  const handleReset = () => {
    console.log('Reset triggered');
    setSelectedState(undefined);
    setSelectedCity(undefined);
  };

  return (
    <Box component="main">
      <DistributorSearch onSearch={handleSearch} />
      <DistributorsMap 
        selectedState={selectedState} 
        selectedCity={selectedCity} 
        onReset={handleReset} // Pass reset callback
      />
      <BecomeDistributor />
    </Box>
  );
};

export default DistributorsSection;