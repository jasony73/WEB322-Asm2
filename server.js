var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path");
var handlebars = require("express-handlebars");

var HTTP_PORT = process.env.PORT ||8080;

function onHttpStart(){
  console.log("Express http server listening on; " + HTTP_PORT);
}

app.engine(".hbs", handlebars.engine({ extname: '.hbs'}));
app.set('view engine', '.hbs');

// setup a 'route' to listen on the default url path (http://localhost)

app.get("/", function(req,res){
  res.sendFile(path.join(__dirname,"/blog.html"));
});



app.get("/article", function(req,res){
  res.sendFile(path.join(__dirname,"/read_more.html"));

});


app.get("/registration", function(req,res){
  //res.sendFile(path.join(__dirname,"/registration.html"));
  
    res.render("registration", { layout: false });
});

app.get("/login", function(req,res){
  //res.sendFile(path.join(__dirname,"/login.html"));
  res.render("login", { layout: false });
});



app.use(express.static("static"));


// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);