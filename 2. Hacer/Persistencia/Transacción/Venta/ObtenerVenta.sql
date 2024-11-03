CREATE OR REPLACE FUNCTION obtener_ventas_activas()
RETURNS TABLE(idVenta UUID, idEstadoVenta UUID, idComprador UUID, idEmpleado UUID, idCiudad UUID, Fecha TIMESTAMP, Monto DECIMAL(10, 2), actualiza TIMESTAMP) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT idVenta, idEstadoVenta, idComprador, idEmpleado, idCiudad, Fecha, Monto, actualiza
    FROM venta
    WHERE activo = B'1';
END;
$$;


