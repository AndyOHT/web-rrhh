import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import Navbar from './Navbar'
import Home from './Home'
import Empleados from './Empleados'
import Perfil from './Perfil'
import ProtectedRoute from './ProtectedRoute'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div>
      {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/empleados"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Empleados />
            </ProtectedRoute>
          }
        />
        <Route
          path="/perfil"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Perfil />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App

