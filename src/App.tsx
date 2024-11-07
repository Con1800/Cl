
import './App.css'

import NavLayout from './components/Navbar/NavLayout.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Dashboard from './pages/Dashboard.tsx'

import NabA from './components/Navbar/NabA.tsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<NavLayout />} >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Route>
          <Route path='/dashboard' element={<Dashboard />} >
          </Route>
          <Route path='/testing' element={<NabA />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
