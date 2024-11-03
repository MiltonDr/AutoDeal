CREATE TABLE "Pais" (
	"IdPais" UUID NOT NULL UNIQUE,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdPais")
);

CREATE TABLE "Departamento" (
	"IdDepartamento" UUID NOT NULL UNIQUE,
	"IdPais" UUID,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdDepartamento")
);


CREATE TABLE "Ciudad" (
	"IdCiudad" UUID NOT NULL UNIQUE,
	"IdDepartamento" UUID,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdCiudad")
);


CREATE TABLE "Concesionario" (
	"IdConcesionario" UUID NOT NULL UNIQUE,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdConcesionario")
);


CREATE TABLE "Sede" (
	"IdSede" UUID NOT NULL UNIQUE,
	"IdCiudad" UUID,
	"IdConcesionario" UUID,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdSede")
);


CREATE TABLE "Empleado" (
	"IdEmpleado" UUID NOT NULL UNIQUE,
	"IdSede" UUID,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdEmpleado")
);


CREATE TABLE "Comprador" (
	"IdComprador" UUID NOT NULL UNIQUE,
	"IdTipoDocumento" UUID,
	"IdTipoEstadoCivil" UUID,
	"IdTipoGenero" UUID,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdComprador")
);


CREATE TABLE "TipoDocumento" (
	"IdTipoDocumento" UUID NOT NULL UNIQUE,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdTipoDocumento")
);


CREATE TABLE "TipoEstadoCivil" (
	"IdTipoEstadoCivil" UUID NOT NULL UNIQUE,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdTipoEstadoCivil")
);


CREATE TABLE "TipoGenero" (
	"IdTipoGenero" UUID NOT NULL UNIQUE,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdTipoGenero")
);


CREATE TABLE "Catalogo" (
	"IdCatalogo" UUID NOT NULL UNIQUE,
	"IdTipoCatalogo" UUID,
	"IdEstadoVehiculo" UUID,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdCatalogo")
);


CREATE TABLE "TipoCatalogo" (
	"IdTipoCatalogo" UUID NOT NULL UNIQUE,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdTipoCatalogo")
);


CREATE TABLE "EstadoVehiculo" (
	"IdEstadoVehiculo" UUID NOT NULL UNIQUE,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdEstadoVehiculo")
);


CREATE TABLE "Venta" (
	"IdVenta" UUID NOT NULL UNIQUE,
	"IdEmpleado" UUID,
	"IdCiudad" UUID,
	"IdComprador" UUID,
	"IdEstadoVenta" UUID,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdVenta")
);


CREATE TABLE "EstadoVenta" (
	"IdEstadoVenta" UUID NOT NULL UNIQUE,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdEstadoVenta")
);


CREATE TABLE "DetalleVenta" (
	"IdDetalleVenta" UUID NOT NULL UNIQUE,
	"IdVenta" UUID,
	"IdCatalogo" UUID,
	"Nombre" VARCHAR NOT NULL,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("IdDetalleVenta")
);


-- Foreign key para la tabla Departamento
ALTER TABLE "Departamento"
ADD CONSTRAINT fk_departamento_pais
FOREIGN KEY ("IdPais") REFERENCES "Pais"("IdPais");

-- Foreign key para la tabla Ciudad
ALTER TABLE "Ciudad"
ADD CONSTRAINT fk_ciudad_departamento
FOREIGN KEY ("IdDepartamento") REFERENCES "Departamento"("IdDepartamento");

-- Foreign key para la tabla Sede
ALTER TABLE "Sede"
ADD CONSTRAINT fk_sede_ciudad
FOREIGN KEY ("IdCiudad") REFERENCES "Ciudad"("IdCiudad");

ALTER TABLE "Sede"
ADD CONSTRAINT fk_sede_concesionario
FOREIGN KEY ("IdConcesionario") REFERENCES "Concesionario"("IdConcesionario");

-- Foreign key para la tabla Empleado
ALTER TABLE "Empleado"
ADD CONSTRAINT fk_empleado_sede
FOREIGN KEY ("IdSede") REFERENCES "Sede"("IdSede");

-- Foreign key para la tabla Catalogo
ALTER TABLE "Catalogo"
ADD CONSTRAINT fk_catalogo_estadovehiculo
FOREIGN KEY ("IdEstadoVehiculo") REFERENCES "EstadoVehiculo"("IdEstadoVehiculo");

ALTER TABLE "Catalogo"
ADD CONSTRAINT fk_catalogo_tipocatalogo
FOREIGN KEY ("IdTipoCatalogo") REFERENCES "TipoCatalogo"("IdTipoCatalogo");

-- Foreign key para la tabla Comprador
ALTER TABLE "Comprador"
ADD CONSTRAINT fk_comprador_tipodocumento
FOREIGN KEY ("IdTipoDocumento") REFERENCES "TipoDocumento"("IdTipoDocumento");

ALTER TABLE "Comprador"
ADD CONSTRAINT fk_comprador_tipoestadocivil
FOREIGN KEY ("IdTipoEstadoCivil") REFERENCES "TipoEstadoCivil"("IdTipoEstadoCivil");

ALTER TABLE "Comprador"
ADD CONSTRAINT fk_comprador_tipogenero
FOREIGN KEY ("IdTipoGenero") REFERENCES "TipoGenero"("IdTipoGenero");

-- Foreign key para la tabla Venta
ALTER TABLE "Venta"
ADD CONSTRAINT fk_venta_estadoventa
FOREIGN KEY ("IdEstadoVenta") REFERENCES "EstadoVenta"("IdEstadoVenta");

ALTER TABLE "Venta"
ADD CONSTRAINT fk_venta_comprador
FOREIGN KEY ("IdComprador") REFERENCES "Comprador"("IdComprador");

ALTER TABLE "Venta"
ADD CONSTRAINT fk_venta_empleado
FOREIGN KEY ("IdEmpleado") REFERENCES "Empleado"("IdEmpleado");

ALTER TABLE "Venta"
ADD CONSTRAINT fk_venta_ciudad
FOREIGN KEY ("IdCiudad") REFERENCES "Ciudad"("IdCiudad");

-- Foreign key para la tabla DetalleVenta
ALTER TABLE "DetalleVenta"
ADD CONSTRAINT fk_detalleventa_venta
FOREIGN KEY ("IdVenta") REFERENCES "Venta"("IdVenta");

ALTER TABLE "DetalleVenta"
ADD CONSTRAINT fk_detalleventa_catalogo
FOREIGN KEY ("IdCatalogo") REFERENCES "Catalogo"("IdCatalogo");
