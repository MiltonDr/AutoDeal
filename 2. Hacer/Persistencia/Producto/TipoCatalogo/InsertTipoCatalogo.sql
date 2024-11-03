CREATE OR REPLACE PROCEDURE insertar_tipo_catalogo(nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO tipo_catalogo (Nombre) 
    VALUES (nombre);
END;
$$;









































