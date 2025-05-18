"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Divider,
  Avatar,
  Pagination,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import useSWR from "swr";
import { fetchGraphPosts, PostEdge } from "@/app/libs/graphapi";
import he from "he";

// Define Post type for BlogList
export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: string;
  authorAvatar?: string;
  date: string;
};

// Props type for BlogList
type BlogListProps = {
  selectedCategory: string;
};

// Utility function to strip HTML tags, decode HTML entities, and replace […] with ...
const stripHtmlTags = (html: string): string => {
  return he.decode(
    html
      .replace(/<\/?[^>]+(>|$)/g, "")
      .replace(/\[…\]/g, "...")
      .replace(/\n/g, " ")
      .trim()
  );
};

// Utility function to format date (e.g., "May 16, 2025")
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const BlogList = ({ selectedCategory }: BlogListProps) => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const postsPerPage = 12;

  // Fetch posts using SWR
  const { data: postEdges = [], error, isLoading } = useSWR<PostEdge[]>(
    "posts",
    fetchGraphPosts,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  );

  // Map GraphQL data to BlogList's Post type
  const posts: Post[] = postEdges.map((edge) => {
    const cleanTitle = stripHtmlTags(edge.node.title);
    const cleanExcerpt = stripHtmlTags(edge.node.excerpt);
    const cleanAuthor = stripHtmlTags(edge.node.author.node.name);
    const cleanCategory = stripHtmlTags(
      edge.node.categories.edges[0]?.node?.name || "Uncategorized"
    );

    return {
      id: edge.node.id,
      slug: edge.node.slug,
      title: cleanTitle,
      excerpt: cleanExcerpt,
      coverImage: edge.node.featuredImage?.node?.sourceUrl || "/default-image.jpg",
      category: cleanCategory,
      author: cleanAuthor,
      //authorAvatar: edge.node.author.node.avatar?.url,
      date: formatDate(edge.node.date),
    };
  });

  // Filter posts by selected category (case-insensitive)
  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter(
        (post) => post.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({
      top: document.getElementById("blog-list")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="body1" color="error">
          Failed to load posts. Please try again later.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }} id="blog-list">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ mb: 1, fontWeight: 600 }}
          >
            {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 5, maxWidth: 700 }}
          >
            Browse our collection of articles on electric mobility, industry insights, and practical guides
          </Typography>

          <Grid container spacing={4}>
            {currentPosts.length > 0 ? (
              currentPosts.map((post, index) => (
                <Grid item xs={12} md={6} lg={4} key={post.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: 6,
                        },
                        borderRadius: 2,
                        overflow: "hidden",
                      }}
                      elevation={1}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <CardActionArea
                          sx={{
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "stretch",
                            height: "100%",
                          }}
                        >
                          <Box sx={{ position: "relative", height: 200, width: "100%" }}>
                            <CardMedia
                              component="img"
                              height="200"
                              image={post.coverImage}
                              alt={post.title}
                              sx={{ objectFit: "cover" }}
                            />
                            <Chip
                              label={post.category}
                              size="small"
                              sx={{
                                position: "absolute",
                                top: 16,
                                left: 16,
                                bgcolor: "primary.main",
                                color: "white",
                                fontWeight: 500,
                              }}
                            />
                          </Box>
                          <CardContent sx={{ flexGrow: 1, p: 3 }}>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="h3"
                              sx={{ fontWeight: 600, mb: 1 }}
                            >
                              {post.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                mb: 2,
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 3,
                              }}
                            >
                              {post.excerpt}
                            </Typography>

                            <Divider sx={{ my: 2 }} />

                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                              sx={{ mt: "auto" }}
                            >
                              {/* <Avatar
                                src={post.authorAvatar}
                                alt={post.author}
                                sx={{ width: 24, height: 24 }}
                              >
                                <PersonIcon fontSize="small" />
                              </Avatar> */}
                              <Typography variant="caption" fontWeight={500}>
                                {post.author}
                              </Typography>
                              <Box sx={{ flexGrow: 1 }} />
                              <CalendarTodayIcon
                                fontSize="small"
                                sx={{ color: "text.disabled" }}
                              />
                              <Typography variant="caption" color="text.disabled">
                                {post.date}
                              </Typography>
                            </Stack>
                          </CardContent>
                        </CardActionArea>
                      </Link>
                    </Card>
                  </motion.div>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography variant="body1" color="text.secondary" textAlign="center">
                  No blog posts available for this category.
                </Typography>
              </Grid>
            )}
          </Grid>

          {totalPages > 1 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
                size="large"
                sx={{
                  "& .MuiPaginationItem-root": {
                    fontWeight: 500,
                  },
                }}
              />
            </Box>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default BlogList;