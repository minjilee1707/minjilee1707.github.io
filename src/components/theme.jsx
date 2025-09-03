import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6C63FF', // soft purple
    },
    secondary: {
      main: '#FF6584', // coral/pink accent
    },
    background: {
      default: '#F9F9F9',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#4A403A',   // soft brown for main text
      secondary: '#7D7463', // beige-gray for secondary text
      disabled: '#AFA393',  // optional muted tone
    },
  },
  typography: {
    fontFamily: `'Open Sans', 'Arial', sans-serif`,
    h1: { fontWeight: 600, color: '#4A403A' },
    h2: { fontWeight: 600, color: '#4A403A' },
    h3: { fontWeight: 600, color: '#4A403A' },
    h4: { fontWeight: 600, color: '#4A403A' },
    body1: { fontSize: 16, color: '#4A403A' },
    body2: { color: '#7D7463' },
    subtitle1: { color: '#7D7463' },
    subtitle2: { color: '#AFA393' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;