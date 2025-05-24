// src/theme.js
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#3f51b5',
      },
      background: {
        default: mode === 'dark' ? '#121212' : '#f5f5f5',
        paper: mode === 'dark' ? '#1e1e1e' : '#fff',
      },
      text: {
        primary: mode === 'dark' ? '#fff' : '#000',
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif',
    },
  });
