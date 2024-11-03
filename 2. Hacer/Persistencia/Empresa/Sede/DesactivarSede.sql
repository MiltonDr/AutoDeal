CREATE OR REPLACE PROCEDURE desactivar_sede(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE sede
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idSede = id;
END;
$$;

























