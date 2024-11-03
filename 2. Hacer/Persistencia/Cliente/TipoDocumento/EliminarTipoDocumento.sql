CREATE OR REPLACE PROCEDURE eliminar_tipo_documento(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM tipo_documento
    WHERE idTipoDocumento = id;
END;
$$;



































































