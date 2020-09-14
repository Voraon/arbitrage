const express = require("express");
const request = require("request");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "sdf");
  next();
});
let [item] = [];
app.get("/", (req, res) => {
  request(
    { url: "https://api.wazirx.com/api/v2/depth?market=xrpusdt" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }
      item = body;
      res.json(JSON.parse(body));
    }
  );

  console.log(item);
});

// app.get("/test", (req, res) => {
//   request({ url: "https://api.randomuser.me/" }, (error, response, body) => {
//     if (error || response.statusCode !== 200) {
//       return res.status(500).json({ type: "error", message: err.message });
//     }

//     res.json(JSON.parse(body));
//   });
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
