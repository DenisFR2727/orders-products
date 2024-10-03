const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const path = "/api/v1";
const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(path, router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
