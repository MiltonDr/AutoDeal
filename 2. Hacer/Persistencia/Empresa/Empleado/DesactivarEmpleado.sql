CREATE OR REPLACE PROCEDURE desactivar_empleado(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE empleado
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idEmpleado = id;
END;
$$;































