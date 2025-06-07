import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (email && password) {
      setIsAuthenticated(true)
      navigate('/home')
    }
  }

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', color: '#593cb3' }}>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  )
}

export default Login
