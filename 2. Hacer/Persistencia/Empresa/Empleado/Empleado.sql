CREATE TABLE empleado (
    idEmpleado UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    Nombre VARCHAR(255) NOT NULL,
    activo BIT(1) DEFAULT B'1',
    actualiza TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    idSede UUID NOT NULL,
    CONSTRAINT fk_sede
        FOREIGN KEY(idSede) 
        REFERENCES sede(idSede)
);




























