"use client";

import React, { useEffect, useState } from 'react';
import { Box, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type FestivePopupProps = {
  imageSrc?: string;
  openDelayMs?: number;
};

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
  overflow: 'hidden',
  boxShadow: '0 20px 45px rgba(0,0,0,0.35)',
  maxWidth: { xs: '92vw', sm: 520, md: 640 },
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

export default function FestivePopup({
  imageSrc = '/gurga-puja-pop-up.jpg',
  openDelayMs = 100,
}: FestivePopupProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), openDelayMs);
    return () => clearTimeout(t);
  }, [openDelayMs]);

  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="festive-popup" sx={{ backdropFilter: 'blur(2px)' }}>
      <Box sx={modalStyle}>
        <Box sx={containerSx}>
          <IconButton aria-label="Close" onClick={handleClose} size="small" sx={closeButtonSx}>
            <CloseIcon />
          </IconButton>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt="Festive promotion"
            style={{ display: 'block', width: '100%', height: 'auto' }}
            loading="eager"
          />
        </Box>
      </Box>
    </Modal>
  );
}


