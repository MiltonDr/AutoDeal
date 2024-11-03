// coretipodocumento.js

const { modelTipoDocumento, ModelTipoDocumento } = require('../../../domain/entitie/TipoDocumento/ModelTipoDocumento');
const {
  InfraestructureTipoDocumento,
} = require('../../../infraestructure/entitie/TipoDocumento/InfraestructureTipoDocumento');

class CoreTipoDocumento {
  constructor() {}

  async consultartipodocumento() {
    const infraestructuretipodocumento = new InfraestructureTipoDocumento();
    try {
      return await infraestructuretipodocumento.consultartipodocumento();
    } catch (err) {
      console.error(err.message);
    }
  }

  async consultartipodocumentoid(id) {
    const infraestructuretipodocumento = new InfraestructureTipoDocumento();
    try {
      return await infraestructuretipodocumento.consultartipodocumentoid(id);
    } catch (err) {
      console.error(err.message);
    }
  }

  async consultartipodocumentonombretipodocumento(nombretipodocumento) {
    const infraestructuretipodocumento = new InfraestructureTipoDocumento();
    try {
      return await infraestructuretipodocumento.consultartipodocumentonombretipodocumento(nombretipodocumento);
    } catch (err) {
      console.error(err.message);
    }
  }

  async ingresartipodocumento(cuerpo) {
    const infraestructuretipodocumento = new InfraestructureTipoDocumento();
    try {
      return await infraestructuretipodocumento.ingresartipodocumento(cuerpo);
    } catch (err) {
      console.error(err.message);
    }
  }

  async modificartipodocumento(parametro, cuerpo) {
    const infraestructuretipodocumento = new InfraestructureTipoDocumento();
    try {
      return await infraestructuretipodocumento.modificartipodocumento(parametro, cuerpo);
    } catch (err) {
      console.error(err.message);
    }
  }

  async eliminartipodocumento(parametro) {
    const infraestructuretipodocumento = new InfraestructureTipoDocumento();
    try {
      return await infraestructuretipodocumento.eliminartipodocumento(parametro);
    } catch (err) {
      console.error(err.message);
    }
  }
}

module.exports = { CoreTipoDocumento };
