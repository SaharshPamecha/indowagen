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
  Divider,
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
import { accessories } from '@/data/accessories';

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
  'E-Loader 450'
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low-high', label: 'Price: Low to High' },
  { value: 'price-high-low', label: 'Price: High to Low' },
  { value: 'best-rated', label: 'Best Rated' },
];

const AccessoriesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedModel, setSelectedModel] = useState('All Models');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredAccessories, setFilteredAccessories] = useState<Accessory[]>(accessories);
  const [page, setPage] = useState(1);
  const accessoriesPerPage = 9;
  
  useEffect(() => {
    let filtered = [...accessories];
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Apply model filter
    if (selectedModel !== 'All Models') {
      filtered = filtered.filter(item => item.compatibleModels.includes(selectedModel));
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => a.priceValue - b.priceValue);
        break;
      case 'price-high-low':
        filtered.sort((a, b) => b.priceValue - a.priceValue);
        break;
      case 'newest':
        // Assuming we'd have a date field for sorting by newest
        // For now, just leave in default order
        break;
      case 'best-rated':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (a.featured ? -1 : 1) - (b.featured ? -1 : 1));
        break;
    }
    
    setFilteredAccessories(filtered);
    setPage(1); // Reset to first page on filter change
  }, [searchQuery, selectedCategory, selectedModel, sortBy]);
  
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
  const indexOfLastAccessory = page * accessoriesPerPage;
  const indexOfFirstAccessory = indexOfLastAccessory - accessoriesPerPage;
  const currentAccessories = filteredAccessories.slice(indexOfFirstAccessory, indexOfLastAccessory);
  const totalPages = Math.ceil(filteredAccessories.length / accessoriesPerPage);
  
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
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                mb: 4, 
                borderRadius: 2,
                background: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.primary.light}10)`
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
                
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select
                      labelId="category-select-label"
                      id="category-select"
                      value={selectedCategory}
                      label="Category"
                      onChange={handleCategoryChange}
                    >
                      {categories.map((category) => (
                        <MenuItem key={category} value={category}>{category}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="model-select-label">Compatible With</InputLabel>
                    <Select
                      labelId="model-select-label"
                      id="model-select"
                      value={selectedModel}
                      label="Compatible With"
                      onChange={handleModelChange}
                    >
                      {models.map((model) => (
                        <MenuItem key={model} value={model}>{model}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6} md={2}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="sort-select-label">Sort By</InputLabel>
                    <Select
                      labelId="sort-select-label"
                      id="sort-select"
                      value={sortBy}
                      label="Sort By"
                      onChange={handleSortChange}
                    >
                      {sortOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              
              {/* Active filters display */}
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
            </Paper>
            
            {/* Results summary */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" component="h2">
                {filteredAccessories.length} 
                {filteredAccessories.length === 1 ? ' accessory' : ' accessories'} found
              </Typography>
            </Box>
            
            {/* Products grid */}
            {currentAccessories.length > 0 ? (
              <Grid container spacing={3}>
                {currentAccessories.map((accessory) => (
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
            {totalPages > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                <Pagination 
                  count={totalPages} 
                  page={page} 
                  onChange={handlePageChange} 
                  color="primary"
                  size={isSmall ? "small" : "medium"}
                />
              </Box>
            )}
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default AccessoriesPage;
