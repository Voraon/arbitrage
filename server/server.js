const express = require("express");
const request = require("request");
const cors = require("cors");
const { json } = require("express");

const app = express();
app.use(cors());
app.use(express.json())

app.get("/api", (req, res) => {
  // console.log(req.body);
    res.json({response:`This is /api request response`});
  });

app.p
app.get("/", (req, res) => {
  request(
    { url: "https://api.wazirx.com/api/v2/depth?market=xrpusdt" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: `err.message` });
      }
      console.log(`inside wazirx`)
      res.json(JSON.parse(body));
    }
  );
});

// axios.get("https://api.wazirx.com/api/v2/depth?market=xrpusdt").then(response=>{
//   console.log(response.data)
//    return response;
// })
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