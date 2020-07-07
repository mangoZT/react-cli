var express = require("express");
var proxy = require("http-proxy-middleware");
var path = require("path");
var app = express();

app.get("/dist*", function(req, res) {
  res.sendFile(path.join(__dirname, "../" + req.url));
});
app.use(
  "/api",
  proxy.createProxyMiddleware({
    target: "http://10.119.168.87:4000",
    changeOrigin: true
  })
);
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/" + "index.html"));
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
