CREATE OR REPLACE PROCEDURE actualizar_detalle_venta(id UUID, id_venta UUID, id_catalogo UUID, cantidad INT, precio_unitario DECIMAL(10, 2))
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE detalle_venta
    SET idVenta = id_venta,
        idCatalogo = id_catalogo,
        Cantidad = cantidad,
        PrecioUnitario = precio_unitario,
        Subtotal = Cantidad * PrecioUnitario,
        actualiza = CURRENT_TIMESTAMP
    WHERE idDetalleVenta = id;
END;
$$;
