CREATE OR REPLACE FUNCTION obtener_concensionarios_activos()
RETURNS TABLE(idConcensionario UUID, Nombre VARCHAR, actualiza TIMESTAMP) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT idConcensionario, Nombre, actualiza
    FROM concensionario
    WHERE activo = B'1';
END;
$$;





















