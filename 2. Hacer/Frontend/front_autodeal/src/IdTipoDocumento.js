import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './IdTipoDocumento.css';

function GeneroPorId() {
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const jsonUrl = `http://localhost:8068/operaciongettipodocumentoid/${id}`; // Cambia la URL según tu API
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(jsonUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData.rows[0]); // Asumimos que la API devuelve un solo objeto
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      fetchData();
    }
  };

  return (
    <div className='genero-container'>
      <h1 className='genero-title'>Consultar Tipo Documento por ID</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Ingresa el ID del documento'
          value={id}
          onChange={(e) => setId(e.target.value)}
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

export default GeneroPorId;
