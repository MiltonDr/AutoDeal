// domain/entitie/Comprador/ModelTipoEstadoCivil.js

class ModelTipoEstadoCivil {
  constructor(idTipEstadoCivil, Nombre, activo, actualiza) {
    this.idTipEstadoCivil = idTipEstadoCivil;
    this.Nombre = Nombre;
    this.activo = activo;
    this.actualiza = actualiza;
  }
}

module.exports = { ModelTipoEstadoCivil };
