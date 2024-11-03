CREATE OR REPLACE PROCEDURE insertar_estado_vehiculo(nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO estado_vehiculo (Nombre) 
    VALUES (nombre);
END;
$$;





































