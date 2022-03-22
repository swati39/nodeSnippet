const http = require("http");

//creating a nodejs server with
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the Home page!");
  }
  if (req.url === "/about") {
    res.end("Welcome to the about page!");
  }
  res.end(`<h1>No Page Found! </h1>
    <p>Go Back to the Home page</p>
    <a href="/">back home</a>`);
});

server.listen(5000);
