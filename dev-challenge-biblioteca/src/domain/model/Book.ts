export interface IBook {
  id: string;
  title: string;
  publisher: string;
  photo: string;
  authors: string[];
}

export class Book {
  id: string;
  title: string;
  publisher: string;
  photo: string;
  authors: string[];

  constructor(params?: IBook | undefined) {
    if (params === undefined) {
      this.id = '';
      this.title = '';
      this.authors = [];
      this.photo = '';
      this.publisher = '';
      return;
    }
    this.id = params.id;
    this.title = params.title;
    this.publisher = params.publisher;
    this.photo = params.photo;
    this.authors = params.authors;
  }
}
