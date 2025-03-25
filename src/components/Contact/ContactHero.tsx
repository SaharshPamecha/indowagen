'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: "Visit Us",
      details: [
        "Merlin Infinite, 10th floor",
        "Room No- 1010, Plot No- 5",
        "DN51, Sector V, Saltlake, Kolkata-700 091",
      ],
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: "Call Us",
      details: ["1800 120 345345"],
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: "Email Us",
      details: ["Info@zeniak.com"],
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: { xs: 6, md: 12 },
        pb: { xs: 8, md: 16 },
        position: "relative",
        overflow: "hidden",
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
              component="h1"
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                lineHeight: 1.2,
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: "800px", mx: "auto" }}
            >
              We're here to help you with any questions about our electric
              vehicles and services
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: 3,
                    borderRadius: 2,
                    transition: "box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: 6,
                    },
                    backgroundColor: "background.paper",
                  }}
                >
                  <Box
                    sx={{
                      color: "primary.main",
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 700, color: "text.primary" }}
                  >
                    {info.title}
                  </Typography>
                  {info.details.map((detail, i) => (
                    <Typography
                      key={i}
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 1, lineHeight: 1.6 }}
                    >
                      {detail}
                    </Typography>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactHero;
