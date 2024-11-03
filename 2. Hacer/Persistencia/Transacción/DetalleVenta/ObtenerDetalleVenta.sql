CREATE OR REPLACE FUNCTION obtener_detalles_venta_activos()
RETURNS TABLE(idDetalleVenta UUID, idVenta UUID, idCatalogo UUID, Cantidad INT, PrecioUnitario DECIMAL(10, 2), Subtotal DECIMAL(10, 2), actualiza TIMESTAMP) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT idDetalleVenta, idVenta, idCatalogo, Cantidad, PrecioUnitario, Subtotal, actualiza
    FROM detalle_venta
    WHERE activo = B'1';
END;
$$;


