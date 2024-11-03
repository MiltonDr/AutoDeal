CREATE OR REPLACE PROCEDURE eliminar_catalogo(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM catalogo
    WHERE idCatalogo = id;
END;
$$;



















































