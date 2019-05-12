import { grey, blueGrey } from '@material-ui/core/colors'

export default {
  palette: {
    primary: {
      dark: blueGrey[700],
      light: blueGrey[500],
      main: blueGrey[600],
    },
    secondary: {
      dark: '#eeeeee',
      light: '#fafafa',
      main: '#e5e5e5',
    },
    type: 'light',
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
