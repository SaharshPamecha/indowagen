'use client';

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import NatureIcon from '@mui/icons-material/Nature';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedIcon from '@mui/icons-material/Verified';
import Link from "next/link";

const WhyChooseUs = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 80 },
    },
  };

  const reasons = [
    {
      title: "Eco-Friendly & Cost-Effective",
      description: "Zero emissions, low operating costs.",
      icon: <NatureIcon fontSize="large" />,
      color: theme.palette.primary.main,
    },
    {
      title: "Cutting-Edge Technology",
      description: "Advanced battery-powered EVs.",
      icon: <BatteryChargingFullIcon fontSize="large" />,
      color: theme.palette.primary.main,
    },
    {
      title: "Strong Dealer & Service Network",
      description: "Reliable support across India.",
      icon: <SupportAgentIcon fontSize="large" />,
      color: theme.palette.primary.main,
    },
    {
      title: "Commitment to Quality & Compliance",
      description: "ISO 9001:2015 certified, ICAT-approved.",
      icon: <VerifiedIcon fontSize="large" />,
      color: theme.palette.primary.main,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            gutterBottom
            fontWeight="bold"
            color="primary.main"
            sx={{
              textAlign: "center",
              mb: 2,
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                width: "60px",
                height: "4px",
                bgcolor: "primary.main",
                bottom: "-8px",
                left: "50%",
                transform: "translateX(-50%)",
              },
            }}
          >
            Why Choose Indo Wagen?
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ textAlign: "center", mb: 6, maxWidth: "600px", mx: "auto" }}
          >
            Driving India’s green energy future with innovation and excellence.
          </Typography>

          {/* Grid Layout with Equal Height Cards */}
          <Grid container spacing={4} justifyContent="center">
            {reasons.map((reason, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={cardVariants}>
                  <Card
                    sx={{
                      textAlign: "center",
                      p: 3,
                      borderRadius: "16px",
                      bgcolor: "background.paper",
                      boxShadow: theme.shadows[4],
                      minHeight: "234px", // Fixed height for uniformity
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between", // Distribute content evenly
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    <Box sx={{ color: reason.color, mb: 2 }}>{reason.icon}</Box>
                    <CardContent sx={{ p: 0, flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        fontWeight="medium"
                        color={reason.color}
                        sx={{ mb: 1 }}
                      >
                        {reason.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {reason.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Additional Text and CTA */}
          <Typography
            variant="body1"
            paragraph
            sx={{
              textAlign: "center",
              mt: 6,
              color: "text.primary",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            As India moves towards a green energy future, Indo Wagen remains
            committed to leading the transformation with innovation, quality,
            and customer satisfaction.
          </Typography>
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href={"/careers"}
              key="/careers"
              sx={{ borderRadius: 2, px: 4 }}
              component={Link}
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
            >
              Join the Revolutionss
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;