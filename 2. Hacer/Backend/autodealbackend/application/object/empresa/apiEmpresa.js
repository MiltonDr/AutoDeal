//apisimple.js

const express = require('express');
const { ModelEmpresa, modelempresa } = require('../../../domain/object/empresa/modelEmpresa');
const { CoreEmpresa, coreempresa } = require('../../../core/object/empresa/coreempresa');

var router = express.Router();

// GET
/**
 * @swagger
 * /operaciongetempresa:
 *   get:
 *     summary: Get all ModelEmpresa
 *     responses:
 *       200:
 *         description: List of ModelEmpresa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idsede:
 *                     type: string
 *                   idempleado:
 *                     type: string
 *                   nombresede:
 *                     type: string
 *                   nombreempleado:
 *                     type: string
 *                   idconcensionario:
 *                     type: string
 *                   nombreconcensionario:
 *                     type: string
 */
router.get('/operaciongetempresa', async (req, res) => {
  try {
    const coreempresa = new CoreEmpresa();
    const respuestacoreempresa = await coreempresa.consultarempresa();
    res.status(200).json(respuestacoreempresa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get by Id
/**
 * @swagger
 * /operaciongetempresaid/{id}:
 *   get:
 *     summary: Get ModelEmpresa by Id
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of ModelEmpresa
 */
router.get('/operaciongetempresaid/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const coreempresa = new CoreEmpresa();
    const respuestacoreempresa = await coreempresa.consultarempresaid(id);
    res.status(200).json(respuestacoreempresa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get by Nombre
/**
 * @swagger
 * /operaciongetempresanombresede/{nombresede}:
 *   get:
 *     summary: Get ModelEmpresa by NombreSede
 *     parameters:
 *       - name: nombresede
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Item of ModelEmpresa
 */
router.get('/operaciongetempresanombresede/:nombresede', async (req, res) => {
  try {
    const { nombresede } = req.params;
    const coreempresa = new CoreEmpresa();
    const respuestacoreempresa = await coreempresa.consultarempresanombresede(nombresede);
    res.status(200).json(respuestacoreempresa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST
/**
 * @swagger
 * /operacionpostempresa:
 *   post:
 *     summary: Create a new ModelEmpresa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idsede:
 *                 type: string
 *               idempleado:
 *                 type: string
 *               nombresede:
 *                 type: string
 *               nombreempleado:
 *                 type: string
 *               idconcensionario:
 *                 type: string
 *               nombreconcensionario:
 *                 type: string
 *     responses:
 *       201:
 *         description: ModelEmpresa created
 */

router.post('/operacionpostempresa', (req, res) => {
  const { idsede, idempleado, nombresede, nombreempleado, idconcensionario, nombreconcensionario } = req.body;
  const newEmpresa = new ModelEmpresa(
    idsede,
    idempleado,
    nombresede,
    nombreempleado,
    idconcensionario,
    nombreconcensionario
  );
  modelempresa.push(newEmpresa);
  res.status(201).json(newEmpresa);
});

// PUT
/**
 * @swagger
 * /operacionputempresa/{parametro}:
 *   put:
 *     summary: Update an existing ModelEmpresa
 *     parameters:
 *       - name: parametro
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idsede:
 *                 type: string
 *               idempleado:
 *                 type: string
 *               nombresede:
 *                 type: string
 *               nombreempleado:
 *                 type: string
 *               idconcensionario:
 *                 type: string
 *               nombreconcensionario:
 *                 type: string
 *     responses:
 *       200:
 *         description: ModelEmpresa updated
 */

router.put('/operacionputempresa/:parametro', (req, res) => {
  const { idsede, idempleado, nombresede, nombreempleado, nombreconcensionario } = req.body;
  const empresa = modelempresa.find((geo) => geo.idconcensionario === req.params.parametro);

  if (empresa) {
    empresa.nombreconcensionario = nombreconcensionario;
    empresa.idsede = idsede;
    empresa.nombresede = nombresede;
    empresa.idempleado = idempleado;
    empresa.nombreempleado = nombreempleado;

    res.status(200).json(empresa);
  } else {
    res.status(404).json({ message: 'Empresa no encontrada' });
  }
});

// DELETE
/**
 * @swagger
 * /operaciondeleteempresaparametro/{parametro}:
 *   delete:
 *     summary: Delete a ModelEmpresa
 *     parameters:
 *       - name: parametro
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: ModelEmpresa deleted
 */
router.delete('/operaciondeleteempresaparametro/:parametro', (req, res) => {
  const parametro = req.params.parametro;
  const index = modelempresa.findIndex((geo) => geo.idconcensionario === parametro);

  if (index !== -1) {
    modelempresa.splice(index, 1);
    res.status(200).json({ message: 'Empresa eliminada: ${parametro}' });
  } else {
    res.status(404).json({ message: 'Empresa no encontrada' });
  }
});

module.exports = router;
