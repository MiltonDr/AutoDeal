CREATE OR REPLACE FUNCTION obtener_tipos_estado_civil_activos()
RETURNS TABLE(idTipoEstadoCivil UUID, Nombre VARCHAR, actualiza TIMESTAMP) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT idTipoEstadoCivil, Nombre, actualiza
    FROM tipo_estado_civil
    WHERE activo = B'1';
END;
$$;




























































