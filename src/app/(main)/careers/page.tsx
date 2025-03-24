'use client';

import React from 'react';
import { Box } from '@mui/material';
import CareersHero from '@/components/Careers/CareersHero';
import CompanyIntro from '@/components/Careers/CompanyIntro';
import WhyJoinUs from '@/components/Careers/WhyJoinUs';
import UniqueFeatures from '@/components/Careers/UniqueFeatures';
import Benefits from '@/components/Careers/Benefits';
import OpenPositions from '@/components/Careers/OpenPositions';
import JoinTeam from '@/components/Careers/JoinTeam';

export default function CareersPage() {
  return (
    <Box>
      <CareersHero />
      {/* <CompanyIntro /> */}
      <WhyJoinUs />
      <UniqueFeatures />
      <Benefits />
      <OpenPositions />
      <JoinTeam />
    </Box>
  );
}
