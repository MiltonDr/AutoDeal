CREATE OR REPLACE PROCEDURE eliminar_comprador(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM comprador
    WHERE idComprador = id;
END;
$$;

