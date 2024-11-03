// coretipoestadocivil.js

const {
  modelTipoEstadoCivil,
  ModelTipoEstadoCivil,
} = require('../../../domain/entitie/TipoEstadoCivil/ModelTipoEstadoCivil');
const {
  InfraestructureTipoEstadoCivil,
} = require('../../../infraestructure/entitie/TipoEstadoCivil/InfraestructureTipoEstadoCivil');

class CoreTipoEstadoCivil {
  constructor() {}

  async consultartipoestadocivil() {
    const infraestructuretipoestadocivil = new InfraestructureTipoEstadoCivil();
    try {
      return await infraestructuretipoestadocivil.consultartipoestadocivil();
    } catch (err) {
      console.error(err.message);
    }
  }

  async consultartipoestadocivilid(id) {
    const infraestructuretipoestadocivil = new InfraestructureTipoEstadoCivil();
    try {
      return await infraestructuretipoestadocivil.consultartipoestadocivilid(id);
    } catch (err) {
      console.error(err.message);
    }
  }

  async consultartipoestadocivilnombretipoestadocivil(nombretipoestadocivil) {
    const infraestructuretipoestadocivil = new InfraestructureTipoEstadoCivil();
    try {
      return await infraestructuretipoestadocivil.consultartipoestadocivilnombretipoestadocivil(nombretipoestadocivil);
    } catch (err) {
      console.error(err.message);
    }
  }

  async ingresartipoestadocivil(cuerpo) {
    const infraestructuretipoestadocivil = new InfraestructureTipoEstadoCivil();
    try {
      return await infraestructuretipoestadocivil.ingresartipoestadocivil(cuerpo);
    } catch (err) {
      console.error(err.message);
    }
  }

  async modificartipoestadocivil(parametro, cuerpo) {
    const infraestructuretipoestadocivil = new InfraestructureTipoEstadoCivil();
    try {
      return await infraestructuretipoestadocivil.modificartipoestadocivil(parametro, cuerpo);
    } catch (err) {
      console.error(err.message);
    }
  }

  async eliminartipoestadocivil(parametro) {
    const infraestructuretipoestadocivil = new InfraestructureTipoEstadoCivil();
    try {
      return await infraestructuretipoestadocivil.eliminartipoestadocivil(parametro);
    } catch (err) {
      console.error(err.message);
    }
  }
}

module.exports = { CoreTipoEstadoCivil };
