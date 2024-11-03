CREATE OR REPLACE FUNCTION obtener_departamentos_activos_por_pais(id_pais UUID)
RETURNS TABLE(idDepartamento UUID, Nombre VARCHAR, actualiza TIMESTAMP) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT idDepartamento, Nombre, actualiza
    FROM departamento
    WHERE idPais = id_pais AND activo = B'1';
END;
$$;










