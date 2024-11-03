// infrastructurecomprador.js

const { Pool } = require('pg');
const { modelComprador } = require('../../../domain/entitie/Comprador/ModelComprador');

const pool = new Pool({
  host: '127.0.0.1',
  user: 'postgres',
  password: 'messim10',
  database: 'AutoDeal',
  port: '5432',
});

class InfraestructureComprador {
  constructor() {}

  async consultarcomprador() {
    let results = [];
    try {
      results = await pool.query('SELECT * FROM obtener_compradores_activos();');
      console.log('compradores encontrados:', results.length);
      console.log(results);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
    return results;
  }

  async consultarcompradorid(id) {
    let results = [];
    try {
      results = await pool.query('SELECT * FROM obtener_comprador_por_id_activo($1)', [id]);
      console.log('Compradores encontrados:', results.length);
      console.log(results);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
    return results;
  }

  async consultarcompradornombrecomprador(nombrecomprador) {
    let results = [];
    try {
      results = await pool.query('SELECT * FROM obtener_comprador_por_nombre_activo($1)', [nombrecomprador]);
      console.log('Compradores encontrados:', results.length);
      console.log(results);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
    return results;
  }

  async ingresarcomprador(cuerpo) {
    let results = [];
    return results;
  }

  async modificarcomprador(parametro, cuerpo) {
    let results = [];
    return results;
  }

  async eliminarcomprador(parametro) {
    let results = [];
    return results;
  }
}

module.exports = { InfraestructureComprador };
