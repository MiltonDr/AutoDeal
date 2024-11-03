CREATE OR REPLACE PROCEDURE desactivar_departamento(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE departamento
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idDepartamento = id;
END;
$$;










