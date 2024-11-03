CREATE OR REPLACE PROCEDURE desactivar_concensionario(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE concensionario
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idConcensionario = id;
END;
$$;




















