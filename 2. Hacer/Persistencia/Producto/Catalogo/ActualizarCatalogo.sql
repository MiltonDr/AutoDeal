CREATE OR REPLACE PROCEDURE actualizar_nombre_catalogo(id UUID, nuevo_nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE catalogo
    SET Nombre = nuevo_nombre,
        actualiza = CURRENT_TIMESTAMP
    WHERE idCatalogo = id;
END;
$$;
















































