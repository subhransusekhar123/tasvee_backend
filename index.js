require('dotenv').config();
const cors = require('cors')
const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
const mongoDB = require('./DB/config')
const mongolink = process.env.mongoose_URL;
const {tasvee_model} = require('./DB/user')
const JWT = require('jsonwebtoken');
var privateKey = "subhransu";

   
app.use(cors())    

app.use(express.json())

app.get('/register',(req,res)=>{
    res.send('done')
})

app.post('/register',async(req,res)=>{
    // console.warn(req.body)
    const user = tasvee_model(req.body)
    const result =await user.save();
    console.log(result)
    res.send('api in progress...')
})




mongoDB.connectDB(mongolink);

app.listen(port,()=>{
    console.log(`port running at ${port}`)
});



