import { Book } from '../../Book'
import { CrudServicePort } from './CrudServicePort'

export interface BookServicePort extends CrudServicePort<Book> {}
