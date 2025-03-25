"use client";

import React from "react";
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
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import ProductsHero from "@/components/Products/ProductsHero";
import { products, Product } from "../../../data/products";

// Allow for more flexible category types including additional ones that may be in the data
type Category =
  | "all"
  | "e-rickshaw"
  | "e-cart"
  | "e-loader"
  | "electric-vehicle"
  | string;

export default function Products() {
  const [category, setCategory] = React.useState<Category>("all");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Define default category if missing
  const productsWithCategories = products.map((product) => ({
    ...product,
    category: product.category || "e-rickshaw", // Default category if missing
  }));

  const filteredProducts = React.useMemo(() => {
    if (category === "all") return productsWithCategories;
    return productsWithCategories.filter(
      (product) => product.category === category
    );
  }, [category, productsWithCategories]);

  const handleCategoryChange = (
    _event: React.SyntheticEvent,
    newValue: Category
  ) => {
    setCategory(newValue);
  };

  // Animation variants
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

  return (
    <Box component="main">
      {/* Hero Section */}
      <ProductsHero />

      <Container maxWidth="lg" id="product-categories">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Premium Electric Vehicles
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
          >
            Discover our premium range of electric vehicles designed for
            efficiency, sustainability, and exceptional performance
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              mb: 5,
              pb: 1,
              borderRadius: 1,
              boxShadow: "0 4px 6px rgba(0,0,0,0.03)",
            }}
          >
            {/* Extract unique categories from products */}
            {(() => {
              // Get all unique categories from the products data
              const categories = [
                "all",
                ...new Set(
                  productsWithCategories.map(
                    (p) => p.category || "electric-vehicle"
                  )
                ),
              ];

              return (
                <Tabs
                  value={category}
                  onChange={handleCategoryChange}
                  variant={isMobile ? "scrollable" : "standard"}
                  scrollButtons={isMobile ? "auto" : false}
                  centered={!isMobile}
                  sx={{
                    "& .MuiTab-root": {
                      fontWeight: 600,
                      mx: 0.5,
                      transition: "all 0.3s",
                      "&:hover": {
                        color: "primary.main",
                      },
                    },
                    "& .Mui-selected": {
                      color: "primary.main",
                    },
                    "& .MuiTabs-indicator": {
                      height: 3,
                      borderRadius: 2,
                    },
                  }}
                >
                  {categories.map((cat) => {
                    // Format category name for display
                    const displayName =
                      cat === "all"
                        ? "All Products"
                        : cat
                            .split("-")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ");

                    return <Tab key={cat} label={displayName} value={cat} />;
                  })}
                </Tabs>
              );
            })()}
          </Box>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {filteredProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Link
                    href={`/products/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
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
                          {/* Use first image from images array if available, otherwise fall back to single image */}
                          {product.images && product.images.length > 0 ? (
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              style={{ objectFit: "contain" }}
                              unoptimized={true}
                            />
                          ) : product.image ? (
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              style={{ objectFit: "contain" }}
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
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
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
                        >
                          {product.tagline}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 2,
                          }}
                        >
                          <Typography
                            variant="h6"
                            color="primary"
                            fontWeight="bold"
                          >
                            {product.price}
                          </Typography>
                          <Chip
                            label={product.category
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
      </Container>
    </Box>
  );
}
