CREATE OR REPLACE PROCEDURE desactivar_estado_vehiculo(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE estado_vehiculo
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idEstadoVehiculo = id;
END;
$$;






































