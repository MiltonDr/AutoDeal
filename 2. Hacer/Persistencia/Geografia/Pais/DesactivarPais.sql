CREATE OR REPLACE PROCEDURE desactivar_pais(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE pais
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idPais = id;
END;
$$;



