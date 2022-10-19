var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path");

var HTTP_PORT = process.env.PORT ||8080;

function onHttpStart(){
  console.log("Express http server listening on; " + HTTP_PORT);
}


// setup a 'route' to listen on the default url path (http://localhost)

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "/home.html"));
});

app.get("/blog", function(req,res){
  res.sendFile(path.join(__dirname,"/blog.html"));

});

app.get("/article", function(req,res){
  res.sendFile(path.join(__dirname,"/read_more.html"));

});

app.get("/registration", function(req,res){
  res.sendFile(path.join(__dirname,"/registration.html"));

});

app.get("/login", function(req,res){
  res.sendFile(path.join(__dirname,"/login.html"));

});

app.use((req, res) => {
  res.status(404).send("404 !!! Page Not Found");
});

app.use(express.static("static"));


// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);