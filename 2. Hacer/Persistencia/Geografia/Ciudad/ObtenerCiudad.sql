CREATE OR REPLACE FUNCTION obtener_ciudades_activas_por_departamento(id_departamento UUID)
RETURNS TABLE(idCiudad UUID, Nombre VARCHAR, actualiza TIMESTAMP) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT idCiudad, Nombre, actualiza
    FROM ciudad
    WHERE idDepartamento = id_departamento AND activo = B'1';
END;
$$;
















