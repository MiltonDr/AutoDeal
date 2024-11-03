CREATE OR REPLACE PROCEDURE insertar_catalogo(nombre VARCHAR, id_tipo_catalogo UUID, id_estado_vehiculo UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO catalogo (Nombre, idTipoCatalogo, idEstadoVehiculo) 
    VALUES (nombre, id_tipo_catalogo, id_estado_vehiculo);
END;
$$;















































