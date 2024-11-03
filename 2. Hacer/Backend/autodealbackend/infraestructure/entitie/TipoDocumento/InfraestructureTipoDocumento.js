// infrastructuretipodocumento.js

const { Pool } = require('pg');
const { ModelTipoDocumento } = require('../../../domain/entitie/TipoDocumento/ModelTipoDocumento');

const pool = new Pool({
  host: '127.0.0.1',
  user: 'postgres',
  password: 'messim10',
  database: 'AutoDeal',
  port: '5432',
});

class InfraestructureTipoDocumento {
  constructor() {}

  async consultartipodocumento() {
    let results = [];
    try {
      results = await pool.query('SELECT * FROM obtener_tipos_documento_activos();');
      console.log('Tipos de estados civil encontrados:', results.length);
      console.log(results);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
    return results;
  }

  async consultartipodocumentoid(id) {
    let results = [];
    try {
      results = await pool.query('SELECT * FROM obtener_tipo_documento_por_id_activo($1)', [id]);
      console.log('Tipos de estados civil encontrados:', results.length);
      console.log(results);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
    return results;
  }

  async consultartipodocumentonombretipodocumento(nombretipodocumento) {
    let results = [];
    try {
      results = await pool.query('SELECT * FROM obtener_tipo_documento_por_nombre_activo($1)', [nombretipodocumento]);
      console.log('Tipos de estados civil encontrados:', results.length);
      console.log(results);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
    return results;
  }

  async ingresartipodocumento(cuerpo) {
    let results = [];
    return results;
  }

  async modificartipodocumento(parametro, cuerpo) {
    let results = [];
    return results;
  }

  async eliminartipodocumento(parametro) {
    let results = [];
    return results;
  }
}

module.exports = { InfraestructureTipoDocumento };
