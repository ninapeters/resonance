import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import GlobalStyle from './GlobalStyle'

export default function StyleWrapper({ children }) {
  return (
    <Router>
      <GlobalStyle />
      {children}
    </Router>
  )
}
