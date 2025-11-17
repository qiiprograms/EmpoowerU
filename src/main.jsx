import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App'


AOS.init({ duration: 900, once: true })


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<BrowserRouter>
<Routes>
<Route path="/*" element={<App/>} />
</Routes>
</BrowserRouter>
</React.StrictMode>
)