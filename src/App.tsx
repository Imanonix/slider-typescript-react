import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeSlider from '../src/Component/HomeSlider'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeSlider />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
