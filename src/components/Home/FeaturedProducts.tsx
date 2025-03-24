'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Container, Typography, Card, CardContent, CardMedia, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { products } from '../../data/products';

const FeaturedProducts = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const featuredProducts = products.filter(product => product.featured);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Calculate the number of visible items based on screen size
  const getScrollAmount = () => {
    if (isMobile) return 280; // One card width
    if (isTablet) return 560; // Two card widths
    return 840; // Three card widths
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = getScrollAmount();
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // 10px tolerance
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Box sx={{ py: 6, bgcolor: 'background.default', position: 'relative' }}>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h2" sx={{ flexGrow: 1 }}>
            Featured Products
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton 
              onClick={() => scroll('left')} 
              sx={{ mr: 1, visibility: showLeftArrow ? 'visible' : 'hidden' }}
              disabled={!showLeftArrow}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton 
              onClick={() => scroll('right')}
              sx={{ visibility: showRightArrow ? 'visible' : 'hidden' }}
              disabled={!showRightArrow}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Box>
        
        {/* Floating navigation arrows for better UX */}
        <Box
          sx={{ 
            display: { xs: 'block', md: 'none' },
            position: 'absolute',
            top: '50%',
            left: 16,
            transform: 'translateY(-50%)',
            zIndex: 1,
            visibility: showLeftArrow ? 'visible' : 'hidden'
          }}
        >
          <IconButton 
            onClick={() => scroll('left')} 
            sx={{ 
              bgcolor: 'background.paper', 
              boxShadow: 2,
              '&:hover': { bgcolor: 'background.paper' }
            }}
            size="small"
            disabled={!showLeftArrow}
          >
            <ChevronLeft />
          </IconButton>
        </Box>
        
        <Box
          sx={{ 
            display: { xs: 'block', md: 'none' },
            position: 'absolute',
            top: '50%',
            right: 16,
            transform: 'translateY(-50%)',
            zIndex: 1,
            visibility: showRightArrow ? 'visible' : 'hidden'
          }}
        >
          <IconButton 
            onClick={() => scroll('right')} 
            sx={{ 
              bgcolor: 'background.paper', 
              boxShadow: 2,
              '&:hover': { bgcolor: 'background.paper' }
            }}
            size="small"
            disabled={!showRightArrow}
          >
            <ChevronRight />
          </IconButton>
        </Box>

        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            gap: 3,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            pb: 2,
            // Add snap scrolling for better mobile experience
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch', // Better iOS scrolling
            px: { xs: 0, md: 0 } // Add padding on mobile to show partial cards
          }}
          onScroll={handleScroll}
        >
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              sx={{
                minWidth: 280,
                maxWidth: 280,
                flex: '0 0 auto',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                scrollSnapAlign: 'start',
                border: '1px solid transparent',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                  borderColor: (theme) => theme.palette.primary.light
                }
              }}
            >
              <Link href={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardMedia
                  component="div"
                  sx={{
                    position: 'relative',
                    height: 200,
                    backgroundColor: '#f5f5f5'
                  }}
                >
                  {/* Use first image from images array if available, otherwise fall back to single image */}
                  {(product.images && product.images.length > 0) ? (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      unoptimized={true}
                    />
                  ) : product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      unoptimized={true}
                    />
                  ) : (
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: '#f0f0f0'
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Image not available
                      </Typography>
                    </Box>
                  )}
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" gutterBottom noWrap>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {product.tagline}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {product.price}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
