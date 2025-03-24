// 'use client';

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   TextField,
//   Divider,
//   Paper,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   IconButton,
//   useTheme,
// } from '@mui/material';
// import HelpIcon from '@mui/icons-material/Help';
// import BuildIcon from '@mui/icons-material/Build';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import PaymentIcon from '@mui/icons-material/Payment';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import ChatIcon from '@mui/icons-material/Chat';
// //import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { motion } from 'framer-motion';
// import { WhatsApp } from '@mui/icons-material';

// // Support categories
// const supportCategories = [
//   {
//     title: 'Technical Support',
//     icon: <BuildIcon fontSize="large" sx={{ color: 'primary.main' }} />,
//     description: 'Get help with vehicle operation, troubleshooting, and technical issues',
//     link: '/faqs',
//   },
//   {
//     title: 'Parts & Accessories',
//     icon: <LocalShippingIcon fontSize="large" sx={{ color: 'primary.main' }} />,
//     description: 'Order replacement parts or accessories for your vehicle',
//     link: '/accessories',
//   },
//   {
//     title: 'Billing & Payments',
//     icon: <PaymentIcon fontSize="large" sx={{ color: 'primary.main' }} />,
//     description: 'Questions about invoices, payments, or financing options',
//     link: '/faqs',
//   },
//   {
//     title: 'General Inquiries',
//     icon: <HelpIcon fontSize="large" sx={{ color: 'primary.main' }} />,
//     description: 'Any other questions about our products or services',
//     link: '/contact',
//   },
// ];

// // Contact channels
// const contactChannels = [
//   {
//     method: 'Phone',
//     icon: <PhoneIcon />,
//     detail: '+91 800-123-4567',
//     description: 'Available Mon-Sat, 9AM-6PM',
//     action: 'Call Now',
//     link: 'tel:+918001234567',
//   },
//   {
//     method: 'Email',
//     icon: <EmailIcon />,
//     detail: 'support@indowagen.com',
//     description: 'Response within 24 hours',
//     action: 'Send Email',
//     link: 'mailto:support@indowagen.com',
//   },
//   {
//     method: 'Live Chat',
//     icon: <ChatIcon />,
//     detail: 'Chat with our support team',
//     description: 'Available Mon-Fri, 10AM-5PM',
//     action: 'Start Chat',
//     link: '#',
//   },
//   {
//     method: 'WhatsApp',
//     icon: <WhatsApp />,
//     detail: '+91 800-123-4567',
//     description: 'Quick responses on WhatsApp',
//     action: 'WhatsApp Us',
//     link: 'https://wa.me/918001234567',
//   },
// ];

// // FAQs
// const faqs = [
//   {
//     question: 'How do I schedule a service appointment?',
//     answer: 'You can schedule a service appointment by calling our service center directly, using our online booking form, or visiting any of our service centers in person.'
//   },
//   {
//     question: 'What is the typical response time for support requests?',
//     answer: 'We aim to respond to all support requests within 24 hours. For urgent technical issues, we prioritize responses and typically get back within 4-6 hours during business days.'
//   },
//   {
//     question: 'How can I check the status of my parts order?',
//     answer: 'You can check your order status by logging into your account on our website, or by contacting our customer support team with your order number.'
//   },
//   {
//     question: 'Do you offer on-site technical support?',
//     answer: 'Yes, we offer on-site technical support for fleet customers and in special circumstances. Additional charges may apply based on location and service requirements.'
//   },
// ];

// export default function SupportPage() {
//   const theme = useTheme();

//   return (
//     <Box sx={{ py: 8 }}>
//       <Container maxWidth="lg">
//         {/* Header Section */}
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
//               Customer Support Center
//             </Typography>
//             <Typography variant="h5" color="textSecondary" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
//               We're here to help you with any questions or issues you may have
//             </Typography>
//           </motion.div>
//         </Box>

//         {/* Support Categories */}
//         <Grid container spacing={4} sx={{ mb: 10 }}>
//           {supportCategories.map((category, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Card
//                   elevation={3}
//                   sx={{
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     borderRadius: 2,
//                     transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
//                     '&:hover': {
//                       transform: 'translateY(-8px)',
//                       boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ p: 4, flexGrow: 1, textAlign: 'center' }}>
//                     <Box sx={{ mb: 2 }}>{category.icon}</Box>
//                     <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
//                       {category.title}
//                     </Typography>
//                     <Typography variant="body1" color="textSecondary" paragraph>
//                       {category.description}
//                     </Typography>
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       endIcon={<ArrowForwardIcon />}
//                       href={category.link}
//                       sx={{ mt: 2 }}
//                     >
//                       Learn More
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Contact Methods Section */}
//         <Box sx={{ mb: 10 }}>
//           <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
//             Contact Us
//           </Typography>
          
//           <Grid container spacing={4}>
//             {contactChannels.map((channel, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Paper
//                     elevation={2}
//                     sx={{
//                       p: 3,
//                       borderRadius: 2,
//                       height: '100%',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                       textAlign: 'center',
//                       '&:hover': {
//                         boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
//                       },
//                     }}
//                   >
//                     <IconButton
//                       color="primary"
//                       sx={{
//                         backgroundColor: 'rgba(25, 118, 210, 0.08)',
//                         mb: 2,
//                         '&:hover': {
//                           backgroundColor: 'rgba(25, 118, 210, 0.12)',
//                         },
//                       }}
//                       size="large"
//                     >
//                       {channel.icon}
//                     </IconButton>
//                     <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//                       {channel.method}
//                     </Typography>
//                     <Typography variant="body1" gutterBottom>
//                       {channel.detail}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
//                       {channel.description}
//                     </Typography>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       href={channel.link}
//                       sx={{ mt: 'auto', borderRadius: 6, px: 3 }}
//                     >
//                       {channel.action}
//                     </Button>
//                   </Paper>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* Support Form Section */}
//         <Paper elevation={3} sx={{ p: 4, borderRadius: 2, mb: 10 }}>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={5}>
//               <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
//                 Send Us a Message
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 Can't find what you're looking for? Send us a message and our support team will get back to you as soon as possible.
//               </Typography>
              
//               <Box sx={{ mt: 4 }}>
//                 <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//                   Frequently Asked Questions
//                 </Typography>
//                 {faqs.map((faq, index) => (
//                   <Box key={index} sx={{ mb: 3 }}>
//                     <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//                       {faq.question}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {faq.answer}
//                     </Typography>
//                   </Box>
//                 ))}
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   endIcon={<ArrowForwardIcon />}
//                   href="/faqs"
//                   sx={{ mt: 2 }}
//                 >
//                   View All FAQs
//                 </Button>
//               </Box>
//             </Grid>
            
//             <Grid item xs={12} md={7}>
//               <Box component="form" noValidate sx={{ mt: { xs: 3, md: 0 } }}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       required
//                       fullWidth
//                       label="Full Name"
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       required
//                       fullWidth
//                       label="Email Address"
//                       variant="outlined"
//                       type="email"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Phone Number"
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       required
//                       fullWidth
//                       label="Subject"
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       required
//                       fullWidth
//                       label="Your Message"
//                       variant="outlined"
//                       multiline
//                       rows={5}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Button
//                       type="submit"
//                       fullWidth
//                       variant="contained"
//                       color="primary"
//                       size="large"
//                       sx={{ py: 1.5, borderRadius: 2, fontWeight: 'bold' }}
//                     >
//                       Submit Message
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Grid>
//           </Grid>
//         </Paper>

//         {/* Support Resources Section */}
//         <Box sx={{ mb: 8 }}>
//           <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
//             Support Resources
//           </Typography>
          
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={4}>
//               <Paper
//                 elevation={2}
//                 sx={{
//                   p: 3,
//                   borderRadius: 2,
//                   height: '100%',
//                   transition: 'transform 0.3s ease-in-out',
//                   '&:hover': {
//                     transform: 'translateY(-8px)',
//                   },
//                 }}
//               >
//                 <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
//                   Documentation
//                 </Typography>
//                 <Divider sx={{ mb: 3 }} />
//                 <List disablePadding>
//                   <ListItem disablePadding sx={{ mb: 2 }}>
//                     <ListItemIcon sx={{ minWidth: 40 }}>
//                       <ArrowForwardIcon color="primary" fontSize="small" />
//                     </ListItemIcon>
//                     <ListItemText primary="User Manuals" />
//                   </ListItem>
//                   <ListItem disablePadding sx={{ mb: 2 }}>
//                     <ListItemIcon sx={{ minWidth: 40 }}>
//                       <ArrowForwardIcon color="primary" fontSize="small" />
//                     </ListItemIcon>
//                     <ListItemText primary="Technical Specifications" />
//                   </ListItem>
//                   <ListItem disablePadding sx={{ mb: 2 }}>
//                     <ListItemIcon sx={{ minWidth: 40 }}>
//                       <ArrowForwardIcon color="primary" fontSize="small" />
//                     </ListItemIcon>
//                     <ListItemText primary="Maintenance Guides" />
//                   </ListItem>
//                 </List>
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   fullWidth
//                   href="/docs"
//                   sx={{ mt: 2 }}
//                 >
//                   Browse Documents
//                 </Button>
//               </Paper>
//             </Grid>
            
//             <Grid item xs={12} md={4}>
//               <Paper
//                 elevation={2}
//                 sx={{
//                   p: 3,
//                   borderRadius: 2,
//                   height: '100%',
//                   transition: 'transform 0.3s ease-in-out',
//                   '&:hover': {
//                     transform: 'translateY(-8px)',
//                   },
//                 }}
//               >
//                 <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
//                   Service & Repairs
//                 </Typography>
//                 <Divider sx={{ mb: 3 }} />
//                 <List disablePadding>
//                   <ListItem disablePadding sx={{ mb: 2 }}>
//                     <ListItemIcon sx={{ minWidth: 40 }}>
//                       <ArrowForwardIcon color="primary" fontSize="small" />
//                     </ListItemIcon>
//                     <ListItemText primary="Find a Service Center" />
//                   </ListItem>
//                   <ListItem disablePadding sx={{ mb: 2 }}>
//                     <ListItemIcon sx={{ minWidth: 40 }}>
//                       <ArrowForwardIcon color="primary" fontSize="small" />
//                     </ListItemIcon>
//                     <ListItemText primary="Schedule Maintenance" />
//                   </ListItem>
//                   <ListItem disablePadding sx={{ mb: 2 }}>
//                     <ListItemIcon sx={{ minWidth: 40 }}>
//                       <ArrowForwardIcon color="primary" fontSize="small" />
//                     </ListItemIcon>
//                     <ListItemText primary="Parts & Accessories" />
//                   </ListItem>
//                 </List>
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   fullWidth
//                   href="/service-centers"
//                   sx={{ mt: 2 }}
//                 >
//                   View Service Options
//                 </Button>
//               </Paper>
//             </Grid>
            
//             <Grid item xs={12} md={4}>
//               <Paper
//                 elevation={2}
//                 sx={{
//                   p: 3,
//                   borderRadius: 2,
//                   height: '100%',
//                   transition: 'transform 0.3s ease-in-out',
//                   '&:hover': {
//                     transform: 'translateY(-8px)',
//                   },
//                 }}
//               >
//                 <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
//                   Warranty Information
//                 </Typography>
//                 <Divider sx={{ mb: 3 }} />
//                 <List disablePadding>
//                   <ListItem disablePadding sx={{ mb: 2 }}>
//                     <ListItemIcon sx={{ minWidth: 40 }}>
//                       <ArrowForwardIcon color="primary" fontSize="small" />
//                     </ListItemIcon>
//                     <ListItemText primary="Warranty Coverage" />
//                   </ListItem>
//                   <ListItem disablePadding sx={{ mb: 2 }}>
//                     <ListItemIcon sx={{ minWidth: 40 }}>
//                       <ArrowForwardIcon color="primary" fontSize="small" />
//                     </ListItemIcon>
//                     <ListItemText primary="Extended Warranty Options" />
//                   </ListItem>
//                   <ListItem disablePadding sx={{ mb: 2 }}>
//                     <ListItemIcon sx={{ minWidth: 40 }}>
//                       <ArrowForwardIcon color="primary" fontSize="small" />
//                     </ListItemIcon>
//                     <ListItemText primary="Claim Process" />
//                   </ListItem>
//                 </List>
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   fullWidth
//                   href="/warranty"
//                   sx={{ mt: 2 }}
//                 >
//                   View Warranty Details
//                 </Button>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Box>

//         {/* Business Hours */}
//         <Paper
//           elevation={3}
//           sx={{
//             p: 4,
//             borderRadius: 2,
//             backgroundColor: 'rgba(25, 118, 210, 0.04)',
//             border: '1px solid rgba(25, 118, 210, 0.1)',
//             mb: 4,
//           }}
//         >
//           <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
//             Customer Support Hours
//           </Typography>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
//                 Phone Support:
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 Monday to Saturday: 9:00 AM - 6:00 PM IST<br />
//                 Sunday: Closed
//               </Typography>
              
//               <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
//                 Email Support:
//               </Typography>
//               <Typography variant="body1">
//                 24/7 - Response within 24 hours
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
//                 On-Site Service:
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 Monday to Friday: 10:00 AM - 5:00 PM IST<br />
//                 Saturday: 10:00 AM - 2:00 PM IST<br />
//                 Sunday: Closed
//               </Typography>
              
//               <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
//                 Emergency Technical Support:
//               </Typography>
//               <Typography variant="body1">
//                 Available 24/7 for fleet customers
//               </Typography>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Container>
//     </Box>
//   );
// }


import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page