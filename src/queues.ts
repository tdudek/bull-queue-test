import Queue from "bull";

const queues = {
  podcastDiscovery: new Queue("podcast-discovery"),
  imageExtraction: new Queue("image-extraction"),
};

export default queues;
