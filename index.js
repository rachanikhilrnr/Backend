const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const postModel = require('./models/post');

const app = express();
app.use(cors({
    origin:["","localhost:3000"],
    methods:["POST","GET"],
    credentials:true
}));
app.use(express.json());

mongoose.connect(
    "mongodb+srv://21955a1206:nikhil1528@project.cyg4qu7.mongodb.net/Travel?retryWrites=true&w=majority&appName=Project"
)
const PORT = process.env.PORT || 5000;
app.listen(PORT ,() => {
    console.log(`Server is running in ${PORT}`);
})
app.get('',(req,res) => {
    res.json("WELCOME");
})
app.get('/getInfo',(req,res) => {
    postModel.find({})
    .then(users => res.json(users))
    .catch(error => res.json(error))
})