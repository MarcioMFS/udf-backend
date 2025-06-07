const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

dotenv.config();

const app = express();

app.use(express.json());
app.use(logger);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/instructors', require('./routes/instructors'));
app.use('/classrooms', require('./routes/classrooms'));
app.use('/players', require('./routes/players'));
app.use('/sessions', require('./routes/sessions'));

app.use(errorHandler);

const PORT = process.env.APP_PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('Failed to sync database', err);
});
