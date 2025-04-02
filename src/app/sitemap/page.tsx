import React from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  Paper,
  Divider,
  Grid,
} from '@mui/material';
import Link from 'next/link';
import { blogPosts } from '@/data/blogs';
import { newsItems } from '@/data/news';

export const metadata = {
  title: 'Sitemap | Indo Wagen Electric Vehicles',
  description: 'Navigate through all pages of the Indo Wagen website with our comprehensive sitemap.',
};

export default function SitemapPage() {
  const mainPages = [
    { title: 'Home', url: '/' },
    { title: 'About Us', url: '/about' },
    { title: 'Products', url: '/products' },
    { title: 'Accessories', url: '/accessories' },
    { title: 'Pricing', url: '/pricing' },
    { title: 'Contact', url: '/contact' },
  ];

  const productPages = [
    { title: 'All Products', url: '/products' },
    { title: 'E-Rickshaws', url: '/products/e-rickshaws' },
    { title: 'E-Carts', url: '/products/e-carts' },
    { title: 'E-Loaders', url: '/products/e-loaders' },
    { title: 'Product Comparison', url: '/products/compare' },
  ];

  const dealerPages = [
    { title: "Dealer's Lounge", url: '/dealers/lounge' },
    { title: 'Dealer Locator', url: '/dealers/locator' },
  ];

  const supportPages = [
    { title: 'FAQs', url: '/faqs' },
    { title: 'Service Centers', url: '/service-centers' },
    { title: 'Warranty Information', url: '/warranty' },
    { title: 'Documentation', url: '/docs' },
  ];

  const legalPages = [
    { title: 'Terms & Conditions', url: '/terms' },
    { title: 'Privacy Policy', url: '/privacy' },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
          Sitemap
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 5 }}>
          Use this page to find and navigate to any section of the Indo Wagen website.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                Main Pages
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {mainPages.map((page) => (
                  <ListItem key={page.url} sx={{ py: 0.5 }}>
                    <ListItemText>
                      <Link href={page.url} passHref>
                        <MuiLink underline="hover" color="primary">
                          {page.title}
                        </MuiLink>
                      </Link>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                Products
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {productPages.map((page) => (
                  <ListItem key={page.url} sx={{ py: 0.5 }}>
                    <ListItemText>
                      <Link href={page.url} passHref>
                        <MuiLink underline="hover" color="primary">
                          {page.title}
                        </MuiLink>
                      </Link>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                Dealer Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {dealerPages.map((page) => (
                  <ListItem key={page.url} sx={{ py: 0.5 }}>
                    <ListItemText>
                      <Link href={page.url} passHref>
                        <MuiLink underline="hover" color="primary">
                          {page.title}
                        </MuiLink>
                      </Link>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                Blog
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText>
                  <Link href="/blog" passHref>
                    <MuiLink underline="hover" color="primary">
                      Blog Home
                    </MuiLink>
                  </Link>
                </ListItemText>
              </ListItem>
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, fontWeight: 500 }}>
                Recent Blog Posts:
              </Typography>
              <List>
                {blogPosts.slice(0, 5).map((post) => (
                  <ListItem key={post.id} sx={{ py: 0.5 }}>
                    <ListItemText>
                      <Link href={`/blog/${post.slug}`} passHref>
                        <MuiLink underline="hover" color="primary">
                          {post.title}
                        </MuiLink>
                      </Link>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                News
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <ListItem sx={{ py: 0.5 }}>
                <ListItemText>
                  <Link href="/news" passHref>
                    <MuiLink underline="hover" color="primary">
                      News Home
                    </MuiLink>
                  </Link>
                </ListItemText>
              </ListItem>
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, fontWeight: 500 }}>
                Recent News Articles:
              </Typography>
              <List>
                {newsItems.slice(0, 5).map((article) => (
                  <ListItem key={article.id} sx={{ py: 0.5 }}>
                    <ListItemText>
                      <Link href={`/news/${article.slug}`} passHref>
                        <MuiLink underline="hover" color="primary">
                          {article.title}
                        </MuiLink>
                      </Link>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                Support
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {supportPages.map((page) => (
                  <ListItem key={page.url} sx={{ py: 0.5 }}>
                    <ListItemText>
                      <Link href={page.url} passHref>
                        <MuiLink underline="hover" color="primary">
                          {page.title}
                        </MuiLink>
                      </Link>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                Legal Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {legalPages.map((page) => (
                  <ListItem key={page.url} sx={{ py: 0.5 }}>
                    <ListItemText>
                      <Link href={page.url} passHref>
                        <MuiLink underline="hover" color="primary">
                          {page.title}
                        </MuiLink>
                      </Link>
                    </ListItemText>
                  </ListItem>
                ))}
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemText>
                    <Link href="/careers" passHref>
                      <MuiLink underline="hover" color="primary">
                        Careers
                      </MuiLink>
                    </Link>
                  </ListItemText>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
