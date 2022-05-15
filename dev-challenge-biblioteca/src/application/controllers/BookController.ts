import { FastifyReply, FastifyRequest } from 'fastify';
import { Book } from '../../domain/model/Book';
import { BookServicePort } from '../../domain/model/ports/protocols/BookServicePort';
import { serialization } from '../serialization';
import { bookValidation } from '../validation/bookValidation';

type IParams = {
  id: string | number;
};

export class BookController {
  constructor(private readonly bookService: BookServicePort) {}

  async create(request: FastifyRequest, reply: FastifyReply) {
    bookValidation(request);
    const book = serialization<Book>(request);
    const createdBook = await this.bookService.create(book);
    reply.status(201).send(createdBook);
  }

  async find(request: FastifyRequest, reply: FastifyReply) {
    const books = await this.bookService.find();

    return books;
  }

  async findUnique({ params }: FastifyRequest, reply: FastifyReply) {
    const { id } = params as IParams;
    return this.bookService.findUnique(id as string);
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as IParams;

    bookValidation(request);
    const book = serialization<Book>(request);
    book.id = id as string;
    const updatedBook = await this.bookService.update(book);
    reply.status(201).send(updatedBook);
  }

  async delete({ params }: FastifyRequest, reply: FastifyReply) {
    const { id } = params as IParams;
    await this.bookService.delete(id as string);
    return reply.status(204).send();
  }
}
