CREATE OR REPLACE PROCEDURE desactivar_tipo_genero(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE tipo_genero
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idTipoGenero = id;
END;
$$;























































