
const http = require("http");
const port = 2005;
http
  .createServer((req, res) => {
    let data = "i am student";
    console.log("server  started");
    res.write(data);
    res.end();
  })
  .listen(port);
