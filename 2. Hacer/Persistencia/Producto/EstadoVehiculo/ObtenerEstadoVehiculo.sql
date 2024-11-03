CREATE OR REPLACE FUNCTION obtener_estados_vehiculos_activos()
RETURNS TABLE(idEstadoVehiculo UUID, Nombre VARCHAR, actualiza TIMESTAMP) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT idEstadoVehiculo, Nombre, actualiza
    FROM estado_vehiculo
    WHERE activo = B'1';
END;
$$;







































