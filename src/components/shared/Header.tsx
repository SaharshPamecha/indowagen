'use client';

import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  Box,
  Container,
  Menu,
  MenuItem,
  Collapse,
  ListItemIcon,
  Theme,
  useTheme,
  Badge
} from '@mui/material';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';

const NAV_ITEMS = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  {
    text: 'Products',
    path: '/products',
    children: [
      { text: 'E-Rickshaws', path: '/products/e-rickshaws' },
      { text: 'E-Carts', path: '/products/e-carts' },
      { text: 'E-Loaders', path: '/products/e-loaders' }
    ]
  },
  { text: 'Accessories', path: '/accessories' },
  { text: 'Distributors', path: '/distributors' },
  { text: 'Careers', path: '/careers' },
  { text: 'Contact', path: '/contact' }
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openSubmenu, setOpenSubmenu] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();
  const { totalItems } = useCart();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, item: any) => {
    if (item.children) {
      setAnchorEl(event.currentTarget);
      setOpenSubmenu(item.text);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenSubmenu('');
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {NAV_ITEMS.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem 
              component={Link} 
              href={item.path}
              onClick={() => !item.children && setMobileOpen(false)}
            >
              <ListItemText primary={item.text} />
            </ListItem>
            {item.children && (
              <Collapse in={openSubmenu === item.text} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((child: any) => (
                    <ListItem
                      key={child.text}
                      component={Link}
                      href={child.path}
                      onClick={() => setMobileOpen(false)}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText primary={child.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link href="/" passHref>
                <Image
                  src="/images/logo.png"
                  alt="Indo Wagen Logo"
                  width={120}
                  height={40}
                  priority
                />
              </Link>
            </Box>
          </motion.div>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton
            color="inherit"
            onClick={() => setCartOpen(true)}
            sx={{ ml: 2 }}
          >
            <Badge badgeContent={totalItems} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {NAV_ITEMS.map((item) => (
                <React.Fragment key={item.text}>
                  <Button
                    component={Link}
                    href={item.path}
                    color="inherit"
                    onClick={(e) => item.children && handleMenuOpen(e, item)}
                    sx={{
                      mx: 1,
                      color: pathname === item.path ? 'primary.main' : 'inherit',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                  {item.children && (
                    <Menu
                      anchorEl={anchorEl}
                      open={openSubmenu === item.text}
                      onClose={handleMenuClose}
                    >
                      {item.children.map((child: any) => (
                        <MenuItem
                          key={child.text}
                          component={Link}
                          href={child.path}
                          onClick={handleMenuClose}
                        >
                          {child.text}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </React.Fragment>
              ))}
            </Box>
          )}
          </Toolbar>
        </Container>
      </AppBar>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;
