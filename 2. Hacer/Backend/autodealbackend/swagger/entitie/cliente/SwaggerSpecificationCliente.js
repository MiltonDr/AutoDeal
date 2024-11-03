// swaggerspecification.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Cliente API',
      version: '1.0.0',
      description: 'BackEnd Swagger Onion Project',
    },
  },
  apis: ['./application/entitie/cliente/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
