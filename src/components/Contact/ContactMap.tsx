"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import DirectionsIcon from "@mui/icons-material/Directions";
//import { companyInfo } from "@/data/company";

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

const ContactMap = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const manufacturingAddress =
    companyInfo?.manufacturingAddress || companyInfo?.address || {};
  const corporateAddress = companyInfo?.corporateAddress || {};
  const registeredAddress = companyInfo?.registeredAddress || {};

  interface AddressType {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }

  const getFullAddress = (address: AddressType) => {
    return `${address.street}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}`;
  };

  const getGoogleMapsUrl = (address: AddressType) => {
    const fullAddress = getFullAddress(address);
    const encodedAddress = encodeURIComponent(fullAddress);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  const manufacturingFullAddress = getFullAddress(manufacturingAddress);
  const corporateFullAddress = getFullAddress(corporateAddress);
  const registeredFullAddress = getFullAddress(registeredAddress);

  const manufacturingGoogleMapsUrl = getGoogleMapsUrl(manufacturingAddress);
  const corporateGoogleMapsUrl = getGoogleMapsUrl(corporateAddress);
  const registeredGoogleMapsUrl = getGoogleMapsUrl(registeredAddress);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: theme.palette.background.paper,
      }}
      id="visit-our-locations"
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
            sx={{ textAlign: "center", mb: 4 }}
          >
            Visit Our Locations
          </Typography>

          <Typography
            variant="h6"
            sx={{ textAlign: "center", mb: 4, color: "text.secondary" }}
          >
            We have multiple offices across West Bengal to serve you better
          </Typography>

          <Card
            elevation={4}
            sx={{
              overflow: "hidden",
              borderRadius: 2,
              mb: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              {/* Manufacturing Address */}
              <Box
                sx={{
                  flex: "1 1 calc(33.33% - 16px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "rgba(0, 0, 0, 0.05)",
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <Box
                  component="img"
                  src="/location-pin.svg"
                  alt="Location"
                  sx={{
                    width: 60,
                    height: 60,
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.2))",
                    mb: 2,
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {manufacturingAddress.name || "Manufacturing Unit"}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3, textAlign: "center", px: 2 }}
                >
                  {manufacturingAddress.street}
                  <br />
                  {manufacturingAddress.city}, {manufacturingAddress.state}{" "}
                  {manufacturingAddress.zip}
                  <br />
                  {manufacturingAddress.country}
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<DirectionsIcon />}
                  href={manufacturingGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </Button>
              </Box>

              {/* Corporate Address */}
              <Box
                sx={{
                  flex: "1 1 calc(33.33% - 16px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "rgba(0, 0, 0, 0.05)",
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <Box
                  component="img"
                  src="/location-pin.svg"
                  alt="Location"
                  sx={{
                    width: 60,
                    height: 60,
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.2))",
                    mb: 2,
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Corporate Office
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3, textAlign: "center", px: 2 }}
                >
                  {corporateFullAddress}
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<DirectionsIcon />}
                  href={corporateGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </Button>
              </Box>

              {/* Registered Address */}
              <Box
                sx={{
                  flex: "1 1 calc(33.33% - 16px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "rgba(0, 0, 0, 0.05)",
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <Box
                  component="img"
                  src="/location-pin.svg"
                  alt="Location"
                  sx={{
                    width: 60,
                    height: 60,
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.2))",
                    mb: 2,
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Registered Office
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3, textAlign: "center", px: 2 }}
                >
                  {registeredFullAddress}
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<DirectionsIcon />}
                  href={registeredGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </Button>
              </Box>
            </Box>

            <CardContent sx={{ py: 3 }}>
              <Typography variant="body1" gutterBottom>
                <strong>Manufacturing Unit:</strong> {manufacturingFullAddress}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Corporate Office:</strong> {corporateFullAddress}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Registered Office:</strong> {registeredFullAddress}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Phone:</strong>{" "}
                {companyInfo.contact?.phone || "+91-120-4567890"}
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong>{" "}
                {companyInfo.contact?.email || "info@indowagen.com"}
              </Typography>
            </CardContent>
          </Card>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="body1" gutterBottom>
              Our offices are open Monday through Saturday from{" "}
              {companyInfo.businessHours?.weekdays}.
            </Typography>
            <Typography variant="body1">
              If you're planning a visit, please call ahead to schedule an
              appointment with our team.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactMap;
