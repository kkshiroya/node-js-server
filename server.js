
const http = require("http");
const port = 2001;
http
  .createServer((req, res) => {
    let data = "my name is krushal shiroya";
    console.log("server  started");
    res.write(data);
    res.end();
  })
  .listen(port);
