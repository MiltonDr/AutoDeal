// corecomprador.js

const { modelComprador, ModelComprador } = require('../../../domain/entitie/Comprador/ModelComprador');
const { InfraestructureComprador } = require('../../../infraestructure/entitie/Comprador/InfraestructureComprador');

class CoreComprador {
  constructor() {}

  async consultarcomprador() {
    const infraestructurecomprador = new InfraestructureComprador();
    try {
      return await infraestructurecomprador.consultarcomprador();
    } catch (err) {
      console.error(err.message);
    }
  }

  async consultarcompradorid(id) {
    const infraestructurecomprador = new InfraestructureComprador();
    try {
      return await infraestructurecomprador.consultarcompradorid(id);
    } catch (err) {
      console.error(err.message);
    }
  }

  async consultarcompradornombrecomprador(nombrecomprador) {
    const infraestructurecomprador = new InfraestructureComprador();
    try {
      return await infraestructurecomprador.consultarcompradornombrecomprador(nombrecomprador);
    } catch (err) {
      console.error(err.message);
    }
  }

  async ingresarcomprador(cuerpo) {
    const infraestructurecomprador = new InfraestructureComprador();
    try {
      return await infraestructurecomprador.ingresarcomprador(cuerpo);
    } catch (err) {
      console.error(err.message);
    }
  }

  async modificarcomprador(parametro, cuerpo) {
    const infraestructurecomprador = new InfraestructureComprador();
    try {
      return await infraestructurecomprador.modificarcomprador(parametro, cuerpo);
    } catch (err) {
      console.error(err.message);
    }
  }

  async eliminarcomprador(parametro) {
    const infraestructurecomprador = new InfraestructureComprador();
    try {
      return await infraestructurecomprador.eliminarcomprador(parametro);
    } catch (err) {
      console.error(err.message);
    }
  }
}

module.exports = { CoreComprador };
