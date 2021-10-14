const bodyparser = require('bodyparser')
const express = require('express')
const path= require('path')
const app=express()

var PORT=prossess.env.port||3000

//view Engine sethup

app.set("views",path.join(__dirname))
app.set("view wngine","ejs")

// Body-parser middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get("/",function(req,res){
    res.render("sampleForm")
});

app.post('/saveData',(req,res)=>{
    console.log("using Body-Parser:",req.body.fullname)
    console.log("using Body-parser:",req.body.email)
})
app.listen(PORT,function(error){
    if(error) throw error
    console.log("server created successfully on Port",PORT)
})