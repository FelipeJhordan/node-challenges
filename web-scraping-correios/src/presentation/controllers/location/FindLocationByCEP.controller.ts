import { Request, Response } from 'express';
import 'reflect-metadata';
import { autoInjectable } from 'tsyringe';
import { FindLocationByCepUsecase } from '../../../domain/usecase/location/FindLocationByCEP.usecase';
import { cepRequestValidator } from '../../validation/request/cep.validator';
import { IController } from '../protocols/iController';

@autoInjectable()
export class FindLocationByCEPController implements IController {
  constructor(private findLocationByCEP?: FindLocationByCepUsecase) {}
  handle = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { cep } = request.params;
      if (!cepRequestValidator(request)) {
        return response.status(400).json({
          message: 'CEP não passado ou formato inválido',
        });
      }
      return response.json(await this.findLocationByCEP?.execute(Number(cep)));
    } catch (err) {
      console.error(err);
      return await response.status(500).json({
        message: 'Erro interno',
      });
    }
  };
}
