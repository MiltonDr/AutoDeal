CREATE OR REPLACE PROCEDURE insertar_comprador(nombre VARCHAR, apellido VARCHAR, id_tipo_documento UUID, numero_documento VARCHAR, id_tipo_estado_civil UUID, id_tipo_genero UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO comprador (Nombre, Apellido, idTipoDocumento, NumeroDocumento, idTipoEstadoCivil, idTipoGenero) 
    VALUES (nombre, apellido, id_tipo_documento, numero_documento, id_tipo_estado_civil, id_tipo_genero);
END;
$$;