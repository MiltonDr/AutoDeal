SELECT jsonb_build_object
(
    'IdComprador', C.idcomprador,
	'NombreComprador', C.nombre,
	'IdTipoDocumento', TD.idtipodocumento,
	'NombreTipoDocumento', TD.nombre,	
	'IdTipoEstadoCivil', TE.idtipoestadocivil,
	'NombreTipoEstadoCivil', TE.nombre,
	'IdTipoGenero', TG.idtipogenero,
	'NombreTipoGenero', TG.nombre

)
AS Cliente
	FROM comprador C
	INNER JOIN tipo_documento TD
	    ON C.idtipodocumento = TD.idtipodocumento
	INNER JOIN tipo_estado_civil TE
	    ON C.idtipoestadocivil = TE.idtipoestadocivil
	INNER JOIN tipo_genero TG
	    ON C.idtipogenero = TG.idtipogenero
WHERE 
	    C.activo = '1'
	AND
	    TD.activo = '1'
	AND
	    TE.activo = '1'
	AND
	    TG.activo = '1';
		