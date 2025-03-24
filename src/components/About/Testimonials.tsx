'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Avatar,
  Rating,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// You'll need to add the Slick CSS files somewhere in your app
// Either in your main layout.tsx or in a CSS import:
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

interface TestimonialProps {
  id: number;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  content: string;
  rating: number;
  location: string;
}

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: TestimonialProps[] = [
    {
      id: 1,
      name: 'Ravi Kumar',
      role: 'Fleet Owner',
      company: 'City Express Services',
      avatar: '/testimonials/person1.jpg',
      content:
        "Indo Wagen's electric rickshaws have transformed my business. The operational costs are significantly lower than traditional auto-rickshaws, and the vehicles are incredibly reliable. My drivers are happier too because of the smooth driving experience.",
      rating: 5,
      location: 'Delhi',
    },
    {
      id: 2,
      name: 'Sunita Patel',
      role: 'Auto Entrepreneur',
      avatar: '/testimonials/person2.jpg',
      content:
        "As a woman entrepreneur in the auto sector, I appreciate how Indo Wagen has designed vehicles that are easy to operate and maintain. The customer service is exceptional, and the training provided helped me get started smoothly.",
      rating: 5,
      location: 'Mumbai',
    },
    {
      id: 3,
      name: 'Ashok Singh',
      role: 'Transport Coordinator',
      company: 'Green Metro Solutions',
      avatar: '/testimonials/person3.jpg',
      content:
        "We've added ten Indo Wagen vehicles to our fleet last year, and they've proven to be a wise investment. The battery performance is excellent even in hot summers, and the customer support team is always ready to assist.",
      rating: 4,
      location: 'Bangalore',
    },
    {
      id: 4,
      name: 'Priya Nair',
      role: 'Small Business Owner',
      company: 'Eco Tours',
      avatar: '/testimonials/person4.jpg',
      content:
        "My tourism business has benefited greatly from using Indo Wagen's electric vehicles. Tourists love the eco-friendly aspect, and the vehicles are perfect for navigating through narrow streets in our heritage city.",
      rating: 5,
      location: 'Jaipur',
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
  };

  const slider = React.useRef<Slider | null>(null);

  const goToPrevious = () => {
    if (slider.current) {
      slider.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (slider.current) {
      slider.current.slickNext();
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: theme.palette.grey[50],
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Customer Testimonials
          </Typography>

          <Typography
            variant="h6"
            component="p"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
          >
            Don't just take our word for it - hear what our customers have to say about their
            experience with our electric vehicles.
          </Typography>

          <Box
            sx={{
              position: 'relative',
              '& .slick-track': {
                display: 'flex',
                gap: 3,
                px: 1,
              },
            }}
          >
            <Slider ref={slider} {...sliderSettings}>
              {testimonials.map((testimonial) => (
                <Box key={testimonial.id} sx={{ p: 1 }}>
                  <Card
                    elevation={2}
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                      }}
                    >
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 56, height: 56, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.2 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.location}
                        </Typography>
                        <Rating
                          value={testimonial.rating}
                          readOnly
                          size="small"
                          sx={{ mt: 0.5 }}
                        />
                      </Box>
                    </Box>

                    <Box sx={{ position: 'relative', flexGrow: 1 }}>
                      <FormatQuoteIcon
                        sx={{
                          position: 'absolute',
                          top: -5,
                          left: -8,
                          opacity: 0.1,
                          fontSize: 40,
                          color: 'primary.main',
                          transform: 'rotate(180deg)',
                        }}
                      />
                      <Typography variant="body1" paragraph sx={{ zIndex: 1, position: 'relative' }}>
                        {testimonial.content}
                      </Typography>
                    </Box>
                  </Card>
                </Box>
              ))}
            </Slider>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                mt: 4,
              }}
            >
              <IconButton
                onClick={goToPrevious}
                aria-label="Previous testimonial"
                sx={{
                  bgcolor: 'background.paper',
                  boxShadow: 1,
                  '&:hover': { bgcolor: 'primary.main', color: 'white' },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                onClick={goToNext}
                aria-label="Next testimonial"
                sx={{
                  bgcolor: 'background.paper',
                  boxShadow: 1,
                  '&:hover': { bgcolor: 'primary.main', color: 'white' },
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Testimonials;
