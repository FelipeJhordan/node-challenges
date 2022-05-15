import { randomUUID } from 'crypto';
import { NotFoundError } from '../../../../application/errors/NotFoundError';
import { Book } from '../../../../domain/model/Book';
import { BookRepositoryPort } from '../../../../domain/model/ports/repositories/BookRepositoryPort';
import { Where } from '../../../../shared/types/where';
import { FontType } from '../MemoryStore';

export class BookRepositoryMemoryImpl implements BookRepositoryPort {
  constructor(private font: FontType) {}
  async find(where?: Where): Promise<Book[]> {
    return Promise.resolve(this.font.books);
  }
  async findUnique(id: string): Promise<Book> {
    const book = this.font.books.find((book) => book.id == id);
    if (!book) {
      throw new NotFoundError('Book not found');
    }

    return Promise.resolve(book);
  }

  async delete(id: string): Promise<void> {
    await this.findUnique(id);
    this.font.books.splice(
      this.font.books.findIndex((book) => book.id === id),
      1
    );
  }
  async update(body: Book): Promise<Book> {
    const book = await this.findUnique(body.id);

    book.photo = body.photo;
    book.authors = body.authors;
    book.publisher = body.publisher;
    book.title = body.title;

    return body;
  }

  async create(body: Book): Promise<Book> {
    const id = await randomUUID();

    body.id = id;

    this.font.books.push(body);

    return body;
  }
}
