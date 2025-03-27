"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from "@mui/material";

// Define product interface
interface Product {
  id: string | number;
  name: string;
  model_name: string;
  img_link?: string; // Optional since some products might not have images
}

interface ProductListingCardProps {
  productsdata: Product[];
}

export default function ProductListingCard({ productsdata }: ProductListingCardProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
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

  // Check if products array exists and has items
  if (!productsdata || productsdata.length === 0) {
    return (
      <Typography variant="body1" align="center">
        No products available
      </Typography>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Grid container spacing={4}>
        {productsdata.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <Link href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="div"
                      sx={{
                        position: "relative",
                        height: 240,
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      {product.img_link ? (
                        <Image
                          src={product.img_link}
                          alt={product.model_name || product.name}
                          fill
                          style={{ objectFit: "contain" }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 3} // Priority for first few images
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
                    </CardMedia>

                    {/* New tag for recent products */}
                    {index < 2 && (
                      <Chip
                        label="New"
                        size="small"
                        color="primary"
                        sx={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          fontWeight: "bold",
                          boxShadow: 2,
                        }}
                      />
                    )}
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h2"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                      sx={{ mb: 2 }}
                    >
                      {product.model_name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        color="primary"
                        fontWeight="bold"
                      >
                        {product.model_name}
                      </Typography>
                      <Chip
                        label={product.model_name
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                        size="small"
                        color="secondary"
                        sx={{
                          fontWeight: "medium",
                          borderRadius: "4px",
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}