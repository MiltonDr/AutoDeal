import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Ubicaciones.css';

const Ubicaciones = () => {
  const [ubicaciones, setUbicaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8067/operaciongetempresa')
      .then((response) => response.json())
      .then((data) => {
        setUbicaciones(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar datos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className='loading-text'>Cargando datos...</p>;

  const handleRegresar = () => {
    navigate('/');
  };

  return (
    <div className='ubicaciones-container'>
      <h2 className='title'>Empresas</h2>
      <table className='ubicaciones-table'>
        <thead>
          <tr>
            <th>Id Sede</th>
            <th>Id Empleado</th>
            <th>Nombre Sede</th>
            <th>Nombre Empleado</th>
            <th>Id Concensionario</th>
            <th>Nombre Concensionario</th>
          </tr>
        </thead>
        <tbody>
          {ubicaciones.map((ubicacion) => (
            <tr key={ubicacion._id}>
              <td>{ubicacion.IdSede}</td>
              <td>{ubicacion.IdEmpleado}</td>
              <td>{ubicacion.NombreSede}</td>
              <td>{ubicacion.NombreEmpleado}</td>
              <td>{ubicacion.IdConcensionario}</td>
              <td>{ubicacion.NombreConcensionario}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleRegresar} className='back-button'>
        Regresar al Main
      </button>{' '}
      {}
    </div>
  );
};

export default Ubicaciones;
