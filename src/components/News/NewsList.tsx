'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Divider,
  Pagination,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { newsItems } from '@/data/news';
import Link from 'next/link';

const NewsList = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  // Exclude featured news from the regular list
  const regularNews = newsItems.filter(item => !item.featured);
  
  // Calculate pagination
  const totalPages = Math.ceil(regularNews.length / itemsPerPage);
  const currentItems = regularNews.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    // Scroll to top of the list when changing pages
    window.scrollTo({
      top: document.getElementById('news-list')?.offsetTop || 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }} id="news-list">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ mb: 1, fontWeight: 600 }}
          >
            Latest News
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ mb: 5, maxWidth: 700 }}
          >
            Browse our collection of announcements, product launches, and company updates
          </Typography>

          <Grid container spacing={4}>
            {currentItems.map((item) => (
              <Grid item xs={12} md={6} lg={4} key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * parseInt(item.id) % 3 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                      borderRadius: 2,
                      overflow: 'hidden',
                    }}
                    elevation={1}
                  >
                    <Link href={`/news/${item.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '100%' }}>
                        <Box sx={{ position: 'relative', height: 200, width: '100%' }}>
                          <CardMedia
                            component="img"
                            height="200"
                            image={item.coverImage}
                            alt={item.title}
                            sx={{ objectFit: 'cover' }}
                          />
                          <Chip 
                            label={item.category} 
                            size="small" 
                            sx={{ 
                              position: 'absolute', 
                              top: 16, 
                              left: 16,
                              bgcolor: 'primary.main',
                              color: 'white',
                              fontWeight: 500,
                            }} 
                          />
                        </Box>
                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                          <Typography 
                            gutterBottom 
                            variant="h6" 
                            component="h3"
                            sx={{ fontWeight: 600, mb: 1 }}
                          >
                            {item.title}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ 
                              mb: 2,
                              display: '-webkit-box',
                              overflow: 'hidden',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 3,
                            }}
                          >
                            {item.excerpt}
                          </Typography>
                          
                          <Divider sx={{ my: 2 }} />
                          
                          <Stack 
                            direction="row" 
                            spacing={1} 
                            alignItems="center"
                            sx={{ mt: 'auto' }}
                          >
                            <CalendarTodayIcon fontSize="small" sx={{ color: 'text.disabled' }} />
                            <Typography variant="caption" color="text.disabled">
                              {item.publishDate}
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <AccessTimeIcon fontSize="small" sx={{ color: 'text.disabled' }} />
                            <Typography variant="caption" color="text.disabled">
                              {item.readTime} min
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
                size="large"
                sx={{
                  '& .MuiPaginationItem-root': {
                    fontWeight: 500,
                  }
                }}
              />
            </Box>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default NewsList;
