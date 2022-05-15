import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import { BadRequest } from '../../../../application/errors/BadRequest';
import { NotFoundError } from '../../../../application/errors/NotFoundError';
import { INTERNAL_SERVER_ERROR } from '../../http-codes';

export const errorMiddleware = (
  error: FastifyError,
  req: FastifyRequest,
  reply: FastifyReply
) => {
  console.error(error);
  if (error instanceof NotFoundError) {
    reply.code(error.statusCode).send({
      message: error.message,
    });
  } else if (error instanceof BadRequest) {
    reply.code(error.statusCode).send({
      message: error.message,
    });
  }

  reply.code(INTERNAL_SERVER_ERROR).send({
    message: error.message,
  });
};
