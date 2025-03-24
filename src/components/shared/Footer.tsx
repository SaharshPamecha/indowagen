'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const footerSections = [
    {
      title: 'Products',
      links: [
        { text: 'E-Rickshaws', href: '/products/e-rickshaws' },
        { text: 'E-Carts', href: '/products/e-carts' },
        { text: 'E-Loaders', href: '/products/e-loaders' },
        { text: 'Accessories', href: '/accessories' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Contact', href: '/contact' },
        { text: 'Distributors', href: '/distributors' },
        { text: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'FAQs', href: '/faqs' },
        { text: 'Service Centers', href: '/service-centers' },
        { text: 'Warranty', href: '/warranty' },
        { text: 'Documentation', href: '/docs' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, href: 'https://facebook.com' },
    { icon: <TwitterIcon />, href: 'https://twitter.com' },
    { icon: <InstagramIcon />, href: 'https://instagram.com' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ mb: 3 }}>
                <Link href="/" passHref>
                  <img
                    src="/images/logo.png"
                    alt="Indo Wagen Logo"
                    style={{ height: 40 }}
                  />
                </Link>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Leading the revolution in electric mobility with innovative and sustainable solutions.
              </Typography>
              <Box sx={{ mt: 2 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    component={MuiLink}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    sx={{ mr: 1 }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={2} key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography
                  variant="h6"
                  color="text.primary"
                  gutterBottom
                  sx={{ fontWeight: 'bold' }}
                >
                  {section.title}
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {section.links.map((link) => (
                    <Box component="li" key={link.text} sx={{ mb: 1 }}>
                      <Link href={link.href} passHref>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            '&:hover': {
                              color: 'primary.main',
                              textDecoration: 'none',
                            },
                          }}
                        >
                          {link.text}
                        </Typography>
                      </Link>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 5,
            pt: 3,
            borderTop: 1,
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Indo Wagen. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
