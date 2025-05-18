// components/Blog/BlogCategories.tsx
'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  useTheme,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import useSWR from 'swr';
import { fetchGraphPosts, PostEdge } from '@/app/libs/graphapi';
import he from 'he';

// Utility function to strip HTML tags and decode HTML entities
const stripHtmlTags = (html: string): string => {
  return he.decode(
    html
      .replace(/<\/?[^>]+(>|$)/g, '')
      .replace(/\[…\]/g, '...')
      .replace(/\n/g, ' ')
      .trim()
  );
};

// Props type for BlogCategories
type BlogCategoriesProps = {
  onCategoryChange: (category: string) => void;
};

const BlogCategories = ({ onCategoryChange }: BlogCategoriesProps) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  // Fetch posts from Graph API
  const { data: postEdges = [], error, isLoading } = useSWR<PostEdge[]>(
    'posts',
    fetchGraphPosts,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  );

  // Extract unique categories from fetched posts
  const categories = postEdges.length
    ? [
        'All',
        ...Array.from(
          new Set(
            postEdges.map((edge) =>
              stripHtmlTags(
                edge.node.categories.edges[0]?.node?.name || 'Uncategorized'
              ).trim().toLowerCase()
            )
          )
        ).sort().map(category => category.charAt(0).toUpperCase() + category.slice(1)),
      ]
    : ['All'];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onCategoryChange(categories[newValue]); // Notify parent of selected category
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="body1" color="error">
          Failed to load categories.
        </Typography>
      </Box>
    );
  }

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
              },
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
              },
            }}
          >
            {categories.map((category) => (
              <Tab key={category} label={category} />
            ))}
          </Tabs>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BlogCategories;