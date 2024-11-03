CREATE OR REPLACE PROCEDURE eliminar_estado_vehiculo(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM estado_vehiculo
    WHERE idEstadoVehiculo = id;
END;
$$;








































