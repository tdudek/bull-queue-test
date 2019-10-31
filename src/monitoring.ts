import { setQueues } from "bull-board";
import express from "express";
import { UI } from "bull-board";
import queues from "./queues";

setQueues(Object.values(queues));

const app = express();
app.use("/admin/queues", UI);
app.listen(3000, function () {
  console.log('http://localhost:3000/admin/queues');
});
