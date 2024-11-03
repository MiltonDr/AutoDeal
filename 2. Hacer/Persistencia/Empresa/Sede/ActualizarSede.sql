CREATE OR REPLACE PROCEDURE actualizar_nombre_sede(id UUID, nuevo_nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE sede
    SET Nombre = nuevo_nombre,
        actualiza = CURRENT_TIMESTAMP
    WHERE idSede = id;
END;
$$;
























