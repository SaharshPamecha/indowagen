'use client';

import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Chip,
  Stack,
  Pagination,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import AccessoryCard, { Accessory } from './AccessoryCard';
import AccessoriesHero from './AccessoriesHero';

const categories = [
  'All Categories',
  'Batteries',
  'Chargers',
  'Body Parts',
  'Electronics',
  'Performance Parts',
  'Safety & Security',
  'Comfort Accessories',
];

const models = [
  'All Models',
  'E-Rickshaw Standard',
  'E-Rickshaw Deluxe',
  'E-Rickshaw Premium',
  'E-Cart Mini',
  'E-Cart Standard',
  'E-Loader 250',
  'E-Loader 450',
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' },
];

const AccessoriesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedModel, setSelectedModel] = useState('All Models');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredAccessories, setFilteredAccessories] = useState<Accessory[]>([]);
  const [page, setPage] = useState(1);
  const accessoriesPerPage = 30;

  // Fetch accessories from the API
  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch('/api/accessories');
        if (!response.ok) {
          throw new Error('Failed to fetch accessories');
        }
        const data = await response.json();
        console.log("data : " , data);
        // Map the database data to the Accessory interface
        const accessories: Accessory[] = data.map((item: any) => ({
          id: item.id.toString(),
          name: item.name,
          image: `https://forestgreen-capybara-315761.hostingersite.com/Accesoories/${item.image_name}`
        }));

        setFilteredAccessories(accessories);
      } catch (error) {
        console.error('Error fetching accessories:', error);
      }
    };

    fetchAccessories();
  }, []);



  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const handleModelChange = (event: any) => {
    setSelectedModel(event.target.value);
  };

  const handleSortChange = (event: any) => {
    setSortBy(event.target.value);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate pagination
  // const indexOfLastAccessory = page * accessoriesPerPage;
  // const indexOfFirstAccessory = indexOfLastAccessory - accessoriesPerPage;
  // const currentAccessories = filteredAccessories.slice(indexOfFirstAccessory, indexOfLastAccessory);
  // const totalPages = Math.ceil(filteredAccessories.length / accessoriesPerPage);

  return (
    <Box component="main">
      <AccessoriesHero />

      <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Filters */}
            {/* <Paper
              elevation={2}
              sx={{
                p: 3,
                mb: 4,
                borderRadius: 2,
                background: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.primary.light}10)`,
              }}
            >
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    placeholder="Search accessories..."
                    variant="outlined"
                    size="small"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

              
              </Grid>

             
              {(selectedCategory !== 'All Categories' || selectedModel !== 'All Models' || searchQuery) && (
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                    <FilterListIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                    Active Filters:
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {selectedCategory !== 'All Categories' && (
                      <Chip
                        label={`Category: ${selectedCategory}`}
                        size="small"
                        onDelete={() => setSelectedCategory('All Categories')}
                      />
                    )}
                    {selectedModel !== 'All Models' && (
                      <Chip
                        label={`Model: ${selectedModel}`}
                        size="small"
                        onDelete={() => setSelectedModel('All Models')}
                      />
                    )}
                    {searchQuery && (
                      <Chip
                        label={`Search: ${searchQuery}`}
                        size="small"
                        onDelete={() => setSearchQuery('')}
                      />
                    )}
                  </Stack>
                </Box>
              )}
            </Paper> */}

            {/* Results summary */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" component="h2">
                {filteredAccessories.length}
                {filteredAccessories.length === 1 ? ' accessory' : ' accessories'} found
              </Typography>
            </Box>

            {/* Products grid */}
            {filteredAccessories.length > 0 ? (
              <Grid container spacing={3}>
                {filteredAccessories.map((accessory) => (
                  <Grid item key={accessory.id} xs={12} sm={6} md={4}>
                    <AccessoryCard accessory={accessory} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box sx={{ textAlign: 'center', my: 8 }}>
                <Typography variant="h6">
                  No accessories found matching your filters.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                  Try modifying your search criteria or browse all accessories.
                </Typography>
              </Box>
            )}

            {/* Pagination */}
            {/* {totalPages > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  size={isSmall ? 'small' : 'medium'}
                />
              </Box>
            )} */}
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default AccessoriesPage;