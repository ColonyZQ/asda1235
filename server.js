const path = require("path");
const fastify = require("fastify")({
  logger: false
});

fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' })
});

fastify.listen(8202, '0.0.0.0', function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Your app is listening on ${address}`);
});
