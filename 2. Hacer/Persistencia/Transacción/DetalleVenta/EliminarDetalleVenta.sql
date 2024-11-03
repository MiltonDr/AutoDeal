CREATE OR REPLACE PROCEDURE eliminar_detalle_venta(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM detalle_venta
    WHERE idDetalleVenta = id;
END;
$$;



