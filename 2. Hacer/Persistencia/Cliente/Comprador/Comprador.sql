CREATE TABLE comprador (
    idComprador UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    Nombre VARCHAR(255) NOT NULL,
    Apellido VARCHAR(255) NOT NULL,
    idTipoDocumento UUID NOT NULL,
    NumeroDocumento VARCHAR(50) NOT NULL UNIQUE,
    idTipoEstadoCivil UUID NOT NULL,
    idTipoGenero UUID NOT NULL,
    activo BIT(1) DEFAULT B'1',
    actualiza TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_tipo_documento
        FOREIGN KEY (idTipoDocumento) 
        REFERENCES tipo_documento(idTipoDocumento),
    CONSTRAINT fk_tipo_estado_civil
        FOREIGN KEY (idTipoEstadoCivil) 
        REFERENCES tipo_estado_civil(idTipoEstadoCivil),
    CONSTRAINT fk_tipo_genero
        FOREIGN KEY (idTipoGenero) 
        REFERENCES tipo_genero(idTipoGenero)
);




































































