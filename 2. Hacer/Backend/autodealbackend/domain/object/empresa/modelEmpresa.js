const modelempresa = [];

class ModelEmpresa {
  constructor(idsede, idempleado, nombresede, nombreempleado, idconcensionario, nombreconcensionario) {
    this.idsede = idsede;
    this.idempleado = idempleado;
    this.nombresede = nombresede;
    this.nombreempleado = nombreempleado;
    this.idconcensionario = idconcensionario;
    this.nombreconcensionario = nombreconcensionario;
  }
}

module.exports = { ModelEmpresa, modelempresa };
