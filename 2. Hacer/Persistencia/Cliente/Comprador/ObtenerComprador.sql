CREATE OR REPLACE FUNCTION obtener_compradores_activos()
RETURNS TABLE(idComprador UUID, Nombre VARCHAR, Apellido VARCHAR, NumeroDocumento VARCHAR, actualiza TIMESTAMP) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT idComprador, Nombre, Apellido, NumeroDocumento, actualiza
    FROM comprador
    WHERE activo = B'1';
END;
$$;
