CREATE OR REPLACE PROCEDURE insertar_sede(nombre VARCHAR, id_concensionario UUID, id_ciudad UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO sede (Nombre, idConcensionario, idCiudad) 
    VALUES (nombre, id_concensionario, id_ciudad);
END;
$$;























