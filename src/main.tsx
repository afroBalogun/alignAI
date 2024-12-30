import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./styles/home.css"
import "./styles/about.css"
import "./styles/pricing.css"
import "./styles/faq.css"
import "./styles/access.css"
import "./styles/demo.css"
import "./styles/sign-up-and-login.css"
import App from './App.tsx'
import { RouterProvider } from 'react-router'
import router from "./routers/router.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
