'use client';

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const OurProducts = () => {
    const theme = useTheme();

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <Box
            sx={{
                py: { xs: 4, md: 6 }, // Increased padding for breathing room
                background: `linear-gradient(135deg, ${theme.palette.primary.light}15, ${theme.palette.background.default})`, // Subtle gradient
                overflow: 'hidden', // Ensure animations don’t bleed out
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
                            mt: 2,
                            p: { xs: 2, md: 4 }, // Responsive padding
                            borderRadius: 3,
                            bgcolor: 'background.paper',
                            boxShadow: theme.shadows[4], // Slightly stronger shadow
                            border: '1px solid',
                            borderColor: 'divider',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Hover animation
                            '&:hover': {
                                transform: 'translateY(-4px)', // Lift effect on hover
                                boxShadow: theme.shadows[6],
                            },
                        }}
                    >
                        <Typography
                            variant="h4" // Slightly larger heading
                            gutterBottom
                            fontWeight="bold"
                            color="primary.main" // Use theme primary color
                            sx={{ textAlign: { xs: 'center', md: 'left' } }} // Center on mobile
                        >
                            Our Products
                        </Typography>
                       
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{ color: 'text.primary', lineHeight: 1.8 }} // Improved readability
                        >
                            Indo Wagen offers a wide range of electric three-wheelers, from passenger e-rickshaws to cargo loaders,
                            designed to deliver high performance, durability, and cost-effectiveness. Our state-of-the-art ICAT-approved
                            vehicles are built for efficiency, offering low maintenance and high mileage, making them an ideal choice for
                            urban and rural transport.
                        </Typography>
                        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mt: 3 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ borderRadius: 2, px: 4 }}
                                component={motion.button} // Add button animation
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore Our Range
                            </Button>
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default OurProducts;