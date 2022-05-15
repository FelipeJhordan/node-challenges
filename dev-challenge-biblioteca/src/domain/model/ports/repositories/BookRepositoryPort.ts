import { Book } from '../../Book'
import { GenericRepositoryPort } from './GenericRepositoryPort'

export interface BookRepositoryPort extends GenericRepositoryPort<Book> {}
