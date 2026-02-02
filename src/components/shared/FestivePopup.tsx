"use client";

import React, { useEffect, useState } from 'react';
import { Box, IconButton, Modal, Skeleton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

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
  width: { xs: '96vw', sm: 'auto' },
  maxWidth: { xs: '96vw', sm: 560, md: 720 },
  minWidth: { sm: 300 },
  minHeight: { sm: 150 },
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
  const { data, error, isLoading } = useSWR('/api/popup', fetcher);

  useEffect(() => {
    // Only attempt to open if we have data and it's active
    if (data && data.image_src && data.is_active) {
      const delay = data.open_delay_ms || 100;
      const t = setTimeout(() => setOpen(true), delay);
      return () => clearTimeout(t);
    }
  }, [data]);

  const handleClose = () => setOpen(false);

  // Don't render anything if loading, error, or no active popup data
  if (isLoading || error || !data || !data.image_src || !data.is_active) {
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
            src={data.image_src}
            alt="Festive promotion"
            style={{ display: 'block', width: '100%', height: 'auto' }}
            loading="eager"
          />
        </Box>
      </Box>
    </Modal>
  );
}


