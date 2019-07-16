// import Password from "./password.json";

const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const path = require("path");
const password = require("./password");
// const kafka = require("node-rdkafka");
// const cors = require("cors");

// I had to add node-modules to .dockerignore to compile it instead of copy paste it
// I had to rebuild node app before pushing it to server and docker
// ip address is different in docker in bridge mode, that why I had to put 10.50.222.222 who is static

const app = express(); // we use express server
app.use(bodyParser.urlencoded({ extended: false })); // will encode all incoming messages - MIDDLEWARE
app.use(pino);
// app.use(cors);

// is needed so that express serves the REACT code.. or just page without it
app.use(express.static(path.join(__dirname, "../build"))); // @@ eric suffit a servce build
console.log(path.join(__dirname, "../build"));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.use(express.static("assets")); // only way to access this folder from root    --- or put assets in build ????

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "../build", "index.html"));
// });

// var producer = new kafka.Producer({
//   // si on ne passe pas tous ces parametes, on envoit rien dans la queue
//   "client.id": "nodejs",
//   "metadata.broker.list": "10.50.222.222:9092",
//   "compression.codec": "gzip",
//   "retry.backoff.ms": 200,
//   "message.send.max.retries": 10,
//   "socket.keepalive.enable": true,
//   "queue.buffering.max.messages": 100000,
//   "queue.buffering.max.ms": 1000,
//   "batch.num.messages": 1000000,
//   dr_cb: true
// });

// // Our producer with its Kafka brokers
// // This call returns a new writable stream to our topic 'topic-name'
// var stream = kafka.Producer.createWriteStream(
//   {
//     "metadata.broker.list": "10.50.222.222:9092"
//   },
//   {},
//   {
//     topic: "topictest"
//   }
// );

// // // Writes a message to the stream
// // var queuedSuccess = stream.write(Buffer.from("Awesome message"));

// // if (queuedSuccess) {
// //   console.log("We queued our message!");
// // } else {
// //   // Note that this only tells us if the stream's queue is full,
// //   // it does NOT tell us if the message got to Kafka!  See below...
// //   console.log("Too many messages in our queue already");
// // }

// // NOTE: MAKE SURE TO LISTEN TO THIS IF YOU WANT THE STREAM TO BE DURABLE
// // Otherwise, any error will bubble up as an uncaught exception.
// stream.on("error", function(err) {
//   // Here's where we'll know if something went wrong sending to Kafka
//   console.error("Error in our kafka stream");
//   console.error(err);
// });

// app.get("/api/greeting", (req, res) => {
//   const name = req.query.name || "World";
//   res.setHeader("Content-Type", "application/json");
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
//   stream.write(Buffer.from(name));
// });

const port = 3001; // port global pour tout ce qui est fait
// const port = process.env.PORT || 80;
const server = app.listen(port, () => {
  // second argument is a callback function, thats why server is defined before
  var host = server.address().address;
  var port = server.address().port;

  console.log("Express server is running at http://%s:%s", host, port);
  // console.log("Express server is running on localhost:3001")
});

var request = require("request");

app.get("/zeserver", function(req, res) {
  console.log("/zeserver expressjs get called");

  request(
    {
      uri: "https://api.mediarithmics.com/",
      methode: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: "eric@neda-media.fr",
        password: password.password // Password.password
      })
    },
    function(error, response, body) {
      console.log("QUERIED__");
      if (!error && response.statusCode == 200) {
        console.log(body);
        // writing the response to a file named data.html
      }
    }
  );
  res.send("hello world");
});
