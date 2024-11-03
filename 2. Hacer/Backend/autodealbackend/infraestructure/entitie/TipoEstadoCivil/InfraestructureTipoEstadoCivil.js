// infrastructuretipoestadocivil.js

const { Pool } = require('pg');
const { ModelTipoEstadoCivil } = require('../../../domain/entitie/TipoEstadoCivil/ModelTipoEstadoCivil');

const pool = new Pool({
  host: '127.0.0.1',
  user: 'postgres',
  password: 'messim10',
  database: 'AutoDeal',
  port: '5432',
});

class InfraestructureTipoEstadoCivil {
  constructor() {}

  async consultartipoestadocivil() {
    let results = [];
    try {
      results = await pool.query('SELECT * FROM obtener_tipos_estado_civil_activos();');
      console.log('Tipos de estados civil encontrados:', results.length);
      console.log(results);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
    return results;
  }

  async consultartipoestadocivilid(id) {
    let results = [];
    try {
      results = await pool.query('SELECT * FROM obtener_tipo_estado_civil_por_id_activo($1)', [id]);
      console.log('Tipos de estados civil encontrados:', results.length);
      console.log(results);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
    return results;
  }

  async consultartipoestadocivilnombretipoestadocivil(nombretipoestadocivil) {
    let results = [];
    try {
      results = await pool.query('SELECT * FROM obtener_tipo_estado_civil_por_nombre_activo($1)', [
        nombretipoestadocivil,
      ]);
      console.log('Tipos de estados civil encontrados:', results.length);
      console.log(results);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
    return results;
  }

  async ingresartipoestadocivil(cuerpo) {
    let results = [];
    return results;
  }

  async modificartipoestadocivil(parametro, cuerpo) {
    let results = [];
    return results;
  }

  async eliminartipoestadocivil(parametro) {
    let results = [];
    return results;
  }
}

module.exports = { InfraestructureTipoEstadoCivil };
