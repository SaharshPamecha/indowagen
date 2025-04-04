'use client';

import React from 'react';
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

const openPositions = [
  // {
  //   title: 'Senior Software Engineer',
  //   department: 'Engineering',
  //   location: 'Noida, UP',
  //   type: 'Full-time',
  //   experience: '5+ years',
  //   education: "Bachelor's in Computer Science or related field",
  //   responsibilities: [
  //     'Lead development of EV management software systems',
  //     'Design and implement scalable backend services',
  //     'Mentor junior developers and review code',
  //   ],
  //   skills: ['React', 'Node.js', 'Python', 'AWS'],
  // },
  {
    title: 'Electric Vehicle Technician',
    department: 'Service',
    location: 'Kolkata, West Bengal',
    type: 'Full-time',
    experience: '3+ years',
    education: 'Diploma in Electrical/Automotive Engineering',
    responsibilities: [
      'Diagnose and repair electric vehicles',
      'Perform preventive maintenance',
      'Document service procedures',
    ],
    skills: ['EV Systems', 'Diagnostics', 'Electrical Repair'],
  },
  {
    title: 'Sales Manager',
    department: 'Sales',
    location: 'Kolkata, West Bengal',
    type: 'Full-time',
    experience: '4+ years',
    education: "Bachelor's degree in Business or related field",
    responsibilities: [
      'Develop and execute sales strategies',
      'Manage dealer relationships',
      'Achieve revenue targets',
    ],
    skills: ['B2B Sales', 'Team Management', 'Market Analysis'],
  },
];

const OpenPositions = () => {
  const theme = useTheme();

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
              }
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
                    }
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
                        }}
                      >
                        {position.title}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        <Chip
                          icon={<WorkIcon sx={{ fontSize: 16 }} />}
                          label={position.department}
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
                        },
                        '& li::marker': {
                          color: 'primary.main',
                        }
                      }}
                    >
                      {position.responsibilities.map((resp, idx) => (
                        <Typography 
                          component="li" 
                          key={idx} 
                          variant="body2"
                          sx={{ fontSize: '0.875rem' }}
                        >
                          {resp}
                        </Typography>
                      ))}
                    </Box>

                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        color: 'text.secondary',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      Required Skills:
                    </Typography>
                    <Stack 
                      direction="row" 
                      spacing={0.5} 
                      sx={{ 
                        mb: 3, 
                        flexWrap: 'wrap', 
                        gap: 0.5 
                      }}
                    >
                      {position.skills.map((skill, idx) => (
                        <Chip 
                          key={idx} 
                          label={skill} 
                          size="small"
                          sx={{
                            borderRadius: 1,
                            bgcolor: theme.palette.primary.main + '10',
                            color: 'primary.main',
                            fontWeight: 500,
                            '& .MuiChip-label': { px: 1 },
                          }}
                        />
                      ))}
                    </Stack>

                    <Box sx={{ mt: 'auto' }}>
                      <Button 
                        variant="contained" 
                        color="primary"
                        fullWidth
                        href="mailto:hr@zeniak.com?subject=Application for Position"
                        sx={{
                          py: 1,
                          textTransform: 'none',
                          fontWeight: 600,
                          borderRadius: 1,
                          boxShadow: 'none',
                          '&:hover': {
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                          }
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