'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Button,
  TextField,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

// Common questions that customers might have
const faqs = [
  {
    question: 'What are the payment options available for purchasing a vehicle?',
    answer: 'We offer multiple payment options including cash, credit/debit cards, bank transfers, and financing options through our finance partners (Akasa Finance, Mufin, AMU, EV.FIN, Surjit Finance, Sanchetna, Team Vedika, PHF, Loksuvidha, Embifi). We also offer EMI options starting from 6 months to 12 months tenure.'
  },
  {
    question: 'How can I schedule a test drive?',
    answer: 'You can schedule a test drive by filling out the contact form on our website, calling our customer service number, or visiting any of our dealership locations. Our team will arrange a convenient time for your test drive experience.'
  },
  {
    question: 'What is the warranty period for your electric vehicles?',
    answer: 'Our electric vehicles come with a comprehensive warranty package. This includes 12 months warranty.'
  },
  {
    question: 'Do you provide service at home?',
    answer: 'Yes, we offer doorstep service for minor maintenance and repairs in select cities. For major services, your vehicle will need to be brought to our authorized service centers to ensure proper care and attention.'
  },
  {
    question: 'How long does it take to fully charge the battery?',
    answer: 'The charging time depends on the vehicle model and the type of charger used. Generally, a full charge using a standard home charger takes 6-8 hours, while a fast-charging station can charge up to 80% in about 2 hours.'
  },
  {
    question: 'Do you have a buyback or exchange program?',
    answer: 'Yes, we offer a buyback program for our customers who wish to upgrade to newer models. We also have an exchange program where you can trade in your existing vehicle (electric or conventional) for a new Indo Wagen electric vehicle.'
  },
  {
    question: 'What are the maintenance costs for an electric vehicle?',
    answer: 'Electric vehicles generally have lower maintenance costs compared to conventional vehicles. With fewer moving parts and no need for oil changes, maintenance is primarily focused on battery health, brake systems, and general inspections.'
  },
];

const ContactFAQ = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filter FAQs based on search term
  const filteredFaqs = faqs.filter(
    faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: theme.palette.background.default,
      }}
      id="faq"
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
            sx={{ 
              textAlign: 'center', 
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1
            }}
          >
            <QuestionAnswerIcon color="primary" sx={{ fontSize: 32 }} />
            Frequently Asked Questions
          </Typography>
          
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ textAlign: 'center', mb: 4, maxWidth: '800px', mx: 'auto' }}
          >
            Find quick answers to common questions about our vehicles, services, and support options.
          </Typography>
          
          <Box sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            <TextField
              fullWidth
              placeholder="Search questions..."
              value={searchTerm}
              onChange={handleSearchChange}
              variant="outlined"
              InputProps={{
                startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
              }}
            />
          </Box>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleAccordionChange(`panel${index}`)}
                  sx={{
                    mb: 2,
                    boxShadow: expanded === `panel${index}` ? 3 : 1,
                    '&:before': { display: 'none' },
                    borderRadius: '8px !important',
                    overflow: 'hidden',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      backgroundColor: expanded === `panel${index}` ? 'rgba(0, 0, 0, 0.03)' : 'transparent',
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))
            ) : (
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  py: 4, 
                  bgcolor: 'background.paper', 
                  borderRadius: 2,
                  boxShadow: 1
                }}
              >
                <Typography variant="h6" gutterBottom>
                  No matching questions found
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Try a different search term or browse all questions
                </Typography>
                <Button 
                  variant="text" 
                  color="primary" 
                  sx={{ mt: 2 }} 
                  onClick={() => setSearchTerm('')}
                >
                  View All Questions
                </Button>
              </Box>
            )}
          </motion.div>
          
          {/* <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h6" gutterBottom>
              Can't find what you're looking for?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Our customer support team is ready to help you with any other questions
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button 
                  variant="contained" 
                  color="primary"
                  href="#contact#get-in-touch"
                  sx={{ px: 3 }}
                >
                  Contact Support
                </Button>
              </Grid>
              <Grid item>
                <Button 
                  variant="outlined" 
                  color="primary"
                  href="/contact#visit-our-locations"
                  sx={{ px: 3 }}
                >
                  Visit Help Center
                </Button>
              </Grid>
            </Grid>
          </Box> */}
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactFAQ;
