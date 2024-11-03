CREATE OR REPLACE PROCEDURE actualizar_nombre_ciudad(id UUID, nuevo_nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE ciudad
    SET Nombre = nuevo_nombre,
        actualiza = CURRENT_TIMESTAMP
    WHERE idCiudad = id;
END;
$$;














