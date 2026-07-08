import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/open-sauce-one/400.css';
import '@fontsource/open-sauce-one/500.css';
import '@fontsource/open-sauce-one/600.css';
import '@fontsource/open-sauce-one/700.css';
import '@fontsource/open-sauce-one/800.css';
import App from './App';
import './styles/global.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
