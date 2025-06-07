import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css'

function Navbar({ setIsAuthenticated }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsAuthenticated(false)
    navigate('/')
  }

  return (
    <div className="navbar">
      <div>
        <Link to="/home">Inicio</Link>
        <Link to="/empleados">Empleados</Link>
        <Link to="/perfil">Perfil</Link>
      </div>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  )
}

export default Navbar
