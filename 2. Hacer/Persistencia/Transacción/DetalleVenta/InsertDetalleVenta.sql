CREATE OR REPLACE PROCEDURE insertar_detalle_venta(id_venta UUID, id_catalogo UUID, cantidad INT, precio_unitario DECIMAL(10, 2))
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO detalle_venta (idVenta, idCatalogo, Cantidad, PrecioUnitario) 
    VALUES (id_venta, id_catalogo, cantidad, precio_unitario);
END;
$$;
