CREATE OR REPLACE PROCEDURE eliminar_empleado(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM empleado
    WHERE idEmpleado = id;
END;
$$;

































