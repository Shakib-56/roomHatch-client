import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Routing/Routing.jsx'
import AuthProvider from './Context/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <RouterProvider router={router
  
}></RouterProvider>
  </AuthProvider>

)
