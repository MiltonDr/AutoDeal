CREATE OR REPLACE FUNCTION obtener_estados_venta_activos()
RETURNS TABLE(idEstadoVenta UUID, Nombre VARCHAR, actualiza TIMESTAMP) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT idEstadoVenta, Nombre, actualiza
    FROM estado_venta
    WHERE activo = B'1';
END;
$$;


