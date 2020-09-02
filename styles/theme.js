import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#c9cba3',
    },
    secondary: {
      main: '#723d46',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },

  },
  typography: {
    fontFamily:  "'Handlee', sans-serif",
  }
});

export default theme;