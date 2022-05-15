import path from 'path';
import { PromisedDatabase } from 'promised-sqlite3';
import { Store } from '../Store';
import { BookRepositorySqliteImp } from './repositories/BookRepositorySqliteImp';

export class SqliteStore extends Store {
  database!: PromisedDatabase;

  constructor() {
    super();
  }
  async connect(config: any): Promise<boolean> {
    this.database = new PromisedDatabase();
    await this.database.open(path.resolve(__dirname, 'db.sqlite'));
    await this.repositories.push(new BookRepositorySqliteImp(this.database));
    await this.serializeBD();
    return true;
  }
  async disconnect(): Promise<boolean> {
    await this.database.close();
    return false;
  }

  private async serializeBD() {
    try {
      await Promise.all([
        this.database.run(
          `create table if not exists books(id text primary key, title text, publisher text, photo text);`
        ),
        this.database.run(
          ` create table if not exists authors(id integer primary key, book_id text, name text, foreign key (book_id) references books(id));`
        ),
      ]);
    } catch (e) {
      console.error(e);
      this.database.close();
      throw new Error('Erro ao inicializar o banco de dados');
    }
  }
}
