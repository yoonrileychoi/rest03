import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HousingPage from './pages/business/HousingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/business/housing" element={<HousingPage />} />
        <Route path="/business/building" element={<HousingPage />} />
        <Route path="/business/civil" element={<HousingPage />} />
        <Route path="/business/plant" element={<HousingPage />} />
        <Route path="/business/global" element={<HousingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
