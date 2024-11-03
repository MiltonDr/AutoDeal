CREATE OR REPLACE PROCEDURE desactivar_estado_venta(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE estado_venta
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idEstadoVenta = id;
END;
$$;

