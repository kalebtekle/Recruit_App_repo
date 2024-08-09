import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import AccountInfo from './components/AccountInfo'
import Confirmation from './components/Confirmation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account-info" element={<AccountInfo />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  )
}

export default App
