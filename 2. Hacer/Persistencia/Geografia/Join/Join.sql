SELECT jsonb_build_object
(
    'IdPais', P.idpais,
	'NombrePais', P.nombre,
	'IdDepartamento', D.iddepartamento,
	'NombreDepartamento', D.nombre,	
	'IdCiudad', C.idciudad,
	'NombreCiudad', C.nombre

)
AS Geografia
	FROM pais P
	INNER JOIN departamento D
	    ON P.idpais = D.idpais
	INNER JOIN ciudad C
	    ON D.iddepartamento = C.iddepartamento
WHERE 
	    P.activo = '1'
	AND
	    D.activo = '1'
	AND
	    C.activo = '1';
		




	