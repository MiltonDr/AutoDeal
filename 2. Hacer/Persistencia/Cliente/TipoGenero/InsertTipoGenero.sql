CREATE OR REPLACE PROCEDURE insertar_tipo_genero(nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO tipo_genero (Nombre) 
    VALUES (nombre);
END;
$$;





















































