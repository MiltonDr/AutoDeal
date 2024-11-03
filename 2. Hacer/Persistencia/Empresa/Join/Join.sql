SELECT jsonb_build_object
(
    'IdConcensionario', C.idconcensionario,
	'NombreConcensionario', C.nombre,
	'IdSede', S.idsede,
	'NombreSede', S.nombre,	
	'IdEmpleado', E.idempleado,
	'NombreEmpleado', E.nombre

)
AS Empresa
	FROM concensionario C
	INNER JOIN Sede S
	    ON C.idconcensionario = S.idconcensionario
	INNER JOIN Empleado E
	    ON S.idsede = E.idsede
WHERE 
	    C.activo = '1'
	AND
	    S.activo = '1'
	AND
	    E.activo = '1';
		