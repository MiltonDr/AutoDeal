CREATE OR REPLACE PROCEDURE actualizar_nombre_empleado(id UUID, nuevo_nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE empleado
    SET Nombre = nuevo_nombre,
        actualiza = CURRENT_TIMESTAMP
    WHERE idEmpleado = id;
END;
$$;






























