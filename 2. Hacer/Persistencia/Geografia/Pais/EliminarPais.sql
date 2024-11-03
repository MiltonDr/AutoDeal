CREATE OR REPLACE PROCEDURE eliminar_pais(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM pais
    WHERE idPais = id;
END;
$$;




