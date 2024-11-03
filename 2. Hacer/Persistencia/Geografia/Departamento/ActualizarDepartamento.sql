CREATE OR REPLACE PROCEDURE actualizar_nombre_departamento(id UUID, nuevo_nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE departamento
    SET Nombre = nuevo_nombre,
        actualiza = CURRENT_TIMESTAMP
    WHERE idDepartamento = id;
END;
$$;









