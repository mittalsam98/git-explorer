import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './AppLayout.jsx';
import './index.css';
import { GitContextProvider } from './lib/gitContext.jsx';
import AppRouter from './routes/routes.jsx';
import { Toaster } from './components/ui/sonner.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GitContextProvider>
      <Toaster />
      <AppRouter />
    </GitContextProvider>
  </StrictMode>
);
