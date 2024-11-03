CREATE OR REPLACE PROCEDURE insertar_estado_venta(nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO estado_venta (Nombre) 
    VALUES (nombre);
END;
$$;