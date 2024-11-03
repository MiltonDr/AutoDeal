import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CompradorTodos from './Comprador';
import CompradorId from './IdComprador';
import DocumentoId from './IdTipoDocumento';
import EstadoCivilId from './IdTipoEstadoCivil';
import GeneroId from './IdTipoGenero';
import Main from './Main';
import CompradorNombre from './NameComprador';
import DocumentoNombre from './NameTipoDocumento';
import EstadoCivilNombre from './NameTipoEstadoCivil';
import GeneroNombre from './NameTipoGenero';
import DocumentoTodos from './TipoDocumento';
import EstadoCivilTodos from './TipoEstadoCivil';
import GeneroTodos from './TipoGenero';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />

        {/* Rutas para Comprador */}
        <Route path='/comprador/todos' element={<CompradorTodos />} />
        <Route path='/comprador/id' element={<CompradorId />} />
        <Route path='/comprador/nombre' element={<CompradorNombre />} />

        {/* Rutas para Tipo Documento */}
        <Route path='/documento/todos' element={<DocumentoTodos />} />
        <Route path='/documento/id' element={<DocumentoId />} />
        <Route path='/documento/nombre' element={<DocumentoNombre />} />

        {/* Rutas para Tipo Estado Civil */}
        <Route path='/estadocivil/todos' element={<EstadoCivilTodos />} />
        <Route path='/estadocivil/id' element={<EstadoCivilId />} />
        <Route path='/estadocivil/nombre' element={<EstadoCivilNombre />} />

        {/* Rutas para Tipo Género */}
        <Route path='/tipogenero/todos' element={<GeneroTodos />} />
        <Route path='/tipogenero/id' element={<GeneroId />} />
        <Route path='/tipogenero/nombre' element={<GeneroNombre />} />
      </Routes>
    </Router>
  );
};

export default App;
