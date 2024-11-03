CREATE OR REPLACE PROCEDURE actualizar_nombre_estado_venta(id UUID, nuevo_nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE estado_venta
    SET Nombre = nuevo_nombre,
        actualiza = CURRENT_TIMESTAMP
    WHERE idEstadoVenta = id;
END;
$$;
