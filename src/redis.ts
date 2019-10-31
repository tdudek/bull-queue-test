import RedisServer from "redis-server";

const server = new RedisServer(6379);

server.open((err) => {
  if (err === null) {
    console.log("Server started");
  }
});
