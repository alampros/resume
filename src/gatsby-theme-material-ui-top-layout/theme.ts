import cyan from '@material-ui/core/colors/cyan'
import green from '@material-ui/core/colors/green'

const theme = {
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
  },
  palette: {
    type: 'dark',
    primary: {
      ...cyan,
      main: '#69b6e1',
    },
    secondary: green,
  },
}

export default theme
