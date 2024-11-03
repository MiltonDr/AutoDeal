CREATE TABLE departamento (
    idDepartamento UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    Nombre VARCHAR(255) NOT NULL,
    activo BIT(1) DEFAULT B'1',
    actualiza TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    idPais UUID NOT NULL,
    CONSTRAINT fk_pais
        FOREIGN KEY(idPais) 
        REFERENCES pais(idPais)
);







