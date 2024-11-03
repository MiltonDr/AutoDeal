CREATE OR REPLACE PROCEDURE eliminar_concensionario(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM concensionario
    WHERE idConcensionario = id;
END;
$$;






















