const express = require("express");
const app = express();
const { meow } = require("./data/cats");



app.get("/api/cat",(req,res)=>{
    res.status(200).json({meow});
});

app.listen(5000,console.log("starting port at 5000"));