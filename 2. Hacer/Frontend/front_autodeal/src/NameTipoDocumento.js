import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NameTipoDocumento.css';

function GeneroPorNombre() {
  const [nombre, setNombre] = useState('');
  const [data, setData] = useState(null); // Cambiar a null para manejar un solo resultado
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8068/operaciongettipodocumentonombretipodocumento/${encodeURIComponent(nombre)}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      if (jsonData.rows && jsonData.rows.length > 0) {
        setData(jsonData.rows[0]); // Asumimos que la API devuelve un solo objeto cuando se busca por nombre
      } else {
        setData(null); // Si no hay resultados, aseguramos que data sea null
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setData(null); // Resetea los datos en caso de error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre) {
      fetchData();
    }
  };

  return (
    <div className='genero-container'>
      <h1 className='genero-title'>Consultar Tipo Documento por Nombre</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Ingresa el nombre del documento'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button type='submit'>Consultar</button>
      </form>
      {data && (
        <div className='resultado'>
          <h2>Resultado:</h2>
          <p>ID: {data.idtipodocumento}</p>
          <p>Nombre: {data.nombre}</p>
          <p>Última Actualización: {new Date(data.actualiza).toLocaleString()}</p>
        </div>
      )}
      <button onClick={() => navigate('/')} className='back-button'>
        Volver al Menú Principal
      </button>
    </div>
  );
}

export default GeneroPorNombre;
