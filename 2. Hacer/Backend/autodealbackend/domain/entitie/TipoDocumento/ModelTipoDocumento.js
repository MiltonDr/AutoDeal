// domain/entitie/Comprador/ModelTipoDocumento.js

class ModelTipoDocumento {
  constructor(idTipoDocumento, Nombre, activo, actualiza) {
    this.idTipoDocumento = idTipoDocumento;
    this.Nombre = Nombre;
    this.activo = activo;
    this.actualiza = actualiza;
  }
}

module.exports = { ModelTipoDocumento };
