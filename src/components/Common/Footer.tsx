'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
  TextField,
  Button,
  Paper,
  Chip,
  Stack,
  Tooltip,
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Snackbar,
  Alert,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import CopyrightIcon from '@mui/icons-material/Copyright';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PolicyIcon from '@mui/icons-material/Policy';
import InfoIcon from '@mui/icons-material/Info';

// Data
const companyInfo = {
  name: "Indo Wagen",
  fullName: "Indo Wagen Electronics Pvt. Ltd.",
  foundedYear: 2018,
  manufacturingAddress: {
    name: "Manufacturing Unit",
    street:
      "Zeniak Innovation India Limited, Kulgachia, Uluberia Coke Oven Plant, Near Ideal Public School, Tulsiberia Road, Mohishrekha",
    city: "Howrah",
    state: "West Bengal",
    zip: "711306",
    country: "India",
  },
  corporateAddress: {
    name: "Corporate Office",
    street:
      "Merlin Infinite, 10th floor, Room No- 1010, Plot No- 5, DN51, Sector V, Saltlake",
    city: "Kolkata",
    state: "West Bengal",
    zip: "700091",
    country: "India",
  },
  registeredAddress: {
    name: "Registered Office",
    street: "8/1a, Sir William Jones Sarani, 4th floor",
    city: "Kolkata",
    state: "West Bengal",
    zip: "700071",
    country: "India",
  },
  // Keep old address for backward compatibility
  address: {
    street:
      "Merlin Infinite, 10th floor, Room No- 1010, Plot No- 5, DN51, Sector V, Saltlake",
    city: "Kolkata",
    state: "West Bengal",
    zip: "700091",
    country: "India",
  },
  contact: {
    phone: "1800 120 345345",
    email: "Info@zeniak.com",
    supportEmail: "Info@zeniak.com",
    salesEmail: "Info@zeniak.com",
  },
  social: {
    facebook: "https://www.facebook.com/indowagen/",
    twitter: "https://x.com/i/flow/login?redirect_after_login=%2Findowagen",
    instagram: "https://www.instagram.com/indo.wagen/",
    linkedin: "https://linkedin.com/company/indowagen",
    youtube: "https://youtube.com/indowagen",
  },
  businessHours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "9:00 AM - 6:00 PM",
    sunday: "Closed",
  },
  description:
    "Indo Wagen is a leading electric vehicle manufacturer in India, specializing in electric rickshaws, e-carts, and other sustainable mobility solutions. We are committed to transforming urban transportation through innovative, eco-friendly vehicles that offer reliable performance and low operating costs.",
  mission:
    "To accelerate the transition to sustainable transportation by providing affordable, reliable electric mobility solutions.",
  vision:
    "To become India's most trusted electric vehicle brand and contribute to a cleaner, greener future.",
  certifications: ["ISO 9001:2015", "ARAI Certified", "BIS Certified"],
  achievements: [
    {
      title: "Company Founded",
      description:
        "Indo Wagen was established with a vision to revolutionize last-mile transportation in India with eco-friendly electric vehicles.",
      year: 2018,
    },
    {
      title: "First Product Launch",
      description:
        "Successfully launched our first electric rickshaw model, which quickly gained popularity for its reliability and cost-effectiveness.",
      year: 2019,
    },
    {
      title: "ARAI Certification",
      description:
        "Received prestigious ARAI certification for our vehicles, confirming their compliance with Indian safety and performance standards.",
      year: 2020,
    },
    {
      title: "Manufacturing Expansion",
      description:
        "Expanded our manufacturing capacity with a new state-of-the-art facility in Noida, increasing production by 300%.",
      year: 2021,
    },
    {
      title: "Export Markets",
      description:
        "Began exporting to neighboring countries, marking our first step toward becoming a global electric vehicle brand.",
      year: 2022,
    },
  ],
  dealerNetwork: {
    count: 150,
    states: 22,
    servicePoints: 200,
  },
};

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const currentYear = new Date().getFullYear();
  
  // Newsletter subscription state
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'info';
  }>({ open: false, message: '', severity: 'info' });
  
  // Newsletter subscription handler
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Here you would typically integrate with your newsletter service
    console.log('Subscribing email:', email);
    
    setSubscribeStatus({
      open: true,
      message: 'Thanks for subscribing to our newsletter!',
      severity: 'success',
    });
    setEmail('');
  };
  
  const handleCloseSnackbar = () => {
    setSubscribeStatus({ ...subscribeStatus, open: false });
  };

  // Footer navigation sections
  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Explore Products', href: '/products' },
        { name: 'Accessories', href: '/accessories' },
        // { name: 'Compare Models', href: '/products/compare' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'News & Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        
      ],
    },
    {
      title: 'Dealers',
      links: [
        { name: 'Dealers Lounge', href: '/dealers/lounge' },
        { name: 'Find a Dealer', href: '/dealers/locator' },
        { name: 'Become a Dealer', href: '/dealers/locator#become-distributor' },
        // { name: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Connect Support', href: '/contact' },
        { name: 'Connect With Us', href: '/contact#sociallinks' },
        { name: 'Visit Us ', href: '/contact#visit-our-locations' },
        { name: 'FAQ', href: '/contact#faq' }
      ],
    }
   
  ];

  // Social media links with enhanced information
  const socialLinks = [
    { 
      name: 'Facebook',
      icon: <FacebookIcon />, 
      href: companyInfo.social?.facebook || '#',
      color: '#1877F2'
    },
    { 
      name: 'Twitter',
      icon: <TwitterIcon />, 
      href: companyInfo.social?.twitter || '#',
      color: '#1DA1F2'
    },
    { 
      name: 'LinkedIn',
      icon: <LinkedInIcon />, 
      href: companyInfo.social?.linkedin || '#',
      color: '#0A66C2'
    },
    { 
      name: 'Instagram',
      icon: <InstagramIcon />, 
      href: companyInfo.social?.instagram || '#',
      color: '#E4405F'
    },
    { 
      name: 'YouTube',
      icon: <YouTubeIcon />, 
      href: companyInfo.social?.youtube || '#',
      color: '#FF0000'
    },
  ];

  // Legal links
  const legalLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Sitemap', href: '/sitemap.xml' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor:
          theme.palette.mode === "light" ? "grey.100" : "background.paper",
        pt: 4,
        pb: 3,
        borderTop: `1px solid ${theme.palette.divider}`,
        width: "100%",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Top Section: Powered by and Trademark */}
        {/* <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: { xs: 'center', sm: 'space-between' },
            alignItems: 'center',
            mb: 4,
            py: 2,
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: { xs: 1, sm: 0 } }}
          >
            <a
              target="_blank"
              href="https://digitalmiles.in/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Powered by Digital Miles
            </a>{' '}
            | Made with Love ♥
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: { xs: 1, sm: 0 } }}
          >
            {companyInfo.name || "Indo Wagen"} is a trademark of{' '}
            {companyInfo.fullName || "Indo Wagen Electronics Pvt. Ltd."}
          </Typography>
        </Box> */}

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Company Info and Newsletter */}
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 3, bgcolor: "transparent" }}>
              {/* Logo */}
              <Box sx={{ position: "relative", width: 180, height: 60, mb: 3 }}>
                <Image
                  src="/images/brand/logo.png"
                  alt={companyInfo.name}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Box>

              {/* Company Description */}
              <Typography
                variant="body2"
                color="text.secondary"
                paragraph
                sx={{ mb: 3 }}
              >
                {companyInfo.description ||
                  "Leading manufacturer of electric vehicles in India"}
              </Typography>

              {/* Contact Information */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bold", mb: 1.5 }}
                >
                  Contact Information
                </Typography>

                {/* Address */}
                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <LocationOnIcon
                    sx={{ mr: 1, color: "primary.main", mt: 0.5 }}
                  />
                  <Typography variant="body2">
                    {companyInfo.address?.street}
                    <br />
                    {companyInfo.address?.city}, {companyInfo.address?.state},{' '}
                    {companyInfo.address?.zip}
                    <br />
                    {companyInfo.address?.country}
                  </Typography>
                </Box>

                {/* Phone */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PhoneIcon sx={{ mr: 1, color: "primary.main" }} />
                  <MuiLink
                    href={
                      companyInfo.contact?.phone
                        ? `tel:${companyInfo.contact.phone.replace(
                            /[^0-9]/g,
                            ""
                          )}`
                        : "#"
                    }
                    variant="body2"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {companyInfo.contact?.phone || "+91-120-4567890"}
                  </MuiLink>
                </Box>

                {/* Email */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <EmailIcon sx={{ mr: 1, color: "primary.main" }} />
                  <MuiLink
                    href={`mailto:${
                      companyInfo.contact?.email || "info@indowagen.com"
                    }`}
                    variant="body2"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {companyInfo.contact?.email || "info@indowagen.com"}
                  </MuiLink>
                </Box>

                {/* Business Hours */}
                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <AccessTimeIcon
                    sx={{ mr: 1, color: "primary.main", mt: 0.5 }}
                  />
                  <Typography variant="body2">
                    Mon - Sat: 9:00 AM - 6:00 PM
                    <br />
                    Sun: Closed
                  </Typography>
                </Box>
              </Box>

              {/* Newsletter Subscription */}
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bold", mb: 1.5 }}
                >
                  Subscribe to Our Newsletter
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Stay updated with our latest news and offers
                </Typography>

                <form onSubmit={handleSubscribe}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: isTablet ? "column" : "row",
                    }}
                  >
                    <TextField
                      fullWidth
                      size="small"
                      label="Email Address"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{ mr: isTablet ? 0 : 1, mb: isTablet ? 1 : 0 }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      startIcon={<SendIcon />}
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      Subscribe
                    </Button>
                  </Box>
                </form>
              </Box>
            </Paper>
          </Grid>

          {/* Navigation Links */}
          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={2} key={section.title}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  position: "relative",
                  pb: 1,
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "40px",
                    height: "2px",
                    bgcolor: "primary.main",
                  },
                }}
              >
                {section.title}
              </Typography>
              <Box component="nav">
                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                  {section.links.map((link) => (
                    <Box component="li" key={link.name} sx={{ mb: 1 }}>
                      <Link href={link.href} style={{ textDecoration: "none" }}>
                        <MuiLink
                          component="span"
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            display: "inline-block",
                            transition: "transform 0.2s, color 0.2s",
                            "&:hover": {
                              color: "primary.main",
                              transform: "translateX(5px)",
                            },
                          }}
                        >
                          {link.name}
                        </MuiLink>
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Social Media Section */}
        <Box sx={{ mt: 6, mb: 4 }}>
          <Divider>
            <Typography variant="subtitle2" sx={{ px: 2, fontWeight: "bold" }}>
              Connect With Us
            </Typography>
          </Divider>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1,
              mt: 3,
            }}
          >
            {socialLinks.map((social) => (
              <Tooltip key={social.name} title={social.name} arrow>
                <IconButton
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  sx={{
                    color: "grey.700",
                    "&:hover": {
                      bgcolor: social.color + "1A",
                      color: social.color,
                      transform: "translateY(-3px)",
                    },
                    transition: "all 0.2s",
                  }}
                >
                  {social.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Box>

        {/* Certifications and Achievements */}
        <Box sx={{ mt: 3, mb: 4, textAlign: "center" }}>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
            sx={{ mb: 2 }}
          >
            <Chip
              icon={<VerifiedUserIcon />}
              label="ISO 9001 Certified"
              size="small"
              color="primary"
              variant="outlined"
            />
            <Chip label="ARAI Approved" size="small" variant="outlined" />
            <Chip label="ICAT Certified" size="small" variant="outlined" />
            <Chip label="Make in India" size="small" variant="outlined" />
            <Chip label="BIS Compliant" size="small" variant="outlined" />
          </Stack>
        </Box>

        {/* Legal Links */}
        <Box sx={{ textAlign: "center", mt: 4, mb: 3 }}>
          <Stack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{ textDecoration: "none" }}
              >
                <MuiLink
                  component="span"
                  variant="caption"
                  color="text.secondary"
                  sx={{ "&:hover": { color: "primary.main" } }}
                >
                  {link.name}
                </MuiLink>
              </Link>
            ))}
          </Stack>
        </Box>

        {/* Footer Bottom */}
       {/* Footer Bottom */}
 {/* Footer Bottom */}
 <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "center", sm: "flex-end" },
    justifyContent: "space-between",
    mt: 3,
    pt: 3,
    borderTop: `1px solid ${theme.palette.divider}`,
    textAlign: { xs: "center", sm: "right" },
  }}
>
  {/* Left Corner - Copyright */}
  <Box sx={{ mb: { xs: 2, sm: 0 } }}>
    <Typography variant="body2" color="text.secondary">
      <CopyrightIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: "middle" }} />
      {currentYear} {"Zeniak Innovation India Limited"}. All rights reserved.
    </Typography>
  </Box>

  {/* Right Corner - Powered by and Trademark */}
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", sm: "flex-end" } }}>
    {/* Powered by Digital Miles */}
    <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 1, sm: 1 } }}>
      <a
        target="_blank"
        href="https://digitalmiles.in/"
        style={{ textDecoration: "none", color: "#FF0000" }}
      >
        Powered by Digital Miles
      </a>{' '}
      | Made with Love{' '}
      <span style={{ color: "#FF0000" }}>♥</span>
    </Typography>
    
    {/* Trademark */}
    <Typography variant="body2" color="text.secondary">
      {companyInfo.name || "Indo Wagen"} is a trademark of{' '}
      {"Zeniak Innovation India Limited"}
    </Typography>
  </Box>
</Box>

        {/* Newsletter Subscription Status */}
        <Snackbar
          open={subscribeStatus.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={subscribeStatus.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {subscribeStatus.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Footer;