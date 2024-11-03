CREATE TABLE venta (
    idVenta UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    idEstadoVenta UUID NOT NULL,
    idComprador UUID NOT NULL,
    idEmpleado UUID NOT NULL,
    idCiudad UUID NOT NULL,
    Fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Monto DECIMAL(10, 2) NOT NULL,
    activo BIT(1) DEFAULT B'1',
    actualiza TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_estado_venta
        FOREIGN KEY (idEstadoVenta) 
        REFERENCES estado_venta(idEstadoVenta),
    CONSTRAINT fk_comprador
        FOREIGN KEY (idComprador) 
        REFERENCES comprador(idComprador),
    CONSTRAINT fk_empleado
        FOREIGN KEY (idEmpleado) 
        REFERENCES empleado(idEmpleado),
    CONSTRAINT fk_ciudad
        FOREIGN KEY (idCiudad) 
        REFERENCES ciudad(idCiudad)
);




