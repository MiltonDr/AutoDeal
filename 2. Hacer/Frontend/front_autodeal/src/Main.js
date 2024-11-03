import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Realizar Consultas</h1>
      <div className='menu-container'>
        {/* Menú Comprador */}
        <div className='dropdown'>
          <button className='dropbtn'>Comprador</button>
          <div className='dropdown-content'>
            <Link to='/comprador/todos'>Consultar todos</Link>
            <Link to='/comprador/id'>Consultar por Id</Link>
            <Link to='/comprador/nombre'>Consultar por nombre</Link>
          </div>
        </div>

        {/* Menú Tipo Documento */}
        <div className='dropdown'>
          <button className='dropbtn'>Tipo Documento</button>
          <div className='dropdown-content'>
            <Link to='/documento/todos'>Consultar todos</Link>
            <Link to='/documento/id'>Consultar por Id</Link>
            <Link to='/documento/nombre'>Consultar por nombre</Link>
          </div>
        </div>

        {/* Menú Tipo Estado Civil */}
        <div className='dropdown'>
          <button className='dropbtn'>Tipo Estado Civil</button>
          <div className='dropdown-content'>
            <Link to='/estadocivil/todos'>Consultar todos</Link>
            <Link to='/estadocivil/id'>Consultar por Id</Link>
            <Link to='/estadocivil/nombre'>Consultar por nombre</Link>
          </div>
        </div>

        {/* Menú Tipo Género */}
        <div className='dropdown'>
          <button className='dropbtn'>Tipo Género</button>
          <div className='dropdown-content'>
            <Link to='/tipogenero/todos'>Consultar todos</Link>
            <Link to='/tipogenero/id'>Consultar por Id</Link>
            <Link to='/tipogenero/nombre'>Consultar por nombre</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
