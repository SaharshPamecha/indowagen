'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  Paper,
} from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';

const certifications = [
  {
    id: 1,
    image: '/certificates/certificate 1.webp',
    alt: 'Indo Wagen Certification',
    title: 'Quality Management System',
    description: 'ISO certification recognizing our commitment to quality manufacturing processes and consistent product standards.',
  },
  {
    id: 2,
    image: '/certificates/certificate 2.webp',
    alt: 'Indo Wagen Certification',
    title: 'ICAT Certificate',
    description: 'ICAT certification for our eco-friendly manufacturing and sustainable automotive standards.'
  },
];

const Certifications = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Our Certifications
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: "800px", mx: "auto" }}
            >
              Industry recognitions that validate our quality and standards
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6} justifyContent="center">
          {certifications.map((cert) => (
            <Grid item xs={12} md={6} key={cert.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: cert.id * 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  onClick={() => window.open(cert.image, "_blank")} // Opens the image in a new tab
                  sx={{
                    cursor: "pointer",
                    "&:focus": { outline: "none" },
                  }}
                >
                  <Card
                    elevation={5}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 3,
                      overflow: "hidden",
                      transition:
                        "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 10,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: 280, md: 350 },
                        bgcolor: "grey.100",
                      }}
                    >
                      <Image
                        src={cert.image}
                        alt={cert.alt}
                        fill
                        style={{ objectFit: "contain", padding: "20px" }}
                      />
                    </Box>
                    <CardContent sx={{ p: 4, flexGrow: 1 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <VerifiedIcon
                          sx={{
                            color: theme.palette.primary.main,
                            mr: 1.5,
                            fontSize: 28,
                          }}
                        />
                        <Typography
                          variant="h5"
                          component="h3"
                          fontWeight="bold"
                        >
                          {cert.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary">
                        {cert.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={2}
            sx={{
              mt: 8,
              p: 4,
              borderRadius: 3,
              backgroundColor: `${theme.palette.primary.main}08`,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Commitment to Excellence
            </Typography>
            <Typography variant="body1" paragraph>
              Our certifications demonstrate our unwavering commitment to
              quality, safety, and environmental responsibility. At Indo Wagen,
              we continuously strive to meet and exceed industry standards while
              delivering exceptional products to our customers.
            </Typography>
            <Typography variant="body1">
              These recognitions validate our manufacturing processes, quality
              control systems, and sustainable practices that have been
              developed and refined over years of operation in the electric
              mobility sector.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Certifications;



// 'use client';

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   useTheme,
//   Paper,
// } from '@mui/material';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import VerifiedIcon from '@mui/icons-material/Verified';

// const certifications = [
//   {
//     id: 1,
//     image: '/certificates/certificate 1.webp',
//     alt: 'Indo Wagen Certification',
//     title: 'Quality Management System',
//     description: 'ISO certification recognizing our commitment to quality manufacturing processes and consistent product standards. This certification ensures that every step of our production—from sourcing raw materials to final assembly—adheres to strict quality controls. It reflects our dedication to delivering reliable, high-performance electric vehicles that meet global benchmarks for safety and durability.',
//   },
// ];

// const Certifications = () => {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         py: { xs: 6, md: 8 },
//         bgcolor: "background.default",
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Heading Section */}
//         <Box sx={{ textAlign: "center", mb: 6 }}>
//           <Typography
//             variant="h4"
//             component="h2"
//             gutterBottom
//             sx={{ fontWeight: 600 }}
//           >
//             Our Certifications
//           </Typography>
//           <Typography
//             variant="body1"
//             color="text.secondary"
//             sx={{ maxWidth: "600px", mx: "auto" }}
//           >
//             Recognitions of our quality and excellence
//           </Typography>
//         </Box>

//         {/* Certification Card */}
//         <Grid container spacing={4} justifyContent="center">
//           {certifications.map((cert) => (
//             <Grid item xs={12} key={cert.id}>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//               >
//                 <Card
//                   elevation={3}
//                   sx={{
//                     display: "flex",
//                     flexDirection: { xs: "column", md: "row" },
//                     borderRadius: 2,
//                     overflow: "hidden",
//                     "&:hover": {
//                       boxShadow: 6,
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       position: "relative",
//                       width: { xs: "100%", md: "50%" }, // Half width on md and up
//                       height: { xs: 300, md: 400 }, // Consistent height
//                       bgcolor: "grey.200",
//                       flexShrink: 0, // Prevents image box from shrinking
//                     }}
//                   >
//                     <Image
//                       src={cert.image}
//                       alt={cert.alt}
//                       fill
//                       style={{ objectFit: "contain", padding: "20px" }} // Keeps image size consistent
//                       onClick={() => window.open(cert.image, "_blank")}
//                     />
//                   </Box>
//                   <CardContent
//                     sx={{
//                       p: 4,
//                       width: { xs: "100%", md: "50%" }, // Half width for content
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                       <VerifiedIcon
//                         sx={{
//                           color: theme.palette.primary.main,
//                           mr: 1.5,
//                           fontSize: 30,
//                         }}
//                       />
//                       <Typography variant="h5" fontWeight="bold">
//                         {cert.title}
//                       </Typography>
//                     </Box>
//                     <Typography variant="body1" color="text.secondary">
//                       {cert.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Commitment to Excellence Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <Paper
//             elevation={2}
//             sx={{
//               mt: 8,
//               p: 4,
//               borderRadius: 3,
//               backgroundColor: `${theme.palette.primary.main}08`,
//               border: "1px solid",
//               borderColor: "divider",
//             }}
//           >
//             <Typography variant="h6" gutterBottom fontWeight="bold">
//               Commitment to Excellence
//             </Typography>
//             <Typography variant="body1" paragraph>
//               At Indo Wagen, our certifications are a testament to our dedication to quality, safety, and sustainability. We adhere to the highest industry standards, ensuring that every product we manufacture meets rigorous quality benchmarks. Our focus on continuous improvement drives us to innovate and deliver exceptional value to our customers.
//             </Typography>
//             <Typography variant="body1">
//               These certifications are not just awards—they reflect our core values of integrity, innovation, and environmental responsibility. With years of experience in the electric mobility sector, we’ve built a legacy of trust through our robust manufacturing processes and sustainable practices.
//             </Typography>
//           </Paper>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default Certifications;