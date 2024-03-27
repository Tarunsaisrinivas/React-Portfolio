import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Main from './pages/Main'
import Details from './pages/Details'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Details/BackendData" element={<Details/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App