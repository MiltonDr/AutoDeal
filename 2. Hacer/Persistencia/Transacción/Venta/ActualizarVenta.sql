CREATE OR REPLACE PROCEDURE actualizar_venta(id UUID, id_estado_venta UUID, id_comprador UUID, id_empleado UUID, id_ciudad UUID, monto DECIMAL(10, 2))
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE venta
    SET idEstadoVenta = id_estado_venta,
        idComprador = id_comprador,
        idEmpleado = id_empleado,
        idCiudad = id_ciudad,
        Monto = monto,
        actualiza = CURRENT_TIMESTAMP
    WHERE idVenta = id;
END;
$$;
