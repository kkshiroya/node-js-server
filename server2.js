
const http = require("http");
const port = 2002;
http
  .createServer((req, res) => {
    let data = "my name is krushal";
    console.log("server  started");
    res.write("hello world");
    res.write(data);
    res.end();
  })
  .listen(port);
