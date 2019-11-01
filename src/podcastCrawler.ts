import queues from "./queues";

const process = async (job) => {
  job.progress(25);

  // fake some fancy processing
  await new Promise((r) => setTimeout(r, 150));

  job.progress(90);

  return {
    name: `Podcast ${job.data.id}`,
    ...job.data,
  };
}

queues.podcastDiscovery.process(async (job) => {
  console.log("Received feed", job.data.feedUrl);

  const podcast = await process(job);

  const time = new Date().getTime();
  if ((time % 9) === 0) {
    throw new Error(`no luck this time: <${time}>`);
  }

  queues.imageExtraction.add({
    id: job.data.id,
    image: job.data.image,
  });

  job.progress(100);

  return podcast;
});
