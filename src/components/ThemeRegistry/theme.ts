import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  shape: {
    borderRadius: 8,
  },
  // Must have exactly 25 shadow values for TypeScript compatibility
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.05)',
    '0px 8px 16px rgba(0, 0, 0, 0.05)',
    '0px 16px 32px rgba(0, 0, 0, 0.05)',
    '0px 2px 5px rgba(0, 0, 0, 0.07)',
    '0px 3px 6px rgba(0, 0, 0, 0.08)',
    '0px 3px 7px rgba(0, 0, 0, 0.09)',
    '0px 4px 8px rgba(0, 0, 0, 0.10)',
    '0px 4px 9px rgba(0, 0, 0, 0.11)',
    '0px 5px 10px rgba(0, 0, 0, 0.12)',
    '0px 5px 11px rgba(0, 0, 0, 0.13)',
    '0px 6px 12px rgba(0, 0, 0, 0.14)',
    '0px 6px 13px rgba(0, 0, 0, 0.15)',
    '0px 7px 14px rgba(0, 0, 0, 0.16)',
    '0px 7px 15px rgba(0, 0, 0, 0.17)',
    '0px 8px 16px rgba(0, 0, 0, 0.18)',
    '0px 8px 17px rgba(0, 0, 0, 0.19)',
    '0px 9px 18px rgba(0, 0, 0, 0.20)',
    '0px 9px 19px rgba(0, 0, 0, 0.21)',
    '0px 10px 20px rgba(0, 0, 0, 0.22)',
    '0px 10px 21px rgba(0, 0, 0, 0.23)',
    '0px 11px 22px rgba(0, 0, 0, 0.24)',
    '0px 11px 23px rgba(0, 0, 0, 0.25)',
    '0px 12px 24px rgba(0, 0, 0, 0.26)',
  ],
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;
