CREATE TABLE detalle_venta (
    idDetalleVenta UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    idVenta UUID NOT NULL,
    idCatalogo UUID NOT NULL,
    Cantidad INT NOT NULL,
    PrecioUnitario DECIMAL(10, 2) NOT NULL,
    Subtotal DECIMAL(10, 2) GENERATED ALWAYS AS (Cantidad * PrecioUnitario) STORED,
    activo BIT(1) DEFAULT B'1',
    actualiza TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_venta
        FOREIGN KEY (idVenta) 
        REFERENCES venta(idVenta),
    CONSTRAINT fk_catalogo
        FOREIGN KEY (idCatalogo) 
        REFERENCES catalogo(idCatalogo)
);