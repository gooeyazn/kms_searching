import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import theme from './theme'
import { ThemeProvider } from '@mui/material'

const rootEl = document.getElementById('root')
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootEl
)
