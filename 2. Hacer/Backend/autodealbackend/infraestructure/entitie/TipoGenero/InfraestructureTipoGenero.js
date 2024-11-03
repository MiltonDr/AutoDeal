// infrastructuretipogenero.js

const { Pool } = require('pg');
const { ModelTipoGenero } = require('../../../domain/entitie/TipoGenero/ModelTipoGenero');

const pool = new Pool({
  host: '127.0.0.1',
  user: 'postgres',
  password: 'messim10',
  database: 'AutoDeal',
  port: '5432',
});

class InfraestructureTipoGenero {
  constructor() {}

  async consultartipogenero() {
    let results = [];
    try {
      results = await pool.query('SELECT * FROM obtener_tipos_genero_activos();');
      console.log('Tipos de generos encontrados:', results.length);
      console.log(results);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
    return results;
  }

  async consultartipogeneroid(id) {
    let results = [];
    try {
      results = await pool.query('SELECT * FROM obtener_tipo_genero_por_id_activo($1)', [id]);
      console.log('Tipos de generos encontrados:', results.length);
      console.log(results);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
    return results;
  }

  async consultartipogeneronombretipogenero(nombretipogenero) {
    let results = [];
    try {
      results = await pool.query('SELECT * FROM obtener_tipo_genero_por_nombre_activo($1)', [nombretipogenero]);
      console.log('Tipos de generos encontrados:', results.length);
      console.log(results);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
    return results;
  }

  async ingresartipogenero(cuerpo) {
    let results = [];
    return results;
  }

  async modificartipogenero(parametro, cuerpo) {
    let results = [];
    return results;
  }

  async eliminartipogenero(parametro) {
    let results = [];
    return results;
  }
}

module.exports = { InfraestructureTipoGenero };
