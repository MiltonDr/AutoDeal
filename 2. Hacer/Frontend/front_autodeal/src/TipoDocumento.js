import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './TipoDocumento.css';

function GeneroTodos() {
  const [data, setData] = useState([]);
  const jsonUrl = 'http://localhost:8068/operaciongettipodocumento'; // Asegúrate de que esta sea la URL correcta
  const navigate = useNavigate(); // Inicializa useNavigate

  const fetchData = async () => {
    try {
      const response = await fetch(jsonUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData.rows);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Llama a fetchData al cargar el componente
  }, []);

  return (
    <div className='genero-container'>
      <h1 className='genero-title'>Listado de Tipos Documento</h1>
      <table className='genero-table'>
        <thead>
          <tr>
            <th>ID Documento</th>
            <th>Nombre</th>
            <th>Última Actualización</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.iddocumento}>
              <td>{row.idtipodocumento}</td>
              <td>{row.nombre}</td>
              <td>{new Date(row.actualiza).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/')} className='back-button'>
        Volver al Menú Principal
      </button>
    </div>
  );
}

export default GeneroTodos;
