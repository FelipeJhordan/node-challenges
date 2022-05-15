import { MemoryStore } from './memory/MemoryStore';
import { SqliteStore } from './sqlite/SqliteStore';
import { Store } from './Store';

const SQLITEPATH = '';

export class StoreFactory {
  constructor(private store: Store) {
    this.createConn();
  }

  async createConn() {
    if (this.store instanceof SqliteStore)
      await this.store.connect({ url: SQLITEPATH });
    else if (this.store instanceof MemoryStore) this.store.connect({});
  }
}
