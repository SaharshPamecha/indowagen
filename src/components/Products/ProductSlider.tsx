"use client"; // Mark this as a Client Component

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Box, Typography } from '@mui/material';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductSliderProps {
  images: any[]; // Array of image objects (e.g., [{ image_url: "url1" }, { image_url: "url2" }])
  modelName: string; // For alt text on images
}

const ProductSlider: React.FC<ProductSliderProps> = ({ images, modelName }) => {
  console.log("images : " , images);
  return (
    
    <>
      {images && images.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Enable navigation, pagination, and autoplay
          //navigation // Show navigation arrows
          pagination={{ clickable: true }} // Show clickable pagination dots
          autoplay={{ delay: 300000 }} // Auto-scroll every 3 seconds
          loop // Enable infinite loop
          style={{ width: '100%', height: '80%' }} // Set dimensions for the slider
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
             
              <Box sx={{ textAlign: 'center' }}>
                <img
                  src={`https://forestgreen-capybara-315761.hostingersite.com/assets/products/${image.img_link}`} // Adjust based on your database field name
                  alt={`${modelName} ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain', // Ensure the entire image is visible
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, fontStyle: 'italic' }}
        >
          Image Not Available
        </Typography>
      )}
     </> 
  );
};

export default ProductSlider; // Ensure default export