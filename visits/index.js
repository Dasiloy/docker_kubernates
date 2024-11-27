const express = require("express");
const app = express();

const redis = require("redis");
const client = redis.createClient({
  url: "redis://redis-server:6379",
});

(async () => {
  await client.connect();
  await client.set("counter", 0);
})();

app.get("/", async (req, res) => {
  const counter = await client.get("counter");
  res.send(`Counter: ${counter}`);
  await client.set("counter", parseInt(counter) + 1);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080...");
});
