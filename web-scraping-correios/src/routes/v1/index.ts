import { Request, Response, Router } from 'express';
import { IRoutes } from '../protocols/routes';
import { locationRoutes } from './location';

const apiV1Routes = Router();

apiV1Routes.get('', (_request: Request, response: Response) =>
  response.json({
    status: 'API ON',
  }),
);

apiV1Routes.use(locationRoutes);

export const routesV1: IRoutes = {
  apiTag: '/api/v1',
  router: apiV1Routes,
};
