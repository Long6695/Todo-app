import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface PaletteOptions {
        backgroundContainer: PaletteOptions['primary'],
        color: PaletteOptions['primary'],
    }
    interface Palette {
        backgroundContainer: Palette['primary'],
        color: Palette['primary'],
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
        MuiListItemText: {
            styleOverrides: {
                root: {
                    color: "#2f3e46",
                }
            }
        },
       MuiTextField: {
           styleOverrides: {
               root: {
                   borderColor: '#52796f',
                   "&:hover": {
                       borderColor: "white"
                   }
               }
           }
       },
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: '#52796f',
                    "&:hover": {
                        backgroundColor: '#354f52'
                    }
                }
            }
        }
    },
    typography: {
        fontSize: 12,
    },
    palette: {
        background: {
            default: "#cad2c5"
        },
       backgroundContainer: {
           main: '#84a98c'
       },
       color: {
           main: '#2f3e46'
       },
      },
})