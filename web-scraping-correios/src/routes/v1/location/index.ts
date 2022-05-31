import { Router } from 'express';
import { FindLocationByCEPController } from '../../../presentation/controllers/location/FindLocationByCEP.controller';

export const locationRoutes = Router();

const findLocationController = new FindLocationByCEPController();

locationRoutes.get('/location', findLocationController.handle);
