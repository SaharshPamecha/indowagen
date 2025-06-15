"use client"; // Mark this as a Client Component

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductSliderProps {
  images: any[]; // Array of image objects (e.g., [{ image_url: "url1" }, { image_url: "url2" }])
  modelName: string; // For alt text on images
}

const ProductSlider: React.FC<ProductSliderProps> = ({ images, modelName }) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      {images && images.length > 0 ? (
        <>
          {/* Main Slider */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
            pagination={{ 
              clickable: true,
              el: '.custom-pagination'
            }}
            loop
            style={{ 
              width: '100%',
              aspectRatio: '1/0.9',
              backgroundColor: '#fff',
              borderRadius: '8px',
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

          {/* Custom Pagination */}
          <Box 
            className="custom-pagination"
            sx={{ 
              position: 'absolute',
              bottom: '10px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              zIndex: 2,
              '& .swiper-pagination-bullet': {
                width: '8px',
                height: '8px',
                margin: '0 4px',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&-active': {
                  backgroundColor: '#000',
                }
              }
            }}
          />
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