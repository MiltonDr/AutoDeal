CREATE OR REPLACE PROCEDURE insertar_pais(nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO pais (Nombre) VALUES (nombre);
END;
$$;


