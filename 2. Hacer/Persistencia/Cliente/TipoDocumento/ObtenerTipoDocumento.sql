CREATE OR REPLACE FUNCTION obtener_tipos_documento_activos()
RETURNS TABLE(idTipoDocumento UUID, Nombre VARCHAR, actualiza TIMESTAMP) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT idTipoDocumento, Nombre, actualiza
    FROM tipo_documento
    WHERE activo = B'1';
END;
$$;


































































