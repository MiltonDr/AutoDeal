CREATE OR REPLACE PROCEDURE actualizar_nombre_tipo_documento(id UUID, nuevo_nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE tipo_documento
    SET Nombre = nuevo_nombre,
        actualiza = CURRENT_TIMESTAMP
    WHERE idTipoDocumento = id;
END;
$$;
































































