'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import Co2Icon from '@mui/icons-material/Co2';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import ForestIcon from '@mui/icons-material/Forest';
import AirIcon from '@mui/icons-material/Air';

interface CountUpProps {
  end: number;
  duration?: number;
  separator?: string;
  suffix?: string;
}

// Replace dynamic CountUp with simple implementation for now
const CountUp = ({ end, duration, separator, suffix }: CountUpProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = end / 40; // Divide animation into steps
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [end]);
  
  // Format with separator
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator || ',');
  
  return <span>{formattedCount}{suffix}</span>;
};

const EnvironmentalImpact = () => {
  const theme = useTheme();

  const impactData = [
    {
      title: 'CO₂ Emissions Reduced',
      value: 125000,
      suffix: 'tons',
      description: 'Reduction in carbon emissions through our electric vehicles',
      icon: <Co2Icon fontSize="large" />,
      color: '#4CAF50',
      progress: 85,
    },
    {
      title: 'Fuel Saved',
      value: 50,
      suffix: 'million liters',
      description: 'Amount of fossil fuels saved by switching to electric vehicles',
      icon: <LocalGasStationIcon fontSize="large" />,
      color: '#2196F3',
      progress: 78,
    },
    {
      title: 'Trees Equivalent',
      value: 500000,
      suffix: '',
      description: 'Equivalent number of trees planted through emissions reduction',
      icon: <ForestIcon fontSize="large" />,
      color: '#FF9800',
      progress: 92,
    },
    {
      title: 'Air Quality Improvement',
      value: 35,
      suffix: '%',
      description: 'Estimated improvement in local air quality where our vehicles operate',
      icon: <AirIcon fontSize="large" />,
      color: '#9C27B0',
      progress: 65,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.paper",
        background: `linear-gradient(to bottom, ${theme.palette.primary.dark}15, ${theme.palette.background.paper})`,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Environmental Impact
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: "800px", mx: "auto" }}
            >
              Our commitment to sustainability and positive environmental change
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {impactData.map((item, index) => (
              <Grid
                item
                sx={{ display: "flex", alignItems: "stretch" }}
                sm={6}
                md={3}
                key={index}
              >
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 3,
                      boxShadow: 3,
                      height: "100%",
                      transition:
                        "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 70,
                            height: 70,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: `${item.color}15`,
                            color: item.color,
                            mb: 2,
                          }}
                        >
                          {item.icon}
                        </Box>
                      </Box>

                      <Typography
                        variant="h4"
                        align="center"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: item.color }}
                      >
                        <CountUp
                          end={item.value}
                          duration={2.5}
                          separator=","
                          suffix={item.suffix ? ` ${item.suffix}` : ""}
                        />
                      </Typography>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        align="center"
                        sx={{ mb: 3, fontWeight: "medium" }}
                      >
                        {item.title}
                      </Typography>

                      <Stack spacing={1}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="caption" color="text.secondary">
                            Goal Progress
                          </Typography>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            fontWeight="bold"
                          >
                            {item.progress}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={item.progress}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            bgcolor: `${item.color}20`,
                            "& .MuiLinearProgress-bar": {
                              bgcolor: item.color,
                            },
                          }}
                        />
                      </Stack>

                      <Typography
                        variant="body2"
                        align="center"
                        sx={{ mt: 3, fontSize: "0.875rem" }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 10,
              p: 4,
              borderRadius: 3,
              bgcolor: "background.paper",
              boxShadow: theme.shadows[3],
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Our Environmental Commitment
            </Typography>
            <Typography variant="body1" paragraph>
              At Indo Wagen, sustainability isn't just a buzzword—it's at the
              core of our business. Our electric vehicles are designed not only
              to provide efficient transportation but also to minimize
              environmental impact through reduced emissions, noise pollution,
              and dependency on fossil fuels.
            </Typography>
            <Typography variant="body1" paragraph>
              Through our comprehensive approach to sustainability, we're
              working to create a cleaner, greener future for urban
              transportation in India. Every electric vehicle we put on the road
              is a step toward improving air quality and reducing the carbon
              footprint of transportation.
            </Typography>
            <Typography variant="body1">
              We're constantly investing in research and development to further
              enhance the environmental benefits of our products, including
              improved battery recycling programs, solar-powered charging
              infrastructure, and more energy-efficient manufacturing processes.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default EnvironmentalImpact;
