var express = require("express");
var app = express();

//app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("index");
});

app.get("/about", (req,res)=>{
    res.render("about");
});


app.listen(process.env.PORT || 3000, process.env.IP, ()=>{
	console.log("Deploy Demo App has started")
});