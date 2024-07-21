const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());
app.post("/save",(req,res)=>{
    let num = parseInt(req.body.number);
    let result = num * num;
    console.log(num);
    res.json(result);
});



app.listen(3007,()=>{console.log("Server ready at http://localhost:3007");});