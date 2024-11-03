CREATE TABLE sede (
    idSede UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    Nombre VARCHAR(255) NOT NULL,
    activo BIT(1) DEFAULT B'1',
    actualiza TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    idConcensionario UUID NOT NULL,
    idCiudad UUID NOT NULL,
    CONSTRAINT fk_concensionario
        FOREIGN KEY(idConcensionario) 
        REFERENCES concensionario(idConcensionario),
    CONSTRAINT fk_ciudad
        FOREIGN KEY(idCiudad) 
        REFERENCES ciudad(idCiudad)
);























