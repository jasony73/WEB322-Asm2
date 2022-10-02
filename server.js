var path = require("path");
var path2 = require("path");

var express = require("express");
const { nextTick } = require("process");
var app = express();

var HTTP_PORT = process.env.PORT ||3000;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}
app.use(express.static("static"));
// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res,next){
  res.sendFile(path.join(__dirname,"/views/blog.html"));
})


// P1.setup another route to listen on /blog
app.get("/blog", function(req,res,next){
  res.sendFile(path.join(__dirname,"/views/blog.html"));

})

app.get("/article", function(req,res,next){
  res.sendFile(path.join(__dirname,"/views/read_more.html"));

})

app.get("/registration", function(req,res,next){
  res.sendFile(path.join(__dirname,"/views/registration.html"));

});

app.get("/login", function(req,res,next){
  res.sendFile(path.join(__dirname,"/views/login.html"));

})

app.use((req, res) => {
  res.status(404).send("404 !!! Page Not Found");
})




// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);