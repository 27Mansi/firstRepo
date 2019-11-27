var express = require("express");
var mon = express();

app.get("/",(request, response)=>{
    response.send("Welcome Home");
});

app.listen(7777,()=>{
    console.log("Server is listening at port 7777");
});