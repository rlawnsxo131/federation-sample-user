import { FastifyPluginCallback } from 'fastify';

const routes: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/health', async (request, reply) => {
    reply.send({ hello: 'user federation' });
  });
  done();
};

export default routes;
