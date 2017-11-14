import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './app/App';

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
, document.getElementById('root'));