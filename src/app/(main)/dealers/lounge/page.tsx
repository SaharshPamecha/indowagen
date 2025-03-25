'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BusinessIcon from '@mui/icons-material/Business';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TestimonialsSection from '@/components/Dealers/TestimonialsSection';

export default function DealersLoungePage() {
  const theme = useTheme();

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "I have a long standing relationship with Indo Wagen and am proud to say that we have 90% market share in our area of operation. Indo Wagen stands for Quality, Trust, Durability, Innovation and strong Performance on road.",
      author: "Karim Khan",
      position: "Owner (M/S Tamralipta Enterprise)",
      image: "/images/testimonials/dealer1.jpg"
    },
    {
      quote: "Ears to the ground has made Indo Wagen standout in the market. Strong relationship, better tie-ups and focused distribution has made us Nol in the market.",
      author: "Asraful Sk",
      position: "Owner (Mim Enterprise)",
      image: "/images/testimonials/dealer2.jpg"
    },
    {
      quote: "Proud to be part of Indo Wagen family. It's like my own brand for whatever market feedbacks are given, the same gets implemented and improved in the shortest possible time. Thank you Indo Wagen for reposing the trust on us.",
      author: "Mehboob Alam",
      position: "Owner (M/S Rounaq Auto)",
      image: "/images/testimonials/dealer3.jpg"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const slideIn = {
    hidden: { opacity: 0, x: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: 0.2 * custom,
        duration: 0.5
      }
    })
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <Box component="main">
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "80vh",
          minHeight: "550px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)",
              zIndex: 1,
            },
          }}
        >
          <Image
            src="/images/dealers/dealer-network-bg.jpg"
            alt="Indowagen Dealer Network"
            fill
            style={{
              objectFit: "cover",
              opacity: 0.8,
            }}
            priority
          />
        </Box>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    color: "white",
                    fontWeight: 800,
                    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    mb: 2,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -10,
                      left: 0,
                      width: "80px",
                      height: "4px",
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "2px",
                    },
                  }}
                >
                  Join the Indowagen Dealer Network
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    maxWidth: "600px",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                    mb: 4,
                    fontWeight: 400,
                    lineHeight: 1.4,
                  }}
                >
                  Drive the Future of E-Mobility and be part of India's
                  fastest-growing EV revolution.
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    component={Link}
                    href="/contact?dealer=apply"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontWeight: "bold",
                      borderRadius: 2,
                      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    Apply Now
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    component={Link}
                    href="/dealers/locator"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontWeight: "bold",
                      borderRadius: 2,
                      borderColor: "white",
                      color: "white",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "white",
                        backgroundColor: "rgba(255,255,255,0.2)",
                      },
                    }}
                  >
                    Find Dealers
                  </Button>
                </Box>

                {/* Stats */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: { xs: 2, md: 4 },
                    mt: 2,
                  }}
                >
                  <Box
                    sx={{
                      backdropFilter: "blur(10px)",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      p: 2,
                      borderRadius: 2,
                      width: { xs: "calc(50% - 8px)", sm: "auto" },
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      color="primary.main"
                    >
                      200+
                    </Typography>
                    <Typography variant="body2" color="white">
                      Active Dealers
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backdropFilter: "blur(10px)",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      p: 2,
                      borderRadius: 2,
                      width: { xs: "calc(50% - 8px)", sm: "auto" },
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      color="primary.main"
                    >
                      40%
                    </Typography>
                    <Typography variant="body2" color="white">
                      Annual Growth
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backdropFilter: "blur(10px)",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      p: 2,
                      borderRadius: 2,
                      width: { xs: "calc(50% - 8px)", sm: "auto" },
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      color="primary.main"
                    >
                      ₹10L+
                    </Typography>
                    <Typography variant="body2" color="white">
                      Monthly Income
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            <Grid
              item
              xs={12}
              md={5}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: "440px",
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: 4,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    transform: "perspective(1000px) rotateY(-10deg)",
                  }}
                >
                  <Image
                    src="/images/model-comparison.jpg"
                    alt="Indowagen Dealership"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* Removed scroll indicator as requested */}
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h4" gutterBottom fontWeight={600}>
                Join Indowagen's dealer network
              </Typography>
              <Typography paragraph>
                and be part of India's fast-growing electric vehicle industry.
                With proven credentionals, we offer a profitable and high-demand
                business opportunity in the EV sector.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                fontWeight={600}
                sx={{ mt: 4 }}
              >
                Why Become an Indowagen Dealer?
              </Typography>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography component="span" fontWeight={600}>
                        Trusted Brand
                      </Typography>
                    }
                    secondary="Leading electric rickshaw manufacturer since 2013, backed by Zeniak Innovation"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography component="span" fontWeight={600}>
                        Expanding Market
                      </Typography>
                    }
                    secondary="India's EV industry is growing rapidly, expected to reach 40% market share by 2030"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography component="span" fontWeight={600}>
                        High Profit Potential
                      </Typography>
                    }
                    secondary="Strong demand, attractive margins, and dealership benefits"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography component="span" fontWeight={600}>
                        Advanced & Reliable Vehicles
                      </Typography>
                    }
                    secondary="ICAT-certified e-rickshaws built for performance, durability, and efficiency"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography component="span" fontWeight={600}>
                        Dealer Support
                      </Typography>
                    }
                    secondary="Training, showroom branding, spare parts supply, and after-sales assistance"
                  />
                </ListItem>
              </List>

              <Typography
                variant="h5"
                gutterBottom
                fontWeight={600}
                sx={{ mt: 4 }}
              >
                Who Can Apply?
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Business owners & entrepreneurs" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Auto-sector professionals (experience preferred, not mandatory)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Investors looking for a high-growth opportunity" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Those committed to excellent customer service" />
                </ListItem>
              </List>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  backgroundColor: theme.palette.background.paper,
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  fontWeight={600}
                  textAlign="center"
                >
                  How to Get Started?
                </Typography>

                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                        }}
                      >
                        1
                      </Box>
                    </ListItemIcon>
                    <ListItemText primary="Fill out the dealership form on our website" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                        }}
                      >
                        2
                      </Box>
                    </ListItemIcon>
                    <ListItemText primary="Our team will contact you for further discussion" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                        }}
                      >
                        3
                      </Box>
                    </ListItemIcon>
                    <ListItemText primary="Complete onboarding & training" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                        }}
                      >
                        4
                      </Box>
                    </ListItemIcon>
                    <ListItemText primary="Launch your dealership" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                        }}
                      >
                        5
                      </Box>
                    </ListItemIcon>
                    <ListItemText primary="Start selling and Build a Profitable EV Business!" />
                  </ListItem>
                </List>

                <Box sx={{ textAlign: "center", mt: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    component={Link}
                    href="/contact"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontWeight: "bold",
                      borderRadius: 2,
                    }}
                  >
                    Apply Now
                  </Button>
                </Box>
              </Paper>

              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  mt: 4,
                  backgroundColor: theme.palette.background.paper,
                }}
              >
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Get in Touch:
                </Typography>
                <Typography paragraph>
                  Have questions or ready to become a dealer?
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <strong>Call us:</strong>&nbsp;1800 123 345 345
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <strong>Email:</strong>&nbsp;
                  <Link
                    href="mailto:info@zeniak.com"
                    style={{ color: theme.palette.primary.main }}
                  >
                    info@zeniak.com
                  </Link>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <strong>Visit:</strong>&nbsp;
                  <Link
                    href="https://www.indowagen.com/dealers"
                    style={{ color: theme.palette.primary.main }}
                  >
                    www.indowagen.com/dealers
                  </Link>
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Dealer Benefits Section */}
      <Box sx={{ backgroundColor: theme.palette.grey[100], py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h4"
              gutterBottom
              fontWeight={600}
              align="center"
              sx={{ mb: 5 }}
            >
              Benefits of Being an Indowagen Dealer
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 3,
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <BusinessIcon
                    sx={{ fontSize: 56, color: "primary.main", mb: 2 }}
                  />
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Brand Association
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Partner with a trusted name in the EV industry with
                    established reputation and market presence.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 3,
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <MonetizationOnIcon
                    sx={{ fontSize: 56, color: "primary.main", mb: 2 }}
                  />
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Financial Returns
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Attractive margins, incentive programs, and high demand lead
                    to excellent ROI and business growth.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 3,
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <EngineeringIcon
                    sx={{ fontSize: 56, color: "primary.main", mb: 2 }}
                  />
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Technical Support
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Comprehensive technical training, service manuals, and
                    dedicated engineering support.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 3,
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <SupportAgentIcon
                    sx={{ fontSize: 56, color: "primary.main", mb: 2 }}
                  />
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Marketing Support
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Branding materials, promotional campaigns, digital assets,
                    and showroom design assistance.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
