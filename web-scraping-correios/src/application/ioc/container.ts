import { container } from 'tsyringe';
import { FindLocationByCepUsecase } from '../../domain/usecase/location/FindLocationByCEP.usecase';
import { FindLocationByCEPController } from '../../presentation/controllers/location/FindLocationByCEP.controller';

export const applyIoc = async () => {
  container.register<FindLocationByCepUsecase>(FindLocationByCepUsecase, { useValue: new FindLocationByCepUsecase() });
  container.register<FindLocationByCEPController>(FindLocationByCEPController, {
    useValue: new FindLocationByCEPController(container.resolve(FindLocationByCepUsecase)),
  });
};
