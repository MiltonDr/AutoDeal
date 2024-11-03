CREATE OR REPLACE FUNCTION obtener_tipos_catalogo_activos()
RETURNS TABLE(idTipoCatalogo UUID, Nombre VARCHAR, actualiza TIMESTAMP) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT idTipoCatalogo, Nombre, actualiza
    FROM tipo_catalogo
    WHERE activo = B'1';
END;
$$;












































