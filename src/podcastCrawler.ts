import queues from "./queues";

const process = async (job) => {
  // fake some fancy processing
  await new Promise((r) => setTimeout(r, 150));

  return {
    name: `Podcast ${job.data.id}`,
    ...job.data,
  };
}

queues.podcastDiscovery.process(async (job) => {
  console.log("Received feed", job.data.feedUrl);

  const podcast = await process(job);

  queues.imageExtraction.add({
    id: job.data.id,
    image: job.data.image,
  })

  return podcast;
});
