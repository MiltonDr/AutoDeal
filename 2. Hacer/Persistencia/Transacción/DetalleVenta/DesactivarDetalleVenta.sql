CREATE OR REPLACE PROCEDURE desactivar_detalle_venta(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE detalle_venta
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idDetalleVenta = id;
END;
$$;

