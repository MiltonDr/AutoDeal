CREATE OR REPLACE PROCEDURE insertar_tipo_documento(nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO tipo_documento (Nombre) 
    VALUES (nombre);
END;
$$;































































