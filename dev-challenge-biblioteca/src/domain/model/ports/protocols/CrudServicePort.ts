import { Where } from '../../../../shared/types/where';

export interface CrudServicePort<T> {
  find: (where?: Where) => Promise<T[]>;
  findUnique: (id: string) => Promise<T>;
  create: (body: T) => Promise<T>;
  delete: (id: string) => Promise<void>;
  update: (body: T) => Promise<T>;
}
