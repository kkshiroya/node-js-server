
const http = require("http");
const port = 2004;
http
  .createServer((req, res) => {
    let data = "i am backend devloper";
    console.log("server  started");
    res.write(data);
    res.end();
  })
  .listen(port);
