import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';
import { FindLocationByCepUsecase } from '../../../domain/usecase/location/FindLocationByCEP.usecase';
import { IController } from '../protocols/iController';

@autoInjectable()
export class FindLocationByCEPController implements IController {
  constructor(private findLocationByCEP?: FindLocationByCepUsecase) {}
  handle = async (request: Request, response: Response): Promise<Response> => {
    console.log(this.findLocationByCEP);
    return await response.json(this.findLocationByCEP?.execute(199));
  };
}
