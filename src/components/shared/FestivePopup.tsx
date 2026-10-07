"use client";

import React, { useEffect, useState } from 'react';
import { Box, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// This campaign banner is a static asset shipped with the site rather than
// the admin-managed popup (previously served from the popup_settings DB
// table + forestgreen-capybara-315761.hostingersite.com). Swap this out for
// the next campaign by dropping a new image in public/popup/ with a new,
// descriptive filename and updating the two constants below — using a new
// filename each time ensures visitors always see the latest banner instead
// of a cached older one.
const POPUP_ENABLED = true;
const POPUP_IMAGE_SRC = '/popup/festive-drive-home-oct-nov-2026.jpg';
const POPUP_OPEN_DELAY_MS = 400;

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',
};

const containerSx = {
  position: 'relative',
  borderRadius: 2,
  overflow: 'auto',
  boxShadow: '0 20px 45px rgba(0,0,0,0.35)',
  width: { xs: '82vw', sm: 'auto' },
  maxWidth: { xs: '82vw', sm: 1200, md: 1600 },
  maxHeight: { xs: '75vh', sm: '92vh' },
  minWidth: { sm: 650 },
  minHeight: { sm: 320 },
  bgcolor: 'background.paper',
};

const closeButtonSx = {
  position: 'absolute' as const,
  top: 8,
  right: 8,
  backgroundColor: 'rgba(0,0,0,0.5)',
  color: 'white',
  '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
  zIndex: 2,
};

export default function FestivePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!POPUP_ENABLED) return;
    const t = setTimeout(() => setOpen(true), POPUP_OPEN_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => setOpen(false);

  if (!POPUP_ENABLED) {
    return null;
  }

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="festive-popup" sx={{ backdropFilter: 'blur(2px)' }}>
      <Box sx={modalStyle}>
        <Box sx={containerSx}>
          <IconButton aria-label="Close" onClick={handleClose} size="small" sx={closeButtonSx}>
            <CloseIcon />
          </IconButton>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={POPUP_IMAGE_SRC}
            alt="Festive promotion"
            style={{ display: 'block', width: '100%', height: 'auto' }}
            loading="eager"
          />
        </Box>
      </Box>
    </Modal>
  );
}


