import { Router } from 'express';

export const locationRoutes = Router();

locationRoutes.get('/location', (req, res) => {
  res.send('Olá');
});
