'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Divider,
  Stack,
  IconButton,
  useTheme,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { NewsItem } from '@/data/news';
import Link from 'next/link';

interface NewsArticleDetailProps {
  article: NewsItem;
}

const NewsArticleDetail: React.FC<NewsArticleDetailProps> = ({ article }) => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Breadcrumb and category */}
          <Box sx={{ mb: 4 }}>
            <Link href="/news" style={{ textDecoration: 'none' }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  mb: 2,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                ← Back to all news
              </Typography>
            </Link>
            <Chip
              label={article.category}
              size="small"
              sx={{
                ml: 2,
                bgcolor: 'primary.main',
                color: 'white',
                fontWeight: 500,
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 3,
            }}
          >
            {article.title}
          </Typography>

          {/* Metadata */}
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{ mb: 5 }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <CalendarTodayIcon
                fontSize="small"
                sx={{ mr: 1, fontSize: '1rem' }}
              />
              {article.publishDate}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <AccessTimeIcon
                fontSize="small"
                sx={{ mr: 1, fontSize: '1rem' }}
              />
              {article.readTime} min read
            </Typography>
          </Stack>

          {/* Featured image */}
          <Box
            sx={{
              position: 'relative',
              height: { xs: '250px', md: '450px' },
              width: '100%',
              mb: 5,
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: 3,
            }}
          >
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </Box>

          {/* Content */}
          <Container maxWidth="md">
            <Box
              sx={{
                '& p': {
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                },
                '& h2': {
                  mt: 5,
                  mb: 3,
                  fontWeight: 700,
                  fontSize: '1.8rem',
                },
                '& h3': {
                  mt: 4,
                  mb: 2,
                  fontWeight: 600,
                  fontSize: '1.5rem',
                },
                '& ul, & ol': {
                  mb: 3,
                  pl: 4,
                },
                '& li': {
                  mb: 1,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                },
              }}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Source if available */}
            {article.source && (
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  mt: 4,
                  mb: 4,
                  borderRadius: 2,
                  bgcolor: theme.palette.grey[50],
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  <strong>Source:</strong> {article.source}
                </Typography>
              </Paper>
            )}

            {/* Tags */}
            <Box sx={{ mt: 6, mb: 4 }}>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Tags:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {article.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="medium"
                    sx={{
                      bgcolor: 'action.hover',
                      '&:hover': { bgcolor: 'action.selected' },
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Share */}
            <Divider sx={{ my: 4 }} />
            <Box sx={{ mb: 6 }}>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Share this news:
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton
                  aria-label="share on facebook"
                  sx={{
                    color: '#1877F2',
                    bgcolor: 'rgba(24, 119, 242, 0.1)',
                    '&:hover': { bgcolor: 'rgba(24, 119, 242, 0.2)' },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  aria-label="share on twitter"
                  sx={{
                    color: '#1DA1F2',
                    bgcolor: 'rgba(29, 161, 242, 0.1)',
                    '&:hover': { bgcolor: 'rgba(29, 161, 242, 0.2)' },
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  aria-label="share on linkedin"
                  sx={{
                    color: '#0A66C2',
                    bgcolor: 'rgba(10, 102, 194, 0.1)',
                    '&:hover': { bgcolor: 'rgba(10, 102, 194, 0.2)' },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  aria-label="share on whatsapp"
                  sx={{
                    color: '#25D366',
                    bgcolor: 'rgba(37, 211, 102, 0.1)',
                    '&:hover': { bgcolor: 'rgba(37, 211, 102, 0.2)' },
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Stack>
            </Box>

            {/* Company contact */}
            <Paper
              elevation={1}
              sx={{
                p: 4,
                borderRadius: 3,
                bgcolor: theme.palette.grey[50],
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography variant="h6" fontWeight={600} gutterBottom>
                For more information
              </Typography>
              <Typography variant="body1">
                For press inquiries or more information about this news, please contact our PR team at <Link href="mailto:Info@zeniak.com" style={{ color: theme.palette.primary.main, textDecoration: 'none' }}>Info@zeniak.com</Link> or call us at <Link href="tel:1800120345345" style={{ color: theme.palette.primary.main, textDecoration: 'none' }}>1800 120 345345</Link>.
              </Typography>
            </Paper>
          </Container>
        </motion.div>
      </Container>
    </Box>
  );
};

export default NewsArticleDetail;
