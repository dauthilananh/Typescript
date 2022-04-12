import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppClone from './App_clone'
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppClone />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)