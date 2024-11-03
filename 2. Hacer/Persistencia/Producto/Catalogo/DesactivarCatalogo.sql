CREATE OR REPLACE PROCEDURE desactivar_catalogo(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE catalogo
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idCatalogo = id;
END;
$$;

















































