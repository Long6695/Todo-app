import {createTheme} from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    backgroundContainer: PaletteOptions['primary'];
    color: PaletteOptions['primary'];
  }
  interface Palette {
    backgroundContainer: Palette['primary'];
    color: Palette['primary'];
  }
}

// background #cad2c5
// background container #84a98c
// button background #52796f
// button hover #354f52
// text color #2f3e46
//

export const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: '#89b0ae',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&: hover': {
            color: '#84a98c',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          '& span': {
            color: '#2f3e46',
            fontSize: 16,
            overflowWrap: 'break-word',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#89b0ae',
          '&:hover': {
            backgroundColor: '#bee3db',
          },
        },
      },
    },
  },
  typography: {
    fontSize: 12,
  },
  palette: {
    background: {
      default: '#bee3db',
    },
    backgroundContainer: {
      main: '#faf9f9',
    },
    color: {
      main: '#2f3e46',
    },
  },
});
