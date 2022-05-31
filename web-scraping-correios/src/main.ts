import dotenv from 'dotenv';
import express, { Express } from 'express';
import 'reflect-metadata';
import { routesV1 } from './routes/v1';

dotenv.config();

const server_sleep = 4000;

const boostrap = async () => {
  const app: Express = express();
  const port = process.env.PORT || 8080;

  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    }),
  );

  const firstApiVersion = 1;
  const apiVersion = process.env.API_VERSION || firstApiVersion;

  if (apiVersion == firstApiVersion) {
    app.use(routesV1.apiTag, routesV1.router);
  }

  setTimeout(() => {
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
  }, server_sleep);
};

boostrap();
