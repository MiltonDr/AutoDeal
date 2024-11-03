CREATE TABLE catalogo (
    idCatalogo UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    Nombre VARCHAR(255) NOT NULL,
    activo BIT(1) DEFAULT B'1',
    actualiza TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    idTipoCatalogo UUID NOT NULL,
    idEstadoVehiculo UUID NOT NULL,
    CONSTRAINT fk_tipo_catalogo
        FOREIGN KEY(idTipoCatalogo) 
        REFERENCES tipo_catalogo(idTipoCatalogo),
    CONSTRAINT fk_estado_vehiculo
        FOREIGN KEY(idEstadoVehiculo) 
        REFERENCES estado_vehiculo(idEstadoVehiculo)
);














































