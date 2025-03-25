'use client';

import React from 'react';
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
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { blogPosts } from '@/data/blogs';
import Link from 'next/link';

const FeaturedPosts = () => {
  const theme = useTheme();
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);

  return <div></div>;
};

export default FeaturedPosts;
