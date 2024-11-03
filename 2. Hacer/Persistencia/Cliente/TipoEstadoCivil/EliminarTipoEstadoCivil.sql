CREATE OR REPLACE PROCEDURE eliminar_tipo_estado_civil(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM tipo_estado_civil
    WHERE idTipoEstadoCivil = id;
END;
$$;





























































