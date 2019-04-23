import { grey, blueGrey } from '@material-ui/core/colors'

export default {
  palette: {
    primary: {
      dark: grey[900],
      light: grey[700],
      main: grey[800],
    },
    secondary: {
      dark: blueGrey[900],
      light: blueGrey[700],
      main: blueGrey[800],
    },
    type: 'dark',
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: 'Poppins, sans-serif',
    fontSize: 15,
    useNextVariants: true,
  },
}
