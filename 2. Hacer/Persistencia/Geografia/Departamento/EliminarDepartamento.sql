CREATE OR REPLACE PROCEDURE eliminar_departamento(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM departamento
    WHERE idDepartamento = id;
END;
$$;











