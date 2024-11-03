CREATE OR REPLACE FUNCTION obtener_paises_activos()
RETURNS TABLE(idPais UUID, Nombre VARCHAR, Activo BIT, Actualiza TIMESTAMP)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT p.idPais, p.Nombre, p.Activo, p.Actualiza
    FROM Pais p
    WHERE p.Activo = B'1';
END;
$$;
