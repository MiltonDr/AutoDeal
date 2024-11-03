CREATE OR REPLACE PROCEDURE desactivar_ciudad(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE ciudad
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idCiudad = id;
END;
$$;















