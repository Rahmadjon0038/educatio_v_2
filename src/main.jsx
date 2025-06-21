import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './router/Root'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UserProvider } from './context/roleContext'


const queryclinet = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <QueryClientProvider client={queryclinet}>
        <BrowserRouter>

          <ToastContainer position="bottom-right" />
          <Root />
        </BrowserRouter>
      </QueryClientProvider>
    </UserProvider>
  </StrictMode>,
)
