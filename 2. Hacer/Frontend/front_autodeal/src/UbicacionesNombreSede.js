import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UbicacionesNombreSede.css';

const UbicacionesPorNombreSede = () => {
  const [ubicacion, setUbicacion] = useState(null);
  const [nombreSede, setNombreSede] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleConsultar = () => {
    if (!nombreSede) return;

    setLoading(true);
    setError('');
    fetch(`http://localhost:8067/operaciongetempresanombresede/${nombreSede}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta de la red');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Datos obtenidos:', data);
        setUbicacion(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar datos:', error);
        setError('No se pudo cargar la ubicación. Intenta de nuevo.');
        setLoading(false);
      });
  };

  const handleRegresar = () => {
    navigate('/');
  };

  if (loading) return <p className='loading-text'>Cargando datos...</p>;

  return (
    <div className='ubicaciones-id-container'>
      <h2 className='title'>Consultar Empresa por Nombre de Sede</h2>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Ingresa el nombre de la sede'
          value={nombreSede}
          onChange={(e) => setNombreSede(e.target.value)}
          className='input'
        />
        <button onClick={handleConsultar} className='search-button'>
          Consultar
        </button>
      </div>
      {error && <p className='error-text'>{error}</p>} {}
      {ubicacion ? (
        <div className='ubicacion-details'>
          <h3>Detalles de la Ubicación</h3>
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

export default UbicacionesPorNombreSede;
