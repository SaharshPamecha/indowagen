'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogs';

// Extract unique categories
const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

const BlogCategories = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ py: 4, bgcolor: theme.palette.grey[50] }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{ mb: 3, textAlign: 'center', fontWeight: 500 }}
          >
            Browse by Category
          </Typography>
          
          <Tabs 
            value={value} 
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            TabIndicatorProps={{
              style: {
                backgroundColor: theme.palette.primary.main,
              }
            }}
            sx={{ 
              mb: 2,
              '& .MuiTabs-flexContainer': {
                justifyContent: 'center',
              },
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                minWidth: 100,
                mx: 1,
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              },
              '& .Mui-selected': {
                color: theme.palette.primary.main,
                fontWeight: 600,
              }
            }}
          >
            {categories.map((category, index) => (
              <Tab key={category} label={category} />
            ))}
          </Tabs>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BlogCategories;
