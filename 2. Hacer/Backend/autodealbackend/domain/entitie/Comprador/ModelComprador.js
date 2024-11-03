// domain/entitie/Comprador/ModelComprador.js

class ModelComprador {
  constructor(idComprador, Nombre, activo, actualiza) {
    this.idComprador = idComprador;
    this.Nombre = Nombre;
    this.activo = activo;
    this.actualiza = actualiza;
  }
}

module.exports = { ModelComprador };
