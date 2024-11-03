CREATE OR REPLACE PROCEDURE desactivar_tipo_documento(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE tipo_documento
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idTipoDocumento = id;
END;
$$;

































































