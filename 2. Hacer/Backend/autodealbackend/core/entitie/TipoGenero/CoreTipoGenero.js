// coretipogenero.js

const { modelTipoGenero, ModelTipoGenero } = require('../../../domain/entitie/TipoGenero/ModelTipoGenero');
const { InfraestructureTipoGenero } = require('../../../infraestructure/entitie/TipoGenero/InfraestructureTipoGenero');

class CoreTipoGenero {
  constructor() {}

  async consultartipogenero() {
    const infraestructuretipogenero = new InfraestructureTipoGenero();
    try {
      return await infraestructuretipogenero.consultartipogenero();
    } catch (err) {
      console.error(err.message);
    }
  }

  async consultartipogeneroid(id) {
    const infraestructuretipogenero = new InfraestructureTipoGenero();
    try {
      return await infraestructuretipogenero.consultartipogeneroid(id);
    } catch (err) {
      console.error(err.message);
    }
  }

  async consultartipogeneronombretipogenero(nombretipogenero) {
    const infraestructuretipogenero = new InfraestructureTipoGenero();
    try {
      return await infraestructuretipogenero.consultartipogeneronombretipogenero(nombretipogenero);
    } catch (err) {
      console.error(err.message);
    }
  }

  async ingresartipogenero(cuerpo) {
    const infraestructuretipogenero = new InfraestructureTipoGenero();
    try {
      return await infraestructuretipogenero.ingresartipogenero(cuerpo);
    } catch (err) {
      console.error(err.message);
    }
  }

  async modificartipogenero(parametro, cuerpo) {
    const infraestructuretipogenero = new InfraestructureTipoGenero();
    try {
      return await infraestructuretipogenero.modificartipogenero(parametro, cuerpo);
    } catch (err) {
      console.error(err.message);
    }
  }

  async eliminarcomprador(parametro) {
    const infraestructuretipogenero = new InfraestructureTipoGenero();
    try {
      return await infraestructuretipogenero.eliminartipogenero(parametro);
    } catch (err) {
      console.error(err.message);
    }
  }
}

module.exports = { CoreTipoGenero };
