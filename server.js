var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path");

var HTTP_PORT = process.env.PORT ||8080;

function onHttpSStart(){
  console.log("Express http server listening on; " + HTTP_PORT);
}


// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
  res.sendFile(path.join(__dirname,"/views/blog.html"));
})



// P1.setup another route to listen on /blog
app.get("/blog", function(req,res){
  res.sendFile(path.join(__dirname,"/views/blog.html"));

})

app.get("/article", function(req,res){
  res.sendFile(path.join(__dirname,"/views/read_more.html"));

})

app.get("/registration", function(req,res){
  res.sendFile(path.join(__dirname,"/views/registration.html"));

});

app.get("/login", function(req,res){
  res.sendFile(path.join(__dirname,"/views/login.html"));

});

app.use((req, res) => {
  res.status(404).send("404 !!! Page Not Found");
});

app.use(express.static("static"));


// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);