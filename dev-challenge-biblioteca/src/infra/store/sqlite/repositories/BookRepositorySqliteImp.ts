import { randomUUID } from 'crypto';
import { PromisedDatabase } from 'promised-sqlite3';
import { NotFoundError } from '../../../../application/errors/NotFoundError';
import { Book } from '../../../../domain/model/Book';
import { BookRepositoryPort } from '../../../../domain/model/ports/repositories/BookRepositoryPort';
import { Where } from '../../../../shared/types/where';

export class BookRepositorySqliteImp implements BookRepositoryPort {
  constructor(private conn: PromisedDatabase) {}
  async find(where?: Where): Promise<Book[]> {
    const sql = 'SELECT books.id,title, publisher, photo from books;';
    const result = await this.conn.all(sql);
    const resultMap = await Promise.all(
      result.map(async (r) => {
        const authors = await this.getAuthorsByBookId(r.id);
        r.authors = authors.map((author) => author.name);

        return r;
      })
    );

    return resultMap as Book[];
  }
  async findUnique(id: string): Promise<Book> {
    const sql = `SELECT books.id,title, publisher, photo from books where id = '${id}';`;
    const result = await this.conn.get(sql);

    if (!result) throw new NotFoundError('Book not found');

    let authors = await this.getAuthorsByBookId(id);
    authors = authors.map((author) => author.name);
    result.authors = authors;
    return result as Book;
  }

  async delete(id: string): Promise<void> {
    await this.findUnique(id);

    await this.conn.exec(`delete from authors where book_id = '${id}';`);
    await this.conn.exec(`delete from books where id = '${id}';`);
  }
  async update(body: Book): Promise<Book> {
    await this.findUnique(body.id);

    const insertBookStatment = `update books set title='${body.title}', publisher='${body.publisher}', photo='${body.photo}'  where id='${body.id}';`;

    await this.conn.run(insertBookStatment);
    await this.insertAuthors(body.id, body.authors);

    return body;
  }

  async create(body: Book): Promise<Book> {
    const id = await randomUUID();

    const insertBookStatment = `insert into books(id, title, publisher, photo) values('${id}', '${body.title}', '${body.publisher}', '${body.photo}' )`;

    body.id = id;

    await this.conn.run(insertBookStatment);
    await this.insertAuthors(id, body.authors);

    return body;
  }

  async insertAuthors(bookId: string, authors: string[]): Promise<void> {
    let sql = `delete from authors where book_id='${bookId}';`;
    sql = authors.reduce((previusValue, currentValue) => {
      return (previusValue += `insert into authors(book_id, name) values('${bookId}', '${currentValue}');`);
    }, sql);

    await this.conn.exec(sql);
  }

  async getAuthorsByBookId(bookId: string) {
    let sql = `select name from authors where book_id = '${bookId}';`;
    return await this.conn.all(sql);
  }
}
