import { Request, Response } from 'express';
import { IController } from '../protocols';

export class FindLocationByCEP implements IController {
  async handle(request: Request, response: Response): Promise<any> {
    return Promise.resolve('true');
  }
}
