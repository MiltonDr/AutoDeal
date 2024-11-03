CREATE OR REPLACE PROCEDURE desactivar_tipo_catalogo(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE tipo_catalogo
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idTipoCatalogo = id;
END;
$$;











































