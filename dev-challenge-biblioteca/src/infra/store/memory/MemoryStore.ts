import { Book } from '../../../domain/model/Book';
import { Store } from '../Store';
import { BookRepositoryMemoryImpl } from './repositories/BookRepositoryMemoryImp';

export type FontType = {
  books: Book[];
};

export class MemoryStore extends Store {
  constructor() {
    super();
    this.font = {
      books: [],
    };
    this.repositories.push(new BookRepositoryMemoryImpl(this.font));
  }

  font: FontType;
  connect(config: any): Promise<boolean> {
    this.font.books = [
      {
        id: 'fre',
        authors: ['Felipe '],
        photo: 'photo.jpg',
        publisher: 'publisher',
        title: 'title',
      },
    ];
    return Promise.resolve(true);
  }
  disconnect(): Promise<boolean> {
    this.font.books = [];

    return Promise.resolve(true);
  }
}
