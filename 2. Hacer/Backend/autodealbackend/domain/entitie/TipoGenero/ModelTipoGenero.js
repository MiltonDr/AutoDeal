// domain/entitie/Comprador/ModelTipoGenero.js

class ModelTipoGenero {
  constructor(idTipoGenero, Nombre, activo, actualiza) {
    this.idTipoGenero = idTipoGenero;
    this.Nombre = Nombre;
    this.activo = activo;
    this.actualiza = actualiza;
  }
}

module.exports = { ModelTipoGenero };
