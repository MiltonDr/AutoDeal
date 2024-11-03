SELECT jsonb_build_object
(
    'IdCatalogo', C.idcatalogo,
	'NombreCatalogo', C.nombre,
	'IdTipoCatalogo', TC.idtipocatalogo,
	'NombreTipoCatalogo', TC.nombre,	
	'IdEstadoVehiculo', EV.idestadovehiculo,
	'NombreEstadoVehiculo', EV.nombre

)
AS Producto
	FROM catalogo C
	INNER JOIN tipo_catalogo TC
	    ON C.idtipocatalogo = TC.idtipocatalogo
	INNER JOIN estado_vehiculo EV
	    ON C.idestadovehiculo = EV.idestadovehiculo
WHERE 
	    C.activo = '1'
	AND
	    TC.activo = '1'
	AND
	    EV.activo = '1';
		