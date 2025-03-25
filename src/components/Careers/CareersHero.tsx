'use client';

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CareersHero = () => {
    const theme = useTheme();

    const scrollToOpenPositions = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const element = document.getElementById('open-positions');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.2 },
        },
    };

    return (
      <Box
        sx={{
          position: "relative",
          bgcolor: "background.paper",
          background: `linear-gradient(135deg, ${theme.palette.primary.light}10, ${theme.palette.background.paper})`, // Subtle gradient
          overflow: "hidden",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4} alignItems="center">
              {/* Text and CTA */}
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Box sx={{ pr: { md: 4 } }}>
                    <Typography
                      component="h1"
                      variant="h2"
                      sx={{
                        mb: 2,
                        fontWeight: 700,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: -8,
                          left: 0,
                          width: "60px",
                          height: "4px",
                          bgcolor: "primary.main",
                        },
                      }}
                    >
                      Join Our Team
                    </Typography>
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      sx={{ mb: 3, fontWeight: 400 }}
                    >
                      Be part of the electric vehicle revolution
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      sx={{
                        mb: 4,
                        fontSize: { xs: "1rem", md: "1.125rem" },
                        lineHeight: 1.8,
                        "& strong": {
                          color: "primary.main",
                          fontWeight: 600,
                        },
                      }}
                    >
                      At <strong>Indo Wagen</strong>, we are more than just a
                      workplace; we are a driving force behind the future of
                      green mobility. Since our inception in 2013, we have been
                      pioneers in revolutionizing the electric vehicle industry
                      with cutting-edge technology and a commitment to
                      sustainability. By joining us, you become part of a
                      dynamic team that values innovation, collaboration, and
                      positive societal impact.
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={scrollToOpenPositions}
                      sx={{
                        borderRadius: 2,
                        px: 4,
                        py: 1.5,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        "&:hover": {
                          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                        },
                      }}
                      component={motion.button}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Open Positions
                    </Button>
                  </Box>
                </motion.div>
              </Grid>

              {/* Image */}
              <Grid item xs={12} md={6}>
                <motion.div variants={imageVariants}>
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: "300px", md: "500px" },
                      width: "100%",
                      borderRadius: "20px",
                      overflow: "hidden",
                      transform: "rotate(2deg)", // Slight tilt for visual interest
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                      border: `2px solid ${theme.palette.primary.light}`,
                    }}
                  >
                    <Image
                      src="/images/careers.jpg"
                      alt="Join Our Team at Indo Wagen"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      priority
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.05)", // Lighter overlay
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    );
};

export default CareersHero;