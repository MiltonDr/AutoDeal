CREATE OR REPLACE PROCEDURE actualizar_nombre_tipo_estado_civil(id UUID, nuevo_nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE tipo_estado_civil
    SET Nombre = nuevo_nombre,
        actualiza = CURRENT_TIMESTAMP
    WHERE idTipoEstadoCivil = id;
END;
$$;



























































