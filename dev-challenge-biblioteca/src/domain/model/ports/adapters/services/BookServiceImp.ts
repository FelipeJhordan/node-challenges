import { Where } from '../../../../../shared/types/where';
import { Book } from '../../../Book';
import { BookServicePort } from '../../protocols/BookServicePort';
import { BookRepositoryPort } from '../../repositories/BookRepositoryPort';

export class BookServiceImp implements BookServicePort {
  constructor(private readonly bookRepositoryPort: BookRepositoryPort) {}
  async find(where?: Where): Promise<Book[]> {
    return this.bookRepositoryPort.find();
  }
  async findUnique(id: string): Promise<Book> {
    return this.bookRepositoryPort.findUnique(id);
  }

  async create(body: Book): Promise<Book> {
    return this.bookRepositoryPort.create(body);
  }
  async delete(id: string): Promise<void> {
    return this.bookRepositoryPort.delete(id);
  }
  async update(body: Book): Promise<Book> {
    return this.bookRepositoryPort.update(body);
  }
}
