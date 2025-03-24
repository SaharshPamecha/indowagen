'use client';

import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Stack,
  TextField,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    // Implement checkout logic here
    alert('Checkout functionality will be implemented soon!');
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: { xs: '100%', sm: 400 } },
      }}
    >
      <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Shopping Cart</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        {items.length === 0 ? (
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography color="text.secondary">Your cart is empty</Typography>
          </Box>
        ) : (
          <>
            <List sx={{ flex: 1, overflow: 'auto' }}>
              {items.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{
                    py: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box sx={{ position: 'relative', width: 60, height: 60, mr: 2 }}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  <ListItemText
                    primary={item.name}
                    secondary={item.price}
                    sx={{ mr: 2 }}
                  />
                  <Stack direction="row" spacing={1} alignItems="center">
                    <TextField
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      inputProps={{ min: 1, style: { width: 40, textAlign: 'center' } }}
                      size="small"
                    />
                    <IconButton
                      onClick={() => removeItem(item.id)}
                      edge="end"
                      size="small"
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </ListItem>
              ))}
            </List>

            <Box sx={{ pt: 2 }}>
              <Divider sx={{ my: 2 }} />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 2,
                }}
              >
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6" color="primary">
                  {totalPrice}
                </Typography>
              </Box>
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  fullWidth
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </Stack>
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  );
}
