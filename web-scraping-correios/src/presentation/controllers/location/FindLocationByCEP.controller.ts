import { Request, Response } from 'express';
import { IController } from '../protocols';

export class FindLocationByCEP implements IController {
  async handle(request: Request, response: Response): Promise<any> {
    return await response.json({
      city: 'Uberaba',
      state: 'MG',
      neighborhood: 'Alfredo Freire II',
      road: 'Rua Mônica Machiyama',
    });
  }
}
