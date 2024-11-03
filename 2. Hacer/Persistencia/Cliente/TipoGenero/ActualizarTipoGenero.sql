CREATE OR REPLACE PROCEDURE actualizar_nombre_tipo_genero(id UUID, nuevo_nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE tipo_genero
    SET Nombre = nuevo_nombre,
        actualiza = CURRENT_TIMESTAMP
    WHERE idTipoGenero = id;
END;
$$;






















































