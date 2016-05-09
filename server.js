/* eslint-disable */

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");
var fonts = path.resolve(__dirname, 'fonts');

var app = express();
var compiler = webpack(config);

var serverPort = process.env.PORT || 3000;

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(serverPort, "localhost", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + serverPort);
});

var appStatic = express();
var portStatic = 3030;

appStatic.use('/fonts', express.static('fonts'));
appStatic.use('/prism', express.static('prism'));

appStatic.listen(portStatic, "localhost", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening static at http://localhost:" + portStatic);
});

