CREATE OR REPLACE PROCEDURE insertar_empleado(nombre VARCHAR, id_sede UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO empleado (Nombre, idSede) 
    VALUES (nombre, id_sede);
END;
$$;





























