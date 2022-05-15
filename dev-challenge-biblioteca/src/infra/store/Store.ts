import { connConfigOptions } from './protocols/defaultConfig';

export abstract class Store {
  repositories: any[] = [];
  abstract connect(config?: connConfigOptions): Promise<boolean>;

  abstract disconnect(): Promise<boolean>;

  public get value() {
    return this.repositories;
  }
}
