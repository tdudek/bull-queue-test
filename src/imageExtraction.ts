import queues from "./queues";

queues.imageExtraction.process(async (job) => {
  console.log("Received podcast image to extract", job.data.image);

  await new Promise((r) => setTimeout(r, 250));

  return {
    id: job.data.id,
    color: "#ffaa00",
  };
});
