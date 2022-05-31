import { autoInjectable } from 'tsyringe';
import { Location } from '../../model/location/location.model';
import { IUsecase } from '../protocols/IUsecase';

@autoInjectable()
export class FindLocationByCepUsecase implements IUsecase<number, Location> {
  async execute(data: number) {
    return Promise.resolve(new Location());
  }
}
