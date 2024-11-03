CREATE OR REPLACE PROCEDURE actualizar_nombre_tipo_catalogo(id UUID, nuevo_nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE tipo_catalogo
    SET Nombre = nuevo_nombre,
        actualiza = CURRENT_TIMESTAMP
    WHERE idTipoCatalogo = id;
END;
$$;










































