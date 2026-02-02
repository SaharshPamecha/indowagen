'use client';

import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import Slider from 'react-slick';
import Image from 'next/image';

const brands = [
    { name: 'Akasa', logo: '/brands/akasa.png' },
    { name: 'AMU', logo: '/brands/amu.png' },
    { name: 'Credifin', logo: '/brands/credifin.png' },
    { name: 'EV Finserv', logo: '/brands/ev-finserv.png' },
    { name: 'Loksuvidha', logo: '/brands/loksuvidha.png' },
    { name: 'Mufin', logo: '/brands/mufin.png' },
    { name: 'Sanchenta', logo: '/brands/sanchenta.png' },
    { name: 'SF', logo: '/brands/sf.png' },
    { name: 'Shriram Green', logo: '/brands/shriram-green.png' },
    { name: 'Vediks', logo: '/brands/vediks.png' },
];

const BrandSlider = () => {
    const theme = useTheme();

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
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
