var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "/index.html")); 
})

app.get("/problem", function(req, res){
    res.sendFile(path.join(__dirname, "/problem.html")); 
  })
  app.get("/theme", function(req, res){
    res.sendFile(path.join(__dirname, "/theme.html")); 
  })

  app.listen(3000);
