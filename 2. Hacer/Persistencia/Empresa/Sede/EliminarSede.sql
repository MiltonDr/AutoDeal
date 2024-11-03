CREATE OR REPLACE PROCEDURE eliminar_sede(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM sede
    WHERE idSede = id;
END;
$$;



























