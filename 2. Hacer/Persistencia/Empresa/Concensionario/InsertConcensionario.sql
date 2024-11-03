CREATE OR REPLACE PROCEDURE insertar_concensionario(nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO concensionario (Nombre) 
    VALUES (nombre);
END;
$$;


















