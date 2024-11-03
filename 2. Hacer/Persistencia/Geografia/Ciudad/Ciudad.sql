CREATE TABLE ciudad (
    idCiudad UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    Nombre VARCHAR(255) NOT NULL,
    activo BIT(1) DEFAULT B'1',
    actualiza TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    idDepartamento UUID NOT NULL,
    CONSTRAINT fk_departamento
        FOREIGN KEY(idDepartamento) 
        REFERENCES departamento(idDepartamento)
);












