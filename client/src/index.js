import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import { DataLayer } from './DataLayer'
import reducer, { initialState } from './reducer'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <DataLayer initialState={initialState} reducer={reducer}>
        <App />
      </DataLayer>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
