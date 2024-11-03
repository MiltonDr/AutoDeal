CREATE OR REPLACE PROCEDURE eliminar_estado_venta(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM estado_venta
    WHERE idEstadoVenta = id;
END;
$$;



