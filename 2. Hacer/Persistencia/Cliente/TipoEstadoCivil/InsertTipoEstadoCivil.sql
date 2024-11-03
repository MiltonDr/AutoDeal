CREATE OR REPLACE PROCEDURE insertar_tipo_estado_civil(nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO tipo_estado_civil (Nombre) 
    VALUES (nombre);
END;
$$;


























































