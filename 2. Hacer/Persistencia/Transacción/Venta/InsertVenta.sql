CREATE OR REPLACE PROCEDURE insertar_venta(id_estado_venta UUID, id_comprador UUID, id_empleado UUID, id_ciudad UUID, monto DECIMAL(10, 2))
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO venta (idEstadoVenta, idComprador, idEmpleado, idCiudad, Monto) 
    VALUES (id_estado_venta, id_comprador, id_empleado, id_ciudad, monto);
END;
$$;