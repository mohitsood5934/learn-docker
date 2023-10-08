const express = require("express");
const redis = require("redis");

const app = express();

// const client = redis.createClient({
//     host: 'redis-server', // service  name in docker-compose file
//     port: 6379,
//     legacyMode: true,
// });
// client.connect().catch(console.error)
// client.set('visits', 0);
let visits = 0;
app.get("/", (req, res) => {
  console.log('hit this route');
  // client.get("visits", (err, visits) => {
    res.send(`Number of visits is ${visits}`);
    visits += 1;
  //   client.set("visits", parseInt(visits) + 1);
  // });
});

app.listen(4001, () => {
  console.log("listening on port 4001");
});
