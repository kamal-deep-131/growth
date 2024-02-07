import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Reviews from './pages/Reviews.jsx'
import Pricing from './pages/Pricing.jsx'
import About from './pages/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/Reviews' element={<Reviews />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/about' element={<About />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
