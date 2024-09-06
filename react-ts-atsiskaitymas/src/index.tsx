import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { CardsProvider } from './contexts/CardsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <UserProvider>
    <CardsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CardsProvider>
  </UserProvider>
);
