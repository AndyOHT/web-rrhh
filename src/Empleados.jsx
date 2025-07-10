import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import './App.css';

function Empleados() {
  const [empleados, setEmpleados] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    nacimiento: '',
    correo: '',
    telefono: '',
    departamento: '',
  });

  const [editandoId, setEditandoId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editandoId) {
        await updateDoc(doc(db, 'empleados', editandoId), form);
        alert('Empleado actualizado correctamente.');
        setEditandoId(null);
      } else {
        await addDoc(collection(db, 'empleados'), form);
        alert('Empleado agregado correctamente.');
      }

      setForm({
        nombre: '',
        apellidoP: '',
        apellidoM: '',
        nacimiento: '',
        correo: '',
        telefono: '',
        departamento: '',
      });

      fetchEmpleados();
    } catch (error) {
      console.error('Error al guardar:', error);
      alert('Ocurrió un error al guardar los datos.');
    }
  };

  const handleEditar = (emp) => {
    setForm({
      nombre: emp.nombre,
      apellidoP: emp.apellidoP,
      apellidoM: emp.apellidoM,
      nacimiento: emp.nacimiento,
      correo: emp.correo,
      telefono: emp.telefono,
      departamento: emp.departamento,
    });
    setEditandoId(emp.id);
  };

  const handleEliminar = async (id) => {
    const confirmar = window.confirm('¿Estás seguro de eliminar este empleado?');
    if (!confirmar) return;

    try {
      await deleteDoc(doc(db, 'empleados', id));
      alert('Empleado eliminado correctamente.');
      fetchEmpleados();
    } catch (error) {
      console.error('Error al eliminar:', error);
      alert('Ocurrió un error al eliminar el empleado.');
    }
  };

  const fetchEmpleados = async () => {
    const querySnapshot = await getDocs(collection(db, 'empleados'));
    const empleadosData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setEmpleados(empleadosData);
  };

  useEffect(() => {
    fetchEmpleados();
  }, []);

  return (
    <div className="page">
      <h2>Sección de empleados</h2>

      <form onSubmit={handleSubmit} className="form">
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input name="apellidoP" placeholder="Apellido Paterno" value={form.apellidoP} onChange={handleChange} required />
        <input name="apellidoM" placeholder="Apellido Materno" value={form.apellidoM} onChange={handleChange} required />
        <input name="nacimiento" type="date" value={form.nacimiento} onChange={handleChange} required />
        <input name="correo" type="email" placeholder="Correo" value={form.correo} onChange={handleChange} required />
        <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} required />
        <input name="departamento" placeholder="Departamento" value={form.departamento} onChange={handleChange} required />
        <button type="submit">{editandoId ? 'Actualizar empleado' : 'Agregar empleado'}</button>
      </form>

      <div className="empleados-grid">
        {empleados.map((emp) => (
          <div key={emp.id} className="card">
            <h3>{emp.nombre} {emp.apellidoP} {emp.apellidoM}</h3>
            <p><strong>Fecha de nacimiento:</strong> {emp.nacimiento}</p>
            <p><strong>Correo:</strong> {emp.correo}</p>
            <p><strong>Teléfono:</strong> {emp.telefono}</p>
            <p><strong>Departamento:</strong> {emp.departamento}</p>
            <button onClick={() => handleEditar(emp)}>Editar</button>
            <button onClick={() => handleEliminar(emp.id)} style={{ backgroundColor: 'red', color: 'white' }}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Empleados;
