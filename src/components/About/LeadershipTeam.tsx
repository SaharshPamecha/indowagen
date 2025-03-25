'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
// import TwitterIcon from '@mui/icons-material/Twitter';

import { LinkedIn, Email, Twitter } from '@mui/icons-material';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image?: string;
  social: {
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const LeadershipTeam = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Leadership team data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Mr. Moinuddin Golam",
      position: "Founder Promoter",
      bio: "having more than 25 years of experience in retail trade, manufacturing, shipping",
      image: "/team/Moinuddin.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/company/indowagen/",
      },
    },
    {
      id: 2,
      name: "Mr. Dilwar Hussain",
      position: "Founder Promoter",
      bio: "having more than 25 years of experience in retail trade, manufacturing, shipping.",
      image: "/team/Dilwar.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/company/indowagen/",
      },
    },
    {
      id: 3,
      name: "Mr. Rajeev Kumar Srivastava",
      position: "Director and business head",
      bio: "having more than 25 years of experience in leadership role across sales and marketing in reputed organizations.",
      image: "/team/Rajeev.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/company/indowagen/",
      },
    },
  ];

  // Generate random color for avatar if image is not available
  const stringToColor = (input: string): string => {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      hash = input.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: theme.palette.background.default,
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
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 4,
            }}
          >
            Our Leadership Team
          </Typography>

          <Typography
            variant="h6"
            component="p"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: "auto" }}
          >
            Meet the experienced professionals who are leading Indo Wagen's
            vision of revolutionizing electric mobility across India.
          </Typography>

          <Grid container spacing={4}>
            {teamMembers.map((member) => (
              <Grid
                item
                sx={{ display: "flex", alignItems: "stretch" }}
                sm={6}
                md={4}
                key={member.id}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: member.id * 0.1 }}
                >
                  <Card
                    elevation={2}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-8px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        pt: 3,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {member.image ? (
                        <Avatar
                          src={member.image}
                          alt={member.name}
                          sx={{
                            width: 120,
                            height: 120,
                            border: `4px solid ${theme.palette.primary.main}`,
                          }}
                        />
                      ) : (
                        <Avatar
                          sx={{
                            width: 120,
                            height: 120,
                            bgcolor: stringToColor(member.name),
                            border: `4px solid ${theme.palette.primary.main}`,
                            fontSize: "2.5rem",
                          }}
                        >
                          {member.name.charAt(0)}
                        </Avatar>
                      )}
                    </Box>

                    <CardContent
                      sx={{ flexGrow: 1, textAlign: "center", pt: 3 }}
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h3"
                        sx={{ fontWeight: 600 }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="primary"
                        gutterBottom
                        sx={{ fontWeight: 500, mb: 2 }}
                      >
                        {member.position}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                      >
                        {member.bio}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 1,
                          mt: 2,
                        }}
                      >
                        {member.social.email && (
                          <Tooltip title={`Email ${member.name}`}>
                            <IconButton
                              size="small"
                              color="primary"
                              aria-label="email"
                              component="a"
                              href={`mailto:${member.social.email}`}
                            >
                              <Email />
                            </IconButton>
                          </Tooltip>
                        )}
                        {member.social.linkedin && (
                          <Tooltip title={`${member.name}'s LinkedIn Profile`}>
                            <IconButton
                              size="small"
                              color="primary"
                              aria-label="linkedin"
                              component="a"
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <LinkedIn />
                            </IconButton>
                          </Tooltip>
                        )}
                        {member.social.twitter && (
                          <Tooltip title={`${member.name}'s Twitter Profile`}>
                            <IconButton
                              size="small"
                              color="primary"
                              aria-label="twitter"
                              component="a"
                              href={member.social.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Twitter />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LeadershipTeam;
