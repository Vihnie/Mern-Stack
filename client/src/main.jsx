import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { PostProvider } from './context/PostContext.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PostProvider>
        <App />
      </PostProvider>
    </BrowserRouter>
  </React.StrictMode>
);

