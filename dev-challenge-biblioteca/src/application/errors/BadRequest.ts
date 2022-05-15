import { BAD_REQUEST } from '../../infra/http/http-codes';
import AppError from './AppError';

export class BadRequest extends AppError {
  constructor(message: string) {
    super(message, BAD_REQUEST);
  }
}
