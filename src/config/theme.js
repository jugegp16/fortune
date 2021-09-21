import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
         body: {
           background: 'linear-gradient(0deg, rgba(0,144,170,1) 0%, rgba(0,0,0,1) 100%)',
           // background: ' linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(57,255,131,1) 100%)',
           backgroundRepeat: "no-repeat",
           backgroundAttachment: "fixed",
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#00ff48'
    },
    secondary: {
      main: '#f5f5f5',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#000000',
    }
  }
});

export default theme;
