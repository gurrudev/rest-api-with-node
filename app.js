const express = require('express');
const bodyParser = require('body-parser') 
const mongoose = require("mongoose");
require('dotenv').config()

mongoose.set('strictQuery', false);
const connect =  mongoose.connect(process.env.Mongo_URL, {
    useNewUrlParser: true,
 }).then(()=>{
    console.log("monogDB connected successfully");
 }).catch ((error) => {
 console.log(error);
})


// // Declare the Schema of the Mongo model
// var userSchema = new mongoose.Schema({
//     email:{
//         type:String,
//         required:true,
//         unique:true,
//     },
//     password:{
//         type:String,
//         required:true,
//     },
// });


// const Data = mongoose.model('Data', userSchema);

const Data = require('./models/dataSchema')

const app = express();

const port = 1212

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/data', (req, res) =>{
    const data = Data.find((err, data) =>{
        console.log("Data: ", data)
        res.json(data)
    })
})

app.post('/data', (req, res) =>{
    const data = new Data({
        email: req.body.email,
        password: req.body.password
    })

    data.save((err) =>{
        res.json(data)
    })

})
    
app.put('/data/:id', (req, res) => {
    
});




app.listen(port, () => {
    console.log(`Server started on: ${port}`);
});