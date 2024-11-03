const swaggerJSDoc = require('swagger-jsdoc');

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Empresa API',
			version: '1.0.0',
			description: 'Empresa API'
		}
	},
	apis: ['./application/object/empresa/*.js']
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;