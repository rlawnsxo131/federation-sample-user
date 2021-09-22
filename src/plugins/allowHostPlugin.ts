import fp from 'fastify-plugin';
import { FastifyPluginCallback } from 'fastify';

const callback: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.addHook('onRequest', (request, reply, done) => {
    const { protocol, hostname, headers } = request;
    console.log('protocol: ', protocol);
    console.log('hostname: ', hostname);
    const allowHost = ['localhost:3001'];
    const allowed = allowHost.includes(hostname);
    if (!allowed) {
      reply.status(400).send({ sorry: 'request' });
    }
    done();
  });
  done();
};

const allowHostPlugin = fp(callback, {
  name: 'allowHostsPlugin',
});

export default allowHostPlugin;
