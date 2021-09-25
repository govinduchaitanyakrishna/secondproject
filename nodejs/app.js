var express=require('express');
const app=express();
const port=9290;
const mongo =require('mongodb');
const MongoClient=mongo.MongoClient;
const mongourl="mongodb://localhost:27017"
//const mongourl="mongodb+srv://govinduchaitanya3:1234@cluster0.jmt1h.mongodb.net/aha?retryWrites=true&w=majority"
var db;
var col_name="category"
var category_data="data"

//get 

app.get('/',(req,res) => {
    res.send("welcome to node aha api")
})

//category

app.get('/category',(req,res) => {
    db.collection(col_name).find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/data',(req,res) => {
    db.collection(category_data).find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

MongoClient.connect(mongourl,(err,client)=>{
    if(err) console.log("error while connecting");
    db=client.db("aha");
    app.listen(port,()=>{
        console.log(`lisening on port ${port}`);
    })

})
