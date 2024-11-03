CREATE OR REPLACE PROCEDURE actualizar_nombre_concensionario(id UUID, nuevo_nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE concensionario
    SET Nombre = nuevo_nombre,
        actualiza = CURRENT_TIMESTAMP
    WHERE idConcensionario = id;
END;
$$;



















