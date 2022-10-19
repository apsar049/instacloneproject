import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Register from './components/Register'
import LandingPage from './components/LandingPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
function App () {
  const [bool, setBool] = useState(false)

  const toggle = () => {
    setBool(prev => !prev)
  }

  return (
    <div className='App'>
      {bool && <Header />}
      <Routes>
        <Route path='/' element={bool ? <Home /> : <LandingPage />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      {!bool && (
        <div>
          <button style={{ marginLeft: '54%' }} onClick={toggle}>
            Enter
          </button>
        </div>
      )}
    </div>
  )
}

export default App
