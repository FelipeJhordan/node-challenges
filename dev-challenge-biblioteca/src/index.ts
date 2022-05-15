import fastify from 'fastify';
import { injectDependencies } from './application/ioc';
import { errorMiddleware } from './infra/http/fastify/middlewares/error-middleware';

const PORT = process.env.PORT || 8080;

const boostrap = async () => {
  const server = fastify();
  const bookController = await injectDependencies();
  server.get('/obras', bookController.find.bind(bookController));
  server.get('/obras/:id', bookController.findUnique.bind(bookController));
  server.post('/obras', bookController.create.bind(bookController));
  server.put('/obras/:id', bookController.update.bind(bookController));
  server.delete('/obras/:id', bookController.delete.bind(bookController));

  server.setErrorHandler(errorMiddleware);

  server.listen(PORT, '0.0.0.0', (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.info('Server listening at ' + address);
  });
};

boostrap();
