"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import WorkIcon from "@mui/icons-material/Work";

const pages = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Accessories", path: "/accessories" },
  // { name: 'Pricing', path: '/pricing' },
  {
    name: "Dealers",
    path: "#",
    subMenu: [
      { name: "Dealer's Lounge", path: "/dealers/lounge" },
      { name: "Dealer Locator", path: "/dealers/locator" },
    ],
  },
  // { name: "Support", path: "/support" },
  { name: "Blog", path: "/blog" },
  // { name: "News", path: "/news" },
  { name: "Careers", path: "/careers", icon: WorkIcon },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [anchorElDealers, setAnchorElDealers] = useState<null | HTMLElement>(
    null
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== undefined) {
        // If we're scrolling down and we're more than 100px from the top
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        }
        // If we're scrolling up or near the top
        else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== undefined) {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenDealersMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElDealers(event.currentTarget);
  };

  const handleCloseDealersMenu = () => {
    setAnchorElDealers(null);
  };

  return (
    <Slide appear={false} direction="down" in={isVisible}>
      <AppBar
        position="fixed"
        color="default"
        elevation={isVisible && lastScrollY > 100 ? 4 : 0}
        sx={{
          bgcolor: "background.paper",
          borderBottom: "1px solid",
          borderColor: "divider",
          transition: theme.transitions.create(
            ["background-color", "box-shadow", "border-color"],
            {
              duration: theme.transitions.duration.short,
            }
          ),
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Toolbar disableGutters sx={{ py: 1 }}>
            {/* Logo - Desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 4 }}>
              <Link href="/">
                <Box sx={{ position: "relative", width: 180, height: 60 }}>
                  <Image
                    src="/images/brand/logo.png"
                    alt="Indo Wagen"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </Box>
              </Link>
            </Box>

            {/* Mobile menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => {
                  // Handle submenu items for mobile
                  if (page.subMenu) {
                    return (
                      <div key={page.name}>
                        <MenuItem>
                          <Typography textAlign="center" fontWeight="bold">
                            {page.name}
                          </Typography>
                        </MenuItem>
                        {page.subMenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <MenuItem
                              onClick={handleCloseNavMenu}
                              sx={{ pl: 4 }}
                            >
                              <Typography textAlign="center">
                                {subItem.name}
                              </Typography>
                            </MenuItem>
                          </Link>
                        ))}
                      </div>
                    );
                  }
                  // Regular menu items
                  return (
                    <Link
                      key={page.path}
                      href={page.path}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography  textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    </Link>
                  );
                })}
              </Menu>
            </Box>

            {/* Logo - Mobile */}
            <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
              <Link href="/">
                <Box sx={{ position: "relative", width: 140, height: 50 }}>
                  <Image
                    src="/images/brand/logo.png"
                    alt="Indo Wagen"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </Box>
              </Link>
            </Box>

            {/* Desktop menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => {
                // Handle dropdown for dealers
                if (page.subMenu) {
                  return (
                    <Box key={page.name} sx={{ position: "relative" }}>
                      <Button
                        onClick={handleOpenDealersMenu}
                        sx={{
                          mx: 1,
                          color: pathname.startsWith("/dealers")
                            ? "primary.main"
                            : "text.primary",
                          display: "flex",
                          alignItems: "center",
                          fontWeight: pathname.startsWith("/dealers")
                            ? 600
                            : 400,
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        {page.name}
                      </Button>
                      <Menu
                        anchorEl={anchorElDealers}
                        open={Boolean(anchorElDealers)}
                        onClose={handleCloseDealersMenu}
                        sx={{ mt: 1 }}
                      >
                        {page.subMenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <MenuItem
                              onClick={handleCloseDealersMenu}
                              sx={{
                                color:
                                  pathname === subItem.path
                                    ? "primary.main"
                                    : "inherit",
                                fontWeight:
                                  pathname === subItem.path ? 600 : 400,
                              }}
                            >
                              {subItem.name}
                            </MenuItem>
                          </Link>
                        ))}
                      </Menu>
                    </Box>
                  );
                }
                // Regular menu items
                return (
                  <Link
                    key={page.path}
                    href={page.path}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        pl: 2,
                        pr: 3,
                        mx: 1,
                        color:
                          pathname === page.path
                            ? "primary.main"
                            : "text.primary",
                        display: "block",
                        fontWeight: pathname === page.path ? 600 : 400,
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {page.name}
                    </Button>
                  </Link>
                );
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
