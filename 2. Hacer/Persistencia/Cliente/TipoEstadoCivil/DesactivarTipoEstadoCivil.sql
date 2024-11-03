CREATE OR REPLACE PROCEDURE desactivar_tipo_estado_civil(id UUID)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE tipo_estado_civil
    SET activo = B'0',
        actualiza = CURRENT_TIMESTAMP
    WHERE idTipoEstadoCivil = id;
END;
$$;




























































