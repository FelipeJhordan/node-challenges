import { Request } from 'express';
import { numberValidator } from '../number.validator';

export const cepRequestValidator = (request: Request) => request.params?.cep && numberValidator(request.params.cep);
