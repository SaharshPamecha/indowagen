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
import { companyInfo } from '@/data/company';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
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
                Driving the Future
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                    display: "block",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      width: "100%",
                      height: 4,
                      bgcolor: "primary.main",
                      opacity: 0.3,
                    },
                  }}
                >
                  Driving Green
                </Box>
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: "600px" }}
              >
                Since {companyInfo.foundedYear}, Indo Wagen has been at the
                forefront of India’s electric mobility revolution. As a premier
                brand under Zeniak Innovation India Limited, we have established
                ourselves as a trusted name in electric rickshaw manufacturing.
                Our commitment to innovation and sustainability fuels our
                mission to provide eco-friendly, affordable, and efficient
                transportation solutions across India.
              </Typography>

              <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                <Box>
                  <Typography
                    variant="h3"
                    color="primary"
                    sx={{ fontWeight: 700 }}
                  >
                    8 Lac+
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Vehicles Delivered
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    color="primary"
                    sx={{ fontWeight: 700 }}
                  >
                    09
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    States Covered
                  </Typography>
                </Box>
                {/* <Box>
                  <Typography
                    variant="h3"
                    color="primary"
                    sx={{ fontWeight: 700 }}
                  >
                    100+
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Service Centers
                  </Typography>
                </Box> */}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "300px", md: "500px" },
                  //width: "100%",
                }}
              >
                <Image
                  src="/products/Easy-Lite-4.webp"
                  alt="Indo Wagen Factory"
                  fill
                  style={{ objectFit: "contain", borderRadius: "16px" }}
                  sizes="(max-width: 768px), 50vw"
                  priority
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutHero;
