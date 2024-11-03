CREATE OR REPLACE PROCEDURE actualizar_comprador(id UUID, nombre VARCHAR, apellido VARCHAR, id_tipo_documento UUID, numero_documento VARCHAR, id_tipo_estado_civil UUID, id_tipo_genero UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE comprador
    SET Nombre = nombre,
        Apellido = apellido,
        idTipoDocumento = id_tipo_documento,
        NumeroDocumento = numero_documento,
        idTipoEstadoCivil = id_tipo_estado_civil,
        idTipoGenero = id_tipo_genero,
        actualiza = CURRENT_TIMESTAMP
    WHERE idComprador = id;
END;
$$;
