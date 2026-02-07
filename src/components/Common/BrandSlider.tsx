'use client';

import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import Slider from 'react-slick';
import Image from 'next/image';

const brands = [
    { name: 'Brand 1', logo: '/brands/1.png' },
    { name: 'Brand 2', logo: '/brands/2.png' },
    { name: 'Brand 3', logo: '/brands/3.png' },
    { name: 'Brand 4', logo: '/brands/4.png' },
    { name: 'Brand 5', logo: '/brands/5.png' },
    { name: 'Brand 6', logo: '/brands/6.png' },
    { name: 'Brand 7', logo: '/brands/7.png' },
    { name: 'Brand 8', logo: '/brands/8.png' },
    { name: 'Brand 9', logo: '/brands/9.png' },
    { name: 'Brand 10', logo: '/brands/10.png' },
];

const BrandSlider = () => {
    const theme = useTheme();

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <Box sx={{ py: 6, bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h6"
                    align="center"
                    sx={{ mb: 4, fontWeight: 600, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1.5, fontSize: '0.875rem' }}
                >
                    Our Finance Partners
                </Typography>
                <Box sx={{
                    '& .slick-track': { display: 'flex', alignItems: 'center' },
                    '& .slick-slide': { px: 2 }
                }}>
                    <Slider {...settings}>
                        {brands.map((brand, index) => (
                            <Box key={index} sx={{
                                display: 'flex !important',
                                justifyContent: 'center',
                                alignItems: 'center',
                                filter: 'grayscale(100%) brightness(1.2)',
                                opacity: 0.7,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    filter: 'grayscale(0%) brightness(1)',
                                    opacity: 1,
                                    transform: 'scale(1.1)'
                                }
                            }}>
                                <Box sx={{ position: 'relative', width: 180, height: 90 }}>
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
};

export default BrandSlider;
