import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express, { Request, Response } from "express";
import { entryRouter } from "./routers";
import { AppDataSource } from "./database";
import { schemas } from './models/swagger-schemas';

const app = express();
const port = 3000;

app.use(express.json());


const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Fitness Goals API',
            version: '1.0.0',
            description: 'API for tracking fitness goals and weight snapshots',
        },
      servers: [{ url: 'http://localhost:3000' }],
      components: {
        schemas: {...schemas}
      },
    },
    // Path to the API docs (where your routes are defined)
    apis: ['./src/routers/**/*.ts', './src/models/**/*.ts'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



app.use('/api', entryRouter);

const start = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Data Source initialized');

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.error('Error during Data Source initialization', err);
    process.exit(1);
  }
};

start();