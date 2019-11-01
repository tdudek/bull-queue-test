import queues from "./queues";

let counter = 1;

const publishRandomPodcasts = () => {
  const id = `2395233${counter}`;

  queues.podcastDiscovery.add({
    id,
    feedUrl: `http://some-feed.com/rss/${id}`,
    image: `http://some-feed.com/${id}/image.png`,
  });

  counter++;

  setTimeout(publishRandomPodcasts, (counter % 50) === 0 ? 3000 : 100);
}

publishRandomPodcasts();
