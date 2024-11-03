CREATE OR REPLACE PROCEDURE insertar_departamento(nombre VARCHAR, id_pais UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO departamento (Nombre, idPais) VALUES (nombre, id_pais);
END;
$$;








