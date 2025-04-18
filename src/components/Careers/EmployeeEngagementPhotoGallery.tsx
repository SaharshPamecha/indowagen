'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

// Define interfaces for the data structure
interface Image {
  src: string;
  alt: string;
}

interface GallerySection {
  id: string;
  title: string;
  images: Image[];
}

const EmployeeEngagementPhotoGallery: React.FC = () => {
  const theme = useTheme();

  // Data for the photo gallery sections
  const gallerySections1 = [
    {
      id: 'womens-day',
      title: "Women's Day",
      images: [
        // { src: '/employee-engagement/Womens day/womens-day-2025-04-05-10-49-21.webp', alt: "Women's Day Celebration 2025-04-05 10:49:21" },
        // { src: '/employee-engagement/Womens day/womens-day-2025-04-05-10-49-22.webp', alt: "Women's Day Celebration 2025-04-05 10:49:22" },
        // { src: '/employee-engagement/Womens day/womens-day-2025-04-05-10-49-17.webp', alt: "Women's Day Celebration 2025-04-05 10:49:17" },
        // { src: '/employee-engagement/Womens day/womens-day-2025-04-05-10-49-18-1.webp', alt: "Women's Day Celebration 2025-04-05 10:49:18 (1)" },
        // { src: '/employee-engagement/Womens day/womens-day-2025-04-05-10-49-18-2.webp', alt: "Women's Day Celebration 2025-04-05 10:49:18 (2)" },
        // { src: '/employee-engagement/Womens day/womens-day-2025-04-05-10-49-19-1.webp', alt: "Women's Day Celebration 2025-04-05 10:49:19 (1)" },
        // { src: '/employee-engagement/Womens day/womens-day-2025-04-05-10-49-19.webp', alt: "Women's Day Celebration 2025-04-05 10:49:19" },
        // { src: '/employee-engagement/Womens day/womens-day-2025-04-05-10-49-20-1.webp', alt: "Women's Day Celebration 2025-04-05 10:49:20 (1)" },
        { src: '/employee-engagement/Womens day/womens-day-2025-04-05-10-49-20-2.webp', alt: "Women's Day Celebration 2025-04-05 10:49:20 (2)" },
        // { src: '/employee-engagement/Womens day/womens-day-2025-04-05-10-49-21-1.webp', alt: "Women's Day Celebration 2025-04-05 10:49:21 (1)" },
        // { src: '/employee-engagement/Womens day/womens-day-2025-04-05-10-49-15-1.webp', alt: "Women's Day Celebration 2025-04-05 10:49:15 (1)" },
        // { src: '/employee-engagement/Womens day/womens-day-2025-04-05-10-49-15.webp', alt: "Women's Day Celebration 2025-04-05 10:49:15" },
        { src: '/employee-engagement/Womens day/womens-day-2025-04-05-10-49-16-1.webp', alt: "Women's Day Celebration 2025-04-05 10:49:16 (1)" },
        { src: '/employee-engagement/Womens day/womens-day-2025-04-05-10-49-16-2.webp', alt: "Women's Day Celebration 2025-04-05 10:49:16 (2)" },
        { src: '/employee-engagement/Womens day/womens-day-2025-04-05-10-49-17-1.webp', alt: "Women's Day Celebration 2025-04-05 10:49:17 (1)" },
      ],
    },
    {
      id: 'holi-celebration',
      title: 'Holi Celebration',
      images: [
        { src: '/employee-engagement/Holi-Celebration/holi-2025-04-05-10-47-41.webp', alt: 'Holi Celebration 2025-04-05 10:47:41' },
        { src: '/employee-engagement/Holi-Celebration/holi-2025-04-05-10-48-49.webp', alt: 'Holi Celebration 2025-04-05 10:48:49' },
        { src: '/employee-engagement/Holi-Celebration/holi-c269e29-5e9-4a7e-977c-cee1f8858e9.webp', alt: 'Holi Celebration c269e29-5e9-4a7e-977c-cee1f8858e9' },
        { src: '/employee-engagement/Holi-Celebration/holi-e7dab70-b39-4211-877-01243414a32-1.webp', alt: 'Holi Celebration e7dab70-b39-4211-877-01243414a32 (1)' },
        { src: '/employee-engagement/Holi-Celebration/holi-e7dab70-b39-4211-877-01243414a32.webp', alt: 'Holi Celebration e7dab70-b39-4211-877-01243414a32' },
        { src: '/employee-engagement/Holi-Celebration/holi-e25063c-c73-4c8-81d-5a9947b35-1.webp', alt: 'Holi Celebration e25063c-c73-4c8-81d-5a9947b35 (1)' },
        { src: '/employee-engagement/Holi-Celebration/holi-e25063c-c73-4c8-81d-5a9947b35.webp', alt: 'Holi Celebration e25063c-c73-4c8-81d-5a9947b35' },
        { src: '/employee-engagement/Holi-Celebration/holi-e698ea-ab7-4e2-871-0e42ff0182.webp', alt: 'Holi Celebration e698ea-ab7-4e2-871-0e42ff0182' },
        { src: '/employee-engagement/Holi-Celebration/holi-91f55e-281-4e79-8fa-7510e552844-1.webp', alt: 'Holi Celebration 91f55e-281-4e79-8fa-7510e552844 (1)' },
        { src: '/employee-engagement/Holi-Celebration/holi-91f55e-281-4e79-8fa-7510e552844.webp', alt: 'Holi Celebration 91f55e-281-4e79-8fa-7510e552844' },
        { src: '/employee-engagement/Holi-Celebration/holi-61650e-427-4a4-8702-92456030515.webp', alt: 'Holi Celebration 61650e-427-4a4-8702-92456030515' },
        { src: '/employee-engagement/Holi-Celebration/holi-2025-04-05-10-48-46-1.webp', alt: 'Holi Celebration 2025-04-05 10:48:46 (1)' },
        { src: '/employee-engagement/Holi-Celebration/holi-2025-04-05-10-48-47-1.webp', alt: 'Holi Celebration 2025-04-05 10:48:47 (1)' },
        { src: '/employee-engagement/Holi-Celebration/holi-6c7d38-6de-480c-b97-6be14439748-1.webp', alt: 'Holi Celebration 6c7d38-6de-480c-b97-6be14439748 (1)' },
        { src: '/employee-engagement/Holi-Celebration/holi-27e2321-76d-42fb-c47-43c247b294e.webp', alt: 'Holi Celebration 27e2321-76d-42fb-c47-43c247b294e' },
        { src: '/employee-engagement/Holi-Celebration/holi-39e4598-203-406c-83-4729586c3.webp', alt: 'Holi Celebration 39e4598-203-406c-83-4729586c3' },
        { src: '/employee-engagement/Holi-Celebration/holi-85a3dbc-b02-45d2-929-0a0ad96e64.webp', alt: 'Holi Celebration 85a3dbc-b02-45d2-929-0a0ad96e64' },
        { src: '/employee-engagement/Holi-Celebration/holi-434c4cb-a91f-4d8c-8ba-2726722cdc2.webp', alt: 'Holi Celebration 434c4cb-a91f-4d8c-8ba-2726722cdc2' },
        { src: '/employee-engagement/Holi-Celebration/holi-697a346-a30-4679-91b-34bf630132e.webp', alt: 'Holi Celebration 697a346-a30-4679-91b-34bf630132e' },
        { src: '/employee-engagement/Holi-Celebration/holi-835638ed-64f-4c0a-8ec-7e632f07947.webp', alt: 'Holi Celebration 835638ed-64f-4c0a-8ec-7e632f07947' },
        // { src: '/employee-engagement/Holi-Celebration/holi-a620ff5-516f-4ae6-bc11-af18420c506.webp', alt: 'Holi Celebration a620ff5-516f-4ae6-bc11-af18420c506' },
        { src: '/employee-engagement/Holi-Celebration/holi-1ac45845-ca06-42d9-842e-0cc399e8225.webp', alt: 'Holi Celebration 1ac45845-ca06-42d9-842e-0cc399e8225' },
        { src: '/employee-engagement/Holi-Celebration/holi-177891bf-1b3-428a-a11e-d2789302133.webp', alt: 'Holi Celebration 177891bf-1b3-428a-a11e-d2789302133' },
        { src: '/employee-engagement/Holi-Celebration/holi-1818655f-22ee-4951-bae-2524d6fc8c5.webp', alt: 'Holi Celebration 1818655f-22ee-4951-bae-2524d6fc8c5' },
      ],
    },
    {
      id: 'weekend-sales-buzz',
      title: 'Weekend Sales Buzz',
      images: [
        { src: '/employee-engagement/Weekend Sales Buzz/weekend-sales-buzz-427715053_89218213210819_554149972430852349.webp', alt: 'Weekend Sales Buzz 427715053_89218213210819_554149972430852349' },
      ],
    },
    {
      id: 'birthday-celebration',
      title: 'Birthday Celebration',
      images: [
        { src: '/employee-engagement/Birthday Celebration/birthday-ad7142-8a8-4c3-9105-9e7d18f3dc.webp', alt: 'Birthday Celebration ad7142-8a8-4c3-9105-9e7d18f3dc' },
        { src: '/employee-engagement/Birthday Celebration/birthday-f0bd950-a1f-4410-b67d-2d46f820b0e.webp', alt: 'Birthday Celebration f0bd950-a1f-4410-b67d-2d46f820b0e' },
        { src: '/employee-engagement/Birthday Celebration/Birthday Celebration/birthday-77913c-9080-4b5c-8684-bd51182ecf.webp', alt: 'Birthday Celebration 77913c-9080-4b5c-8684-bd51182ecf' },
        { src: '/employee-engagement/Birthday Celebration/birthday-70ecf03-3b7b-46c2-bf4e-ba11849de31e.webp', alt: 'Birthday Celebration 70ecf03-3b7b-46c2-bf4e-ba11849de31e' },
        { src: '/employee-engagement/Birthday Celebration/birthday-81c16a1-6728-4e1e-8273-3300c3a51402.webp', alt: 'Birthday Celebration 81c16a1-6728-4e1e-8273-3300c3a51402' },
      ],
    },
    {
      id: 'cricket-match',
      title: 'Cricket Match',
      images: [
        { src: '/employee-engagement/Cricket Match/cricket-409564179_433250846679_623120077814214605.webp', alt: 'Cricket Match 409564179_433250846679_623120077814214605' },
        { src: '/employee-engagement/Cricket Match/cricket-40958727_433249646681_32952239697608762.webp', alt: 'Cricket Match 40958727_433249646681_32952239697608762' },
        { src: '/employee-engagement/Cricket Match/cricket-409703498_43325121133462_760147815573675871.webp', alt: 'Cricket Match 409703498_43325121133462_760147815573675871' },
        { src: '/employee-engagement/Cricket Match/cricket-409713036_433249613347_35667671237723975.webp', alt: 'Cricket Match 409713036_433249613347_35667671237723975' },
        { src: '/employee-engagement/Cricket Match/cricket-409780689_4332499133475_30668714795114393.webp', alt: 'Cricket Match 409780689_4332499133475_30668714795114393' },
      ],
    },
    {
      id: 'darjeeling-trip',
      title: 'Darjeeling Trip',
      images: [
        { src: '/employee-engagement/Darjeeling Trip/darjeeling-47490073_11947363851468_7630934885304721.webp', alt: 'Darjeeling Trip 47490073_11947363851468_7630934885304721' },
        { src: '/employee-engagement/Darjeeling Trip/darjeeling-47583877_11947387184799_64516081906098078.webp', alt: 'Darjeeling Trip 47583877_11947387184799_64516081906098078' },
      ],
    },
  ];


  const gallerySections = [
    {
      id: 'womens-day',
      title: "Women's Day",
      images: [
        // { src: '/employee-engagement/Womens-day/womens-day-1.webp', alt: "Women's Day Celebration 2025-04-05 10:49:21" },
        // { src: '/employee-engagement/Womens-day/womens-day-2.webp', alt: "Women's Day Celebration 2025-04-05 10:49:22" },
        // { src: '/employee-engagement/Womens-day/womens-day-3.webp', alt: "Women's Day Celebration 2025-04-05 10:49:17" },
        // { src: '/employee-engagement/Womens-day/womens-day-4.webp', alt: "Women's Day Celebration 2025-04-05 10:49:18 (1)" },
        // { src: '/employee-engagement/Womens-day/womens-day-5.webp', alt: "Women's Day Celebration 2025-04-05 10:49:18 (2)" },
        // { src: '/employee-engagement/Womens-day/womens-day-6.webp', alt: "Women's Day Celebration 2025-04-05 10:49:19 (1)" },
        // { src: '/employee-engagement/Womens-day/womens-day-7.webp', alt: "Women's Day Celebration 2025-04-05 10:49:19" },
        { src: '/employee-engagement/Womens-day/womens-day-8.webp', alt: "Women's Day Celebration 2025-04-05 10:49:20 (1)" },
        { src: '/employee-engagement/Womens-day/womens-day-9.webp', alt: "Women's Day Celebration 2025-04-05 10:49:20 (2)" },
        // { src: '/employee-engagement/Womens-day/womens-day-10.webp', alt: "Women's Day Celebration 2025-04-05 10:49:21 (1)" },
        // { src: '/employee-engagement/Womens-day/womens-day-11.webp', alt: "Women's Day Celebration 2025-04-05 10:49:15 (1)" },
        // { src: '/employee-engagement/Womens-day/womens-day-12.webp', alt: "Women's Day Celebration 2025-04-05 10:49:15" },
        { src: '/employee-engagement/Womens-day/womens-day-13.webp', alt: "Women's Day Celebration 2025-04-05 10:49:16 (1)" },
        { src: '/employee-engagement/Womens-day/womens-day-14.webp', alt: "Women's Day Celebration 2025-04-05 10:49:16 (2)" },
        { src: '/employee-engagement/Womens-day/womens-day-15.webp', alt: "Women's Day Celebration 2025-04-05 10:49:17 (1)" },
      ],
    },
    {
      id: 'holi-celebration',
      title: 'Holi Celebration',
      images: [
        { src: '/employee-engagement/Holi-Celebration/holi-1.webp', alt: 'Holi Celebration 2025-04-05 10:47:41' },
        { src: '/employee-engagement/Holi-Celebration/holi-2.webp', alt: 'Holi Celebration 2025-04-05 10:48:49' },
        { src: '/employee-engagement/Holi-Celebration/holi-3.webp', alt: 'Holi Celebration c269e29-5e9-4a7e-977c-cee1f8858e9' },
        { src: '/employee-engagement/Holi-Celebration/holi-4.webp', alt: 'Holi Celebration e7dab70-b39-4211-877-01243414a32 (1)' },
        { src: '/employee-engagement/Holi-Celebration/holi-5.webp', alt: 'Holi Celebration e7dab70-b39-4211-877-01243414a32' },
        { src: '/employee-engagement/Holi-Celebration/holi-6.webp', alt: 'Holi Celebration e25063c-c73-4c8-81d-5a9947b35 (1)' },
        // { src: '/employee-engagement/Holi-Celebration/holi-7.webp', alt: 'Holi Celebration e25063c-c73-4c8-81d-5a9947b35' },
        { src: '/employee-engagement/Holi-Celebration/holi-8.webp', alt: 'Holi Celebration e698ea-ab7-4e2-871-0e42ff0182' },
        { src: '/employee-engagement/Holi-Celebration/holi-9.webp', alt: 'Holi Celebration 91f55e-281-4e79-8fa-7510e552844 (1)' },
        { src: '/employee-engagement/Holi-Celebration/holi-10.webp', alt: 'Holi Celebration 91f55e-281-4e79-8fa-7510e552844' },
        { src: '/employee-engagement/Holi-Celebration/holi-11.webp', alt: 'Holi Celebration 61650e-427-4a4-8702-92456030515' },
        { src: '/employee-engagement/Holi-Celebration/holi-12.webp', alt: 'Holi Celebration 2025-04-05 10:48:46 (1)' },
        { src: '/employee-engagement/Holi-Celebration/holi-13.webp', alt: 'Holi Celebration 2025-04-05 10:48:47 (1)' },
        { src: '/employee-engagement/Holi-Celebration/holi-14.webp', alt: 'Holi Celebration 6c7d38-6de-480c-b97-6be14439748 (1)' },
        { src: '/employee-engagement/Holi-Celebration/holi-15.webp', alt: 'Holi Celebration 27e2321-76d-42fb-c47-43c247b294e' },
        { src: '/employee-engagement/Holi-Celebration/hOLI-16.webp', alt: 'Holi Celebration 39e4598-203-406c-83-4729586c3' },
        { src: '/employee-engagement/Holi-Celebration/holi-17.webp', alt: 'Holi Celebration 85a3dbc-b02-45d2-929-0a0ad96e64' },
        { src: '/employee-engagement/Holi-Celebration/holi-18.webp', alt: 'Holi Celebration 434c4cb-a91f-4d8c-8ba-2726722cdc2' },
        { src: '/employee-engagement/Holi-Celebration/holi-19.webp', alt: 'Holi Celebration 697a346-a30-4679-91b-34bf630132e' },
        { src: '/employee-engagement/Holi-Celebration/holi-20.webp', alt: 'Holi Celebration 835638ed-64f-4c0a-8ec-7e632f07947' },
        { src: '/employee-engagement/Holi-Celebration/holi-21.webp', alt: 'Holi Celebration a620ff5-516f-4ae6-bc11-af18420c506' },
        { src: '/employee-engagement/Holi-Celebration/holi-22.webp', alt: 'Holi Celebration 1ac45845-ca06-42d9-842e-0cc399e8225' },
        { src: '/employee-engagement/Holi-Celebration/holi-23.webp', alt: 'Holi Celebration 177891bf-1b3-428a-a11e-d2789302133' },
        { src: '/employee-engagement/Holi-Celebration/holi-24.webp', alt: 'Holi Celebration 1818655f-22ee-4951-bae-2524d6fc8c5' },
        // { src: '/employee-engagement/Holi-Celebration/holi-25.webp', alt: 'Holi Celebration 2025-04-05 10:48:46' },
        { src: '/employee-engagement/Holi-Celebration/holi-26.webp', alt: 'Holi Celebration 2025-04-05 10:48:47' },
        { src: '/employee-engagement/Holi-Celebration/holi-27.webp', alt: 'Holi Celebration 2025-04-05 10:48:48' },
        { src: '/employee-engagement/Holi-Celebration/holi-28.webp', alt: 'Holi Celebration 2025-04-05 10:48:49' },
      ],
    },
    {
      id: 'weekend-sales-buzz',
      title: 'Weekend Sales Buzz',
      images: [
        { src: '/employee-engagement/Weekend-Sales-Buzz/427715053_889218213210819_5541495972430852349_n.webp', alt: 'Weekend Sales Buzz 427715053_89218213210819_554149972430852349' },
      ],
    },
    {
      id: 'birthday-celebration',
      title: 'Birthday Celebration',
      images: [
        { src: '/employee-engagement/Birthday-Celebration/bday-1.webp', alt: 'Birthday Celebration ad7142-8a8-4c3-9105-9e7d18f3dc' },
        { src: '/employee-engagement/Birthday-Celebration/bday-2.webp', alt: 'Birthday Celebration f0bd950-a1f-4410-b67d-2d46f820b0e' },
        { src: '/employee-engagement/Birthday-Celebration/bday-3.webp', alt: 'Birthday Celebration 77913c-9080-4b5c-8684-bd51182ecf' },
        { src: '/employee-engagement/Birthday-Celebration/bday-4.webp', alt: 'Birthday Celebration 70ecf03-3b7b-46c2-bf4e-ba11849de31e' },
        { src: '/employee-engagement/Birthday-Celebration/bday-5.webp', alt: 'Birthday Celebration 81c16a1-6728-4e1e-8273-3300c3a51402' },
      ],
    },
    {
      id: 'cricket-match',
      title: 'Cricket Match',
      images: [
        { src: '/employee-engagement/Cricket-Match/match-1.webp', alt: 'Cricket Match 409564179_433250846679_623120077814214605' },
        { src: '/employee-engagement/Cricket-Match/match-2.webp', alt: 'Cricket Match 40958727_433249646681_32952239697608762' },
        { src: '/employee-engagement/Cricket-Match/match-3.webp', alt: 'Cricket Match 409703498_43325121133462_760147815573675871' },
        { src: '/employee-engagement/Cricket-Match/match-4.webp', alt: 'Cricket Match 409713036_433249613347_35667671237723975' },
        { src: '/employee-engagement/Cricket-Match/match-5.webp', alt: 'Cricket Match 409780689_4332499133475_30668714795114393' },
      ],
    },
    {
      id: 'darjeeling-trip',
      title: 'Darjeeling Trip',
      images: [
        { src: '/employee-engagement/Darjeeling-Trip/trip-1.webp', alt: 'Darjeeling Trip 47490073_11947363851468_7630934885304721' },
        { src: '/employee-engagement/Darjeeling-Trip/trip-2.webp', alt: 'Darjeeling Trip 47583877_11947387184799_64516081906098078' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Employee Engagement Photo Gallery
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '800px', mx: 'auto' }}
            >
              Capturing moments of collaboration, innovation, and teamwork across our facilities
            </Typography>
          </Box>
        </motion.div>

        {/* Gallery Sections */}
        {gallerySections.map((section) => (
          <Box key={section.id} sx={{ mb: 8 }}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 'bold', mb: 4 }}
                >
                  {section.title}
                </Typography>
              </motion.div>

              <Grid container spacing={3}>
                {section.images.map((image, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <motion.div variants={itemVariants}>
                      <Card
                        sx={{
                          borderRadius: 2,
                          overflow: 'hidden',
                          boxShadow: theme.shadows[3],
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={image.src}
                          alt={image.alt}
                          sx={{
                            height: 250,
                            objectFit: 'cover',
                          }}
                        />
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default EmployeeEngagementPhotoGallery;