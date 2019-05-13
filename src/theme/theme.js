import { blueGrey } from '@material-ui/core/colors'

export default {
  palette: {
    primary: {
      dark: blueGrey[700],
      light: blueGrey[500],
      main: blueGrey[600],
    },
    secondary: {
      dark: '#eeeeee',
      light: '#ffffff',
      main: '#fafafa',
    },
    type: 'light',
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: 'Poppins, sans-serif',
    fontSize: 15,
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.3rem',
    },
    h3: {
      fontSize: '1.7rem',
    },
    h4: {
      fontSize: '1.3rem',
    },
    h5: {
      fontSize: '1.1rem',
    },
    h6: {
      fontSize: '0.9rem',
    },
    useNextVariants: true,
  },
}
