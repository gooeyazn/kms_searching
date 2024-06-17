import { createTheme } from '@mui/material/styles'
import { orange, red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: red[500],
    },
  },
})

export default theme
