import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { LoadingScreen } from './components/LoadingScreen.jsx';
import "./i18n.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback={<LoadingScreen />}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
)
