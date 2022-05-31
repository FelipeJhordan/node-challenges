import dotenv from 'dotenv';
import express, { Express } from 'express';
import { routesV1 } from './routes/v1';

dotenv.config();

const boostrap = () => {
  const app: Express = express();
  const port = process.env.PORT || 8080;

  app.use(express.json());

  const firstApiVersion = 1;
  const apiVersion = process.env.API_VERSION || firstApiVersion;

  if (apiVersion == firstApiVersion) {
    app.use(routesV1.apiTag, routesV1.router);
  }

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
};

boostrap();
