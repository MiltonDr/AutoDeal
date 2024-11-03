CREATE OR REPLACE FUNCTION obtener_catalogos_activos()
RETURNS TABLE(idCatalogo UUID, Nombre VARCHAR, actualiza TIMESTAMP) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT idCatalogo, Nombre, actualiza
    FROM catalogo
    WHERE activo = B'1';
END;
$$;


















































