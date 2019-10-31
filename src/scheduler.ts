import queues from "./queues";

let counter = 1;

setInterval(() => {
  const id = `2395233${counter}`;

  queues.podcastDiscovery.add({
    id,
    feedUrl: `http://some-feed.com/rss/${id}`,
    image: `http://some-feed.com/${id}/image.png`,
  });

  counter++;
}, 100);
