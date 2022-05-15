import { setTimeout } from 'timers/promises';
import { BookServiceImp } from '../../domain/model/ports/adapters/services/BookServiceImp';
import { SqliteStore } from '../../infra/store/sqlite/SqliteStore';
import { StoreFactory } from '../../infra/store/StoreFactory';
import { BookController } from '../controllers/BookController';

export async function injectDependencies() {
  const store = new SqliteStore();
  await new StoreFactory(store);

  // const store = new MemoryStore();
  // await new StoreFactory(store);

  await setTimeout(1000);

  const bookService = new BookServiceImp(store.value[0]);

  const bookController = new BookController(bookService);
  return bookController;
}
