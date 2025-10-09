import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import Index from "./pages/Index.jsx"
import BMI from "./pages/BMI.jsx"
import Gizi from "./pages/Gizi.jsx"
import Minum from "./pages/Minum.jsx"
import Tidur from "./pages/Tidur.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/bmi" element={<BMI />} />
      <Route path="/gizi" element={<Gizi />} />
      <Route path="/tidur" element={<Tidur />} />
      <Route path="/minum" element={<Minum />} />
    </Routes>
  </BrowserRouter>
)
