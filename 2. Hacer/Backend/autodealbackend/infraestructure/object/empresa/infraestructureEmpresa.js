//infraestructureempresa.js;

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const { ModelEmpresa, modelempresa } = require('../../../domain/object/empresa/modelEmpresa');

const uri = 'mongodb+srv://dbaUsername:dbaPassword@cluster0.q9psc.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'dbaAutoDeal';
const collectionName = 'Empresa';

class InfraestructureEmpresa {
  constructor() {}

  async consultarempresa() {
    const client = new MongoClient(uri);
    const db = client.db(dbName);
    const col = db.collection(collectionName);
    let results = [];
    try {
      results = await col.find().toArray();
      console.log('Documentos encontrados:', results.length);
      console.log(results);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    } finally {
      await client.close();
    }
    return results;
  }

  async consultarempresaid(id) {
    const client = new MongoClient(uri);
    const db = client.db(dbName);
    const col = db.collection(collectionName);
    let results = [];
    try {
      results = await col.find({ _id: new ObjectId(id) }).toArray();
      console.log('Documentos encontrados:', results.length);
      console.log(results);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    } finally {
      await client.close();
    }
    return results;
  }

  async consultarempresanombresede(nombresede) {
    const client = new MongoClient(uri);
    const db = client.db(dbName);
    const col = db.collection(collectionName);
    let results = [];
    try {
      results = await col.find({ NombreSede: nombresede }).toArray();
      console.log('Documentos encontrados:', results.length);
      console.log(results);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    } finally {
      await client.close();
    }
    return results;
  }
}

module.exports = { InfraestructureEmpresa };
