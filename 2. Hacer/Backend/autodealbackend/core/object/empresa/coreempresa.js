// coregeografia.js
const { ModelEmpresa, modelempresa } = require('../../../domain/object/empresa/modelEmpresa');
const {
  InfraestructureEmpresa,
  infraestructureEmpresa,
} = require('../../../infraestructure/object/empresa/infraestructureEmpresa');

class CoreEmpresa {
  constructor() {}

  // async consultarempresa(respuesta){
  // 	const infraestructureempresa = new InfraestructureEmpresa();
  // 	try {
  //         return infraestructureempresa.consultarempresa(respuesta);
  // 	} catch (e) {
  // 		console.error(e);
  // 	}
  // }

  async consultarempresa() {
    const infraestructureempresa = new InfraestructureEmpresa();
    try {
      return await infraestructureempresa.consultarempresa();
    } catch (err) {
      console.error(err.message);
    }
  }

  async consultarempresaid(id) {
    const infraestructureempresa = new InfraestructureEmpresa();
    try {
      return await infraestructureempresa.consultarempresaid(id);
    } catch (err) {
      console.error(err.message);
    }
  }

  async consultarempresanombresede(nombresede) {
    const infraestructureempresa = new InfraestructureEmpresa();
    try {
      return await infraestructureempresa.consultarempresanombresede(nombresede);
    } catch (err) {
      console.error(err.message);
    }
  }
}

module.exports = { CoreEmpresa };
