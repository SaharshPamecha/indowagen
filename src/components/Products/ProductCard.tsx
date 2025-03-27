'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: number;
    model_name: string;
    max_speed?: string;
    category?: string;
    img_link?: string;
    url?: string;
    charging_time?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
          },
          "&:hover .product-image": {
            transform: "scale(1.05)",
          },
          "&:hover .view-details-btn": {
            backgroundColor: theme.palette.primary.dark,
            transform: "translateY(-2px)",
          },
        }}
      >
        {/* {product.featured && ( */}
          <Chip
            label="Featured"
            color="primary"
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 1,
              fontWeight: "bold",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          />
        {/* )} */}
        <Box
          sx={{
            position: "relative",
            pt: "65%",
            backgroundColor: "rgba(245, 245, 245, 0.4)",
          }}
        >
          {/* Use first image from images array if available, otherwise fall back to single image */}
          {product.img_link && product.img_link.length > 0 ? (
            <Image
              src={`/products/${product.img_link}`}
              alt={product.model_name}
              fill
              style={{
                objectFit: "contain",
                transition: "transform 0.5s ease-in-out",
              }}
              className="product-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized={true}
            />
          ) : product.img_link ? (
            <Image
              src={product.img_link}
              alt={product.model_name}
              fill
              style={{
                objectFit: "contain",
                transition: "transform 0.5s ease-in-out",
              }}
              className="product-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized={true}
            />
          ) : (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#f0f0f0",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Image not available
              </Typography>
            </Box>
          )}
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 3, pb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              height: "2.6em",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.model_name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="primary"
            gutterBottom
            sx={{
              fontWeight: 600,
              fontSize: "0.95rem",
              opacity: 0.9,
            }}
          >
            {product.category}
          </Typography>
          {/* <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            product.description
          </Typography> */}
         
            <Box sx={{ mb: 2 }}>
              
                <Typography
                  
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "flex", mb: 0.5 }}
                >
                  <strong>Max Speed:</strong>
                  <span style={{ marginLeft: "4px" }}>{product.max_speed}</span>
                </Typography>

                <Typography
                  
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "flex", mb: 0.5 }}
                >
                  <strong>Charging Time:</strong>
                  <span style={{ marginLeft: "4px" }}>{product.charging_time}</span>
                </Typography>
              
            </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: "auto",
              pt: 2,
            }}
          >
            {/* <Button
              component={Link}
              href={"/contact"}
              variant="contained"
              size="small"
              className="view-details-btn"
              sx={{
                borderRadius: "20px",
                px: 2,
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
              }}
            >
              {product.price}
            </Button> */}
            <Button
              component={Link}
              href={`/products/${product.url}`}
              variant="contained"
              size="small"
              className="view-details-btn"
              sx={{
                borderRadius: "20px",
                px: 2,
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
              }}
            >
              View Details
            </Button>

            <Button
              component={Link}
              href={`/contact`}
              variant="contained"
              size="small"
              className="view-details-btn"
              sx={{
                borderRadius: "20px",
                px: 2,
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
              }}
            >
              Enquire Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
