// apisimple.js
const express = require('express');
const { ModelComprador } = require('../../../domain/entitie/Comprador/ModelComprador');
const { CoreComprador } = require('../../../core/entitie/Comprador/CoreComprador');

const { ModelTipoDocumento } = require('../../../domain/entitie/TipoDocumento/ModelTipoDocumento');
const { CoreTipoDocumento } = require('../../../core/entitie/TipoDocumento/CoreTipoDocumento');

const { ModelTipoGenero } = require('../../../domain/entitie/TipoGenero/ModelTipoGenero');
const { CoreTipoGenero } = require('../../../core/entitie/TipoGenero/CoreTipoGenero');

const { ModelTipoEstadoCivil } = require('../../../domain/entitie/TipoEstadoCivil/ModelTipoEstadoCivil');
const { CoreTipoEstadoCivil } = require('../../../core/entitie/TipoEstadoCivil/CoreTipoEstadoCivil');

var router = express.Router();

///////////////////////////////////////////////////////////////////////////////////////////////////

// GET
/**
 * @swagger
 * /operaciongetcomprador:
 *   get:
 *     tags:
 *       - Comprador
 *     summary: Get all ModelComprador
 *     responses:
 *       200:
 *         description: List of ModelComprador
 */
router.get('/operaciongetcomprador', async (req, res) => {
  try {
    const corecomprador = new CoreComprador();
    const respuestacorecomprador = await corecomprador.consultarcomprador();
    res.status(200).json(respuestacorecomprador);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get by Id
/**
 * @swagger
 * /operaciongetcompradorid/{id}:
 *   get:
 *     tags:
 *       - Comprador
 *     summary: Get ModelComprador by Id
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of ModelComprador
 */
router.get('/operaciongetcompradorid/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const corecomprador = new CoreComprador();
    const respuestacorecomprador = await corecomprador.consultarcompradorid(id);
    res.status(200).json(respuestacorecomprador);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get by Nombre
/**
 * @swagger
 * /operaciongetcompradornombrecomprador/{nombrecomprador}:
 *   get:
 *     tags:
 *       - Comprador
 *     summary: Get ModelComprador by NombreComprador
 *     parameters:
 *       - name: nombrecomprador
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of ModelComprador
 */
router.get('/operaciongetcompradornombrecomprador/:nombrecomprador', async (req, res) => {
  try {
    const { nombrecomprador } = req.params;
    const corecomprador = new CoreComprador();
    const respuestacorecomprador = await corecomprador.consultarcompradornombrecomprador(nombrecomprador);
    res.status(200).json(respuestacorecomprador);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////

// GET
/**
 * @swagger
 * /operaciongettipodocumento:
 *   get:
 *     tags:
 *       - TipoDocumento
 *     summary: Get all ModelTipoDocumento
 *     responses:
 *       200:
 *         description: List of ModelTipoDocumento
 */
router.get('/operaciongettipodocumento', async (req, res) => {
  try {
    const coretipodocumento = new CoreTipoDocumento();
    const respuestacoretipodocumento = await coretipodocumento.consultartipodocumento();
    res.status(200).json(respuestacoretipodocumento);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get by Id
/**
 * @swagger
 * /operaciongettipodocumentoid/{id}:
 *   get:
 *     tags:
 *       - TipoDocumento
 *     summary: Get ModelTipoDocumento by Id
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of ModelTipoDocumento
 */
router.get('/operaciongettipodocumentoid/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const coretipodocumento = new CoreTipoDocumento();
    const respuestacoretipodocumento = await coretipodocumento.consultartipodocumentoid(id);
    res.status(200).json(respuestacoretipodocumento);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get by Nombre
/**
 * @swagger
 * /operaciongettipodocumentonombretipodocumento/{nombretipodocumento}:
 *   get:
 *     tags:
 *       - TipoDocumento
 *     summary: Get ModelTipoDocumento by NombreTipoDocumento
 *     parameters:
 *       - name: nombretipodocumento
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of ModelTipoDocumento
 */
router.get('/operaciongettipodocumentonombretipodocumento/:nombretipodocumento', async (req, res) => {
  try {
    const { nombretipodocumento } = req.params;
    const coretipodocumento = new CoreTipoDocumento();
    const respuestacoretipodocumento = await coretipodocumento.consultartipodocumentonombretipodocumento(
      nombretipodocumento
    );
    res.status(200).json(respuestacoretipodocumento);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////

// GET
/**
 * @swagger
 * /operaciongettipogenero:
 *   get:
 *     tags:
 *       - TipoGenero
 *     summary: Get all ModelTipoGenero
 *     responses:
 *       200:
 *         description: List of ModelTipoGenero
 */
router.get('/operaciongettipogenero', async (req, res) => {
  try {
    const coretipogenero = new CoreTipoGenero();
    const respuestacoretipogenero = await coretipogenero.consultartipogenero();
    res.status(200).json(respuestacoretipogenero);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get by Id
/**
 * @swagger
 * /operaciongettipogeneroid/{id}:
 *   get:
 *     tags:
 *       - TipoGenero
 *     summary: Get ModelTipoGenero by Id
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of ModelTipoGenero
 */
router.get('/operaciongettipogeneroid/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const coretipogenero = new CoreTipoGenero();
    const respuestacoretipogenero = await coretipogenero.consultartipogeneroid(id);
    res.status(200).json(respuestacoretipogenero);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get by Nombre
/**
 * @swagger
 * /operaciongettipogeneronombretipogenero/{nombretipogenero}:
 *   get:
 *     tags:
 *       - TipoGenero
 *     summary: Get ModelTipoGenero by NombreTipoGenero
 *     parameters:
 *       - name: nombretipogenero
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of ModelTipoGenero
 */
router.get('/operaciongettipogeneronombretipogenero/:nombretipogenero', async (req, res) => {
  try {
    const { nombretipogenero } = req.params;
    const coretipogenero = new CoreTipoGenero();
    const respuestacoretipogenero = await coretipogenero.consultartipogeneronombretipogenero(nombretipogenero);
    res.status(200).json(respuestacoretipogenero);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////

// GET
/**
 * @swagger
 * /operaciongettipoestadocivil:
 *   get:
 *     tags:
 *       - TipoEstadoCivil
 *     summary: Get all ModelTipoEstadoCivil
 *     responses:
 *       200:
 *         description: List of ModelTipoEstadoCivil
 */
router.get('/operaciongettipoestadocivil', async (req, res) => {
  try {
    const coretipoestadocivil = new CoreTipoEstadoCivil();
    const respuestacoretipoestadocivil = await coretipoestadocivil.consultartipoestadocivil();
    res.status(200).json(respuestacoretipoestadocivil);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get by Id
/**
 * @swagger
 * /operaciongettipoestadocivilid/{id}:
 *   get:
 *     tags:
 *       - TipoEstadoCivil
 *     summary: Get ModelTipoEstadoCivil by Id
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of ModelTipoEstadoCivil
 */
router.get('/operaciongettipoestadocivilid/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const coretipoestadocivil = new CoreTipoEstadoCivil();
    const respuestacoretipoestadocivil = await coretipoestadocivil.consultartipoestadocivilid(id);
    res.status(200).json(respuestacoretipoestadocivil);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get by Nombre
/**
 * @swagger
 * /operaciongettipoestadocivilnombretipoestadocivil/{nombretipoestadocivil}:
 *   get:
 *     tags:
 *       - TipoEstadoCivil
 *     summary: Get ModelTipoEstadoCivil by NombreTipoEstadoCivil
 *     parameters:
 *       - name: nombretipoestadocivil
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of ModelTipoEstadoCivil
 */
router.get('/operaciongettipoestadocivilnombretipoestadocivil/:nombretipoestadocivil', async (req, res) => {
  try {
    const { nombretipoestadocivil } = req.params;
    const coretipoestadocivil = new CoreTipoEstadoCivil();
    const respuestacoretipoestadocivil = await coretipoestadocivil.consultartipoestadocivilnombretipoestadocivil(
      nombretipoestadocivil
    );
    res.status(200).json(respuestacoretipoestadocivil);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
