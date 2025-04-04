'use client';

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    useTheme,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from "next/link";

const OurGrowingNetwork = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const states = [
    "West Bengal",
    "Assam",
    "Bihar",
    "Jharkhand",
    "Orissa",
    "Uttar Pradesh",
    "Madhya Pradesh",
    "Chhattisgarh",
  ];

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        background: `linear-gradient(135deg, ${theme.palette.primary.light}15, ${theme.palette.background.default})`, // Same gradient as OurProducts
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
          <Box
            sx={{
              p: { xs: 2, md: 4 },
              borderRadius: 3,
              bgcolor: "background.paper",
              boxShadow: theme.shadows[4],
              border: "1px solid",
              borderColor: "divider",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: theme.shadows[6],
              },
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              fontWeight="bold"
              color="primary.main" // Same color as OurProducts
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Our Growing Network
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              gutterBottom
              sx={{ mb: 3, textAlign: { xs: "center", md: "left" } }}
            >
              Expanding Across India, One State at a Time
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "text.primary", lineHeight: 1.8 }}
            >
              We started in Eastern India and have rapidly expanded our
              footprint to multiple states. Today, we are present in{" "}
              <strong>{states.join(", ")}</strong>. As the fastest-growing
              e-rickshaw brand in India, we boast a robust network of over{" "}
              <strong>350+ dealers and sub-dealers</strong>. We lead the market
              in Bengal and Assam, ranking No. 1 as per Vahan Data (July 2024
              onwards). Our manufacturing facilities are strategically located
              in West Bengal, Bihar, Assam, and Uttar Pradesh, with new
              high-tech production units in the pipeline. Tripura, Manipur, Maharashtra and we are
              expanding aggressively in North India
            </Typography>

            {/* Highlights List */}
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <List sx={{ mt: 2 }}>
                <motion.div variants={itemVariants}>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />{" "}
                      {/* Same color as OurProducts */}
                    </ListItemIcon>
                    <ListItemText primary="No. 1 in Bengal and Assam (Vahan Data, July 2024+)" />
                  </ListItem>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="350+ dealers and sub-dealers nationwide" />
                  </ListItem>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Manufacturing units in 4 states, more coming soon" />
                  </ListItem>
                </motion.div>
              </List>
            </motion.div>

            {/* Call to Action */}
            <Box sx={{ textAlign: { xs: "center", md: "left" }, mt: 3 }}>
              <Button
                variant="contained"
                color="primary" // Same color as OurProducts
                size="large"
                sx={{ borderRadius: 2, px: 4 }}
                component={Link}
                href="/distributors"
                //   whileHover={{ scale: 1.05 }}
                //   whileTap={{ scale: 0.95 }}
              >
                Join Our Network
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default OurGrowingNetwork;