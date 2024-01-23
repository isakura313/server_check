const fastify = require("fastify")();

fastify.addHook("onRequest", (request, reply, done) => {
  // Log all request headers
  console.log("Request Headers:", request.headers);
  done();
});

fastify.get("/", (request, reply) => {
  reply.send({ message: request.headers });
});

// Set the port and start the server
const PORT = 3000;

fastify.listen(PORT, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
