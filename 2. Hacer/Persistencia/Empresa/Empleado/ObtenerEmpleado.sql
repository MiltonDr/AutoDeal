CREATE OR REPLACE FUNCTION obtener_empleados_activos_por_sede(id_sede UUID)
RETURNS TABLE(idEmpleado UUID, Nombre VARCHAR, actualiza TIMESTAMP) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT idEmpleado, Nombre, actualiza
    FROM empleado
    WHERE idSede = id_sede AND activo = B'1';
END;
$$;
































