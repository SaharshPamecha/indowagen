'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { motion } from 'framer-motion';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import FactoryIcon from '@mui/icons-material/Factory';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import { companyInfo } from '@/data/company';

const CompanyHistory = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const timelineEvents = [
    {
      year: '2018',
      title: 'Company Founded',
      description: `${companyInfo.name} was founded with a vision to revolutionize electric mobility in India.`,
      icon: <BusinessIcon />,
    },
    {
      year: '2019',
      title: 'First Manufacturing Unit',
      description: 'Established our first manufacturing facility in Noida, UP with a capacity of 500 units per month.',
      icon: <FactoryIcon />,
    },
    {
      year: '2020',
      title: 'Launch of First EV Model',
      description: 'Successfully launched our first electric rickshaw model which gained immediate market acceptance.',
      icon: <ElectricCarIcon />,
    },
    {
      year: '2021',
      title: 'Manufacturing Expansion',
      description: 'Expanded our manufacturing capacity with a new state-of-the-art facility in Noida, increasing production by 300%.',
      icon: <EmojiEventsIcon />,
    },
    {
      year: '2022',
      title: 'Export Markets',
      description: 'Began exporting to neighboring countries, marking our first step toward becoming a global electric vehicle brand.',
      icon: <EmojiEventsIcon />,
    },
    {
      year: '2023',
      title: 'Expanded Dealer Network',
      description: 'Expanded our dealer network to over 150 locations across India.',
      icon: <GroupsIcon />,
    },
    {
      year: '2023',
      title: companyInfo.achievements[0].title,
      description: companyInfo.achievements[0].description,
      icon: <EmojiEventsIcon />,
    },
  ];

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
              Our Journey
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '800px', mx: 'auto' }}
            >
              The story of how we're transforming the future of transportation in India
            </Typography>
          </Box>
        </motion.div>

        <Timeline position={isMobile ? "right" : "alternate"} sx={{ p: 0 }}>
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index}>
              {!isMobile && (
                <TimelineOppositeContent color="text.secondary">
                  <Typography variant="h6" component="span" fontWeight="bold">
                    {event.year}
                  </Typography>
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                <TimelineDot color="primary" sx={{ p: 1 }}>
                  {event.icon}
                </TimelineDot>
                {index < timelineEvents.length - 1 && (
                  <TimelineConnector sx={{ bgcolor: 'primary.light' }} />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      mb: 3,
                      borderLeft: '4px solid',
                      borderColor: 'primary.main',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    {isMobile && (
                      <Typography variant="subtitle1" color="primary" fontWeight="bold">
                        {event.year}
                      </Typography>
                    )}
                    <Typography variant="h6" component="h3" fontWeight="bold">
                      {event.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {event.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default CompanyHistory;
