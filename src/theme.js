import { alpha, createTheme } from '@mui/material/styles'

const saffron = '#D6A24A'
const deepTeal = '#2A8C82'
const charcoal = '#111318'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: saffron },
    secondary: { main: deepTeal },
    background: {
      default: '#FAFAFB',
      paper: '#FFFFFF',
    },
    text: {
      primary: charcoal,
      secondary: alpha(charcoal, 0.72),
    },
    divider: alpha(charcoal, 0.12),
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontWeight: 800, letterSpacing: -0.6 },
    h2: { fontWeight: 800, letterSpacing: -0.4 },
    h3: { fontWeight: 800, letterSpacing: -0.2 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: `linear-gradient(180deg, ${alpha('#FFFFFF', 0.92)}, ${alpha(
            '#FFFFFF',
            0.72,
          )})`,
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${alpha(charcoal, 0.08)}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 18,
          paddingBlock: 10,
          transition: 'transform 140ms ease, box-shadow 140ms ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: `1px solid ${alpha(charcoal, 0.08)}`,
          backgroundImage: `linear-gradient(180deg, ${alpha('#FFFFFF', 0.92)}, ${alpha(
            '#FAFAFB',
            0.92,
          )})`,
          boxShadow: '0 12px 28px rgba(17,19,24,0.10)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: alpha(charcoal, 0.12),
        },
      },
    },
  },
})

export default theme
