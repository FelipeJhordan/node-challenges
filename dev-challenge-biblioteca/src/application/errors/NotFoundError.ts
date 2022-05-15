import { NOT_FOUND } from '../../infra/http/http-codes';
import AppError from './AppError';

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(message, NOT_FOUND);
  }
}
