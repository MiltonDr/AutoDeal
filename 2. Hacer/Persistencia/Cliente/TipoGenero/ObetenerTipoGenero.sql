CREATE OR REPLACE FUNCTION obtener_tipos_genero_activos()
RETURNS TABLE(idTipoGenero UUID, Nombre VARCHAR, actualiza TIMESTAMP) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT idTipoGenero, Nombre, actualiza
    FROM tipo_genero
    WHERE activo = B'1';
END;
$$;
























































