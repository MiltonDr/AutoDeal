import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UbicacionesId.css';

const UbicacionesId = () => {
  const [id, setId] = useState('');
  const [ubicacion, setUbicacion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleConsultar = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`http://localhost:8067/operaciongetempresaid/${id}`);
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }

      const data = await response.json();
      console.log('Datos obtenidos:', data);

      if (data.length > 0) {
        setUbicacion(data[0]);
      } else {
        setUbicacion(null);
      }
    } catch (error) {
      console.error('Error al cargar datos:', error);
      setError('No se pudo cargar la ubicación.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegresar = () => {
    navigate('/');
  };

  return (
    <div className='ubicaciones-id-container'>
      <h2 className='title'>Consultar Empresa por Id</h2>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Ingresa el ID'
          value={id}
          onChange={(e) => setId(e.target.value)}
          className='input'
        />
        <button onClick={handleConsultar} className='search-button'>
          Consultar
        </button>
      </div>
      {loading && <p className='loading-text'>Cargando datos...</p>}
      {error && <p className='error-text'>{error}</p>}
      {ubicacion ? (
        <div className='ubicacion-details'>
          <h3>Detalles de la Empresa</h3>
          <p>
            <strong>Id Sede:</strong> {ubicacion.IdSede}
          </p>
          <p>
            <strong>Id Empleado:</strong> {ubicacion.IdEmpleado}
          </p>
          <p>
            <strong>Nombre Sede:</strong> {ubicacion.NombreSede}
          </p>
          <p>
            <strong>Nombre Empleado:</strong> {ubicacion.NombreEmpleado}
          </p>
          <p>
            <strong>Id Concensionario:</strong> {ubicacion.IdConcensionario}
          </p>
          <p>
            <strong>Nombre Concensionario:</strong> {ubicacion.NombreConcensionario}
          </p>
        </div>
      ) : (
        <p className='no-data-text'>No se encontró la ubicación</p>
      )}
      <button onClick={handleRegresar} className='back-button'>
        Regresar al Main
      </button>{' '}
      {}
    </div>
  );
};

export default UbicacionesId;
