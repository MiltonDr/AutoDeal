CREATE OR REPLACE PROCEDURE eliminar_ciudad(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM ciudad
    WHERE idCiudad = id;
END;
$$;

















