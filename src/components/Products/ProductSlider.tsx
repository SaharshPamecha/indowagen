"use client"; // Mark this as a Client Component

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

interface ProductSliderProps {
  images: any[]; // Array of image objects (e.g., [{ image_url: "url1" }, { image_url: "url2" }])
  modelName: string; // For alt text on images
}

const ProductSlider: React.FC<ProductSliderProps> = ({ images, modelName }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      {images && images.length > 0 ? (
        <>
          {/* Main Slider */}
          <Swiper
            modules={[Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
            loop
            style={{ 
              width: '100%',
              aspectRatio: '1/0.6',
              backgroundColor: '#fff',
              borderRadius: '8px',
              marginBottom: '0.25rem'
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Box 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.5rem'
                  }}
                >
                  <img
                    src={`https://forestgreen-capybara-315761.hostingersite.com/assets/products/${image.img_link}`}
                    alt={`${modelName} ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <IconButton 
            className="custom-prev"
            sx={{
              position: 'absolute',
              left: '5px',
              top: '45%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'rgba(255,255,255,0.8)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
              padding: '4px',
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: '1.2rem' }} />
          </IconButton>
          <IconButton 
            className="custom-next"
            sx={{
              position: 'absolute',
              right: '5px',
              top: '45%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'rgba(255,255,255,0.8)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
              padding: '4px',
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: '1.2rem' }} />
          </IconButton>

          {/* Thumbnail Slider */}
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[FreeMode, Navigation, Thumbs]}
            spaceBetween={4}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            style={{ 
              height: '60px',
              marginTop: '0.25rem'
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Box 
                  sx={{ 
                    height: '100%',
                    border: '1px solid #eee',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    '&:hover': {
                      border: '1px solid #purple',
                    }
                  }}
                >
                  <img
                    src={`https://forestgreen-capybara-315761.hostingersite.com/assets/products/${image.img_link}`}
                    alt={`${modelName} thumbnail ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, fontStyle: 'italic' }}
        >
          Image Not Available
        </Typography>
      )}
    </Box>
  );
};

export default ProductSlider; // Ensure default export