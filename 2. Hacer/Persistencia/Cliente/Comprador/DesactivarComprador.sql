CREATE OR REPLACE PROCEDURE desactivar_comprador(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE comprador
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idComprador = id;
END;
$$;