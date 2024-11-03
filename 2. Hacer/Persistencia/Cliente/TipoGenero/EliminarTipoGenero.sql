CREATE OR REPLACE PROCEDURE eliminar_tipo_genero(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM tipo_genero
    WHERE idTipoGenero = id;
END;
$$;

























































