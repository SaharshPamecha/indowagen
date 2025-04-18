'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
  Stack,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import DOMPurify from 'dompurify';

// Define the interface for a job position
interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  education: string;
  responsibilities: string[];
  description: string;
  salary: string;
  application_email: string;
}

const OpenPositions = () => {
  const theme = useTheme();
  const [openPositions, setOpenPositions] = useState<JobPosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/job_listings');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const transformedData = data.map((job: any) => ({
          title: DOMPurify.sanitize(job.job_heading || ''),
          department: 'Unknown', // Derive or add to DB
          location: DOMPurify.sanitize(job.location || ''),
          type: 'Full-time', // Default, adjust if in DB
          experience: 'N/A', // Derive from requirements or add to DB
          education: 'N/A', // Derive from requirements or add to DB
          responsibilities: (job.requirements || '')
            .split('\n')
            .filter((line: string) => line.trim())
            .map((line: string) => DOMPurify.sanitize(line)),
          description: DOMPurify.sanitize(job.description || ''),
          salary: DOMPurify.sanitize(job.salary || 'N/A'),
          application_email: DOMPurify.sanitize(job.application_email || 'hr@zeniak.com'),
        }));
        setOpenPositions(transformedData);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Failed to load job listings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <Typography align="center">Loading...</Typography>;
  }

  if (error) {
    return <Typography align="center" color="error">{error}</Typography>;
  }

  if (!openPositions.length) {
    return <Typography align="center">No open positions available.</Typography>;
  }

  return (
    <Box
      id="open-positions"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: 'background.default',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{
              mb: 6,
              fontWeight: 600,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 4,
                bgcolor: 'primary.main',
                borderRadius: 2,
              },
            }}
          >
            Open Positions
          </Typography>

          <Grid container spacing={4}>
            {openPositions.map((position, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  component={motion.div}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: theme.shadows[8],
                  }}
                  transition={{ duration: 0.2 }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      bgcolor: 'primary.main',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          mb: 2,
                          fontSize: '1.25rem', // Normal heading size
                        }}
                      >
                        {position.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          mb: 2,
                          fontSize: '1rem', // Normal font size for description
                        }}
                      >
                        {position.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        <Chip
                          icon={<WorkIcon sx={{ fontSize: 16 }} />}
                          label={position.salary} // Salary in blue chip
                          color="primary"
                          size="small"
                          sx={{
                            borderRadius: 1,
                            '& .MuiChip-label': { px: 1 },
                          }}
                        />
                        <Chip
                          icon={<LocationOnIcon sx={{ fontSize: 16 }} />}
                          label={position.location}
                          size="small"
                          sx={{
                            borderRadius: 1,
                            bgcolor: 'background.paper',
                            '& .MuiChip-label': { px: 1 },
                          }}
                        />
                        <Chip
                          icon={<SchoolIcon sx={{ fontSize: 16 }} />}
                          label={position.experience}
                          size="small"
                          sx={{
                            borderRadius: 1,
                            bgcolor: 'background.paper',
                            '& .MuiChip-label': { px: 1 },
                          }}
                        />
                      </Stack>
                    </Box>

                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 600,
                        mb: 1,
                        fontSize: '0.875rem', // Normal subtitle size
                      }}
                    >
                      Key Responsibilities:
                    </Typography>
                    <Box
                      component="ul"
                      sx={{
                        mt: 0.5,
                        mb: 2.5,
                        pl: 2,
                        '& li': {
                          mb: 0.5,
                          color: 'text.secondary',
                          fontSize: '1rem', // Normal body text size
                        },
                        '& li::marker': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {position.responsibilities.map((resp, idx) => (
                        <Typography
                          component="li"
                          key={idx}
                          variant="body2"
                          sx={{ fontSize: '1rem' }}
                        >
                          {resp}
                        </Typography>
                      ))}
                    </Box>

                    <Box sx={{ mt: 'auto' }}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        href={`mailto:${position.application_email}?subject=Application for ${position.title}`}
                        sx={{
                          py: 1,
                          textTransform: 'none',
                          fontWeight: 600,
                          borderRadius: 1,
                          boxShadow: 'none',
                          '&:hover': {
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                          },
                        }}
                      >
                        Apply Now
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default OpenPositions;