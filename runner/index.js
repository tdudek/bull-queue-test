const concurrently = require('concurrently');

concurrently(
  [
    {
      command: "node build/redis.js",
      name: "redis server",
    },
    {
      command: "wait-on tcp:6379 && node build/scheduler.js",
      name: "scheduler"
    },
    {
      command: "wait-on tcp:6379 && node build/podcastCrawler.js",
      name: "podcastCrawler"
    },
    {
      command: "wait-on tcp:6379 && node build/imageExtraction.js",
      name: "imageExtraction-1"
    },
    {
      command: "wait-on tcp:6379 && node build/imageExtraction.js",
      name: "imageExtraction-2"
    },
    
    {
      command: "wait-on tcp:6379 && node build/monitoring.js",
      name: "monitoring"
    }
  ],
  {
    prefix: "name",
    killOthers: ["failure"],
    restartTries: 3,
  },
).then(
  () => {
    console.log("Running");
  },
  (error) => {
    console.error("Error", error);
  },
);
