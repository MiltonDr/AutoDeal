CREATE OR REPLACE PROCEDURE desactivar_venta(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE venta
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idVenta = id;
END;
$$;

