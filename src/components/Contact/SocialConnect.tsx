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
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { companyInfo } from '@/data/company';

const SocialConnect = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Social media platforms with their respective icons and colors
  const socialMedia = [
    {
      name: 'Facebook',
      icon: <FacebookIcon sx={{ fontSize: 40 }} />,
      url: companyInfo.social?.facebook || 'https://facebook.com/indowagen',
      color: '#1877F2',
      description: 'Follow us for latest updates and community stories',
    },
    {
      name: 'Twitter',
      icon: <TwitterIcon sx={{ fontSize: 40 }} />,
      url: companyInfo.social?.twitter || 'https://twitter.com/indowagen',
      color: '#1DA1F2',
      description: 'Stay updated with our latest news and announcements',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
      url: companyInfo.social?.linkedin || 'https://linkedin.com/company/indowagen',
      color: '#0A66C2',
      description: 'Connect with us professionally and explore career opportunities',
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon sx={{ fontSize: 40 }} />,
      url: companyInfo.social?.instagram || 'https://instagram.com/indowagen',
      color: '#E4405F',
      description: 'Explore our visual journey and behind-the-scenes content',
    },
    {
      name: 'YouTube',
      icon: <YouTubeIcon sx={{ fontSize: 40 }} />,
      url: companyInfo.social?.youtube || 'https://youtube.com/indowagen',
      color: '#FF0000',
      description: 'Watch our product reviews, tutorials, and event highlights',
    },
    {
      name: 'WhatsApp',
      icon: <WhatsAppIcon sx={{ fontSize: 40 }} />,
      url: 'https://wa.me/919876543210',
      color: '#25D366',
      description: 'Chat with our customer support team for quick assistance',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: '#f8f9fa',
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
            gutterBottom
            sx={{ textAlign: 'center', mb: 2 }}
          >
            Connect With Us
          </Typography>
          
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ textAlign: 'center', mb: 6, maxWidth: '800px', mx: 'auto' }}
          >
            Join our growing community on social media to stay updated with the latest news, 
            product launches, and exclusive offers from Indo Wagen.
          </Typography>
          
          <Grid container spacing={3}>
            {socialMedia.map((platform, index) => (
              <Grid item xs={12} sm={6} md={4} key={platform.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 2,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardActionArea
                      component="a"
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ height: '100%' }}
                    >
                      <CardContent
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          textAlign: 'center',
                          p: 3,
                        }}
                      >
                        <Box
                          sx={{
                            color: platform.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            backgroundColor: `${platform.color}15`,
                            mb: 2,
                          }}
                        >
                          {platform.icon}
                        </Box>
                        <Typography variant="h6" gutterBottom>
                          {platform.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          {platform.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          color={platform.color}
                          sx={{ fontWeight: 600 }}
                        >
                          Follow Us →
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h6" gutterBottom>
              Share Your Indo Wagen Experience
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Use the hashtag <strong>#IndoWagenEV</strong> to share your experience and get featured on our channels
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SocialConnect;
