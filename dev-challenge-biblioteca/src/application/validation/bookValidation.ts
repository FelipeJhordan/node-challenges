import { FastifyRequest } from 'fastify';
import { BadRequest } from '../errors/BadRequest';

export const bookValidation = (request: FastifyRequest) => {
  const bookKeys = ['title', 'publisher', 'photo', 'authors'];
  const bodyKeys = Object.entries(request.body as any);
  let errorMessage = '';
  bookKeys.filter((bookKey) => {
    if (
      !bodyKeys.some((bodyKey) => {
        return bodyKey[0] == bookKey;
      })
    ) {
      errorMessage += `Está faltando o parametro ${bookKey} \n`;
    }
  });

  if (errorMessage.length > 1) {
    throw new BadRequest(errorMessage);
  }
};
