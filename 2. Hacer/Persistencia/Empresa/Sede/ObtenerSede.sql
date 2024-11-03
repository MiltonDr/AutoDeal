CREATE OR REPLACE FUNCTION obtener_sedes_activas_por_concensionario_y_ciudad(id_concensionario UUID, id_ciudad UUID)
RETURNS TABLE(idSede UUID, Nombre VARCHAR, actualiza TIMESTAMP) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT idSede, Nombre, actualiza
    FROM sede
    WHERE idConcensionario = id_concensionario 
      AND idCiudad = id_ciudad 
      AND activo = B'1';
END;
$$;


























