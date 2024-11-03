CREATE OR REPLACE PROCEDURE actualizar_nombre_estado_vehiculo(id UUID, nuevo_nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE estado_vehiculo
    SET Nombre = nuevo_nombre,
        actualiza = CURRENT_TIMESTAMP
    WHERE idEstadoVehiculo = id;
END;
$$;






































