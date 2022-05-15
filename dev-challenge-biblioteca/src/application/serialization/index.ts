import { FastifyRequest } from 'fastify';

export const serialization = <T>(request: FastifyRequest): T => {
  let obj: any = {};
  Object.entries(request.body as any).forEach((value) => {
    obj[value[0]] = value[1];
  });

  return obj as T;
};
