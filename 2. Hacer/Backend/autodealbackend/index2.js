const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const swaggerSpecificationCliente = require('./swagger/entitie/cliente/SwaggerSpecificationCliente');
const empresaApi = require('./application/entitie/cliente/ApiCliente');

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpecificationCliente));

app.use(empresaApi);

const PORT = process.env.PORT || 8067;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-doc`);
  console.log(`Get operation available at http://localhost:${PORT}/operaciongetempresa`);
  console.log(`Get operation available at http://localhost:${PORT}/operaciongetempresaid/:id`);
  console.log(`Get operation available at http://localhost:${PORT}/operaciongetempresanombresede/:nombresede`);
  console.log(`Post operation available at http://localhost:${PORT}/operacionpostempresa`);
  console.log(`Put operation available at http://localhost:${PORT}/operacionputempresa/parametro`);
  console.log(`Delete operation available at http://localhost:${PORT}/operaciondeleteempresaparametro/parametro`);
});
