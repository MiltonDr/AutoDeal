CREATE OR REPLACE PROCEDURE insertar_ciudad(nombre VARCHAR, id_departamento UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO ciudad (Nombre, idDepartamento) 
    VALUES (nombre, id_departamento);
END;
$$;













