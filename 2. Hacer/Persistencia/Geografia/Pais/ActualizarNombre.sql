CREATE OR REPLACE PROCEDURE actualizar_nombre_pais(id UUID, nuevo_nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE pais
    SET Nombre = nuevo_nombre,
        actualiza = CURRENT_TIMESTAMP
    WHERE idPais = id;
END;
$$;


