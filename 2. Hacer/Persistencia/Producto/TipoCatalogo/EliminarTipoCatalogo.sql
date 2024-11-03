CREATE OR REPLACE PROCEDURE eliminar_tipo_catalogo(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM tipo_catalogo
    WHERE idTipoCatalogo = id;
END;
$$;













































