CREATE OR REPLACE PROCEDURE eliminar_venta(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM venta
    WHERE idVenta = id;
END;
$$;



