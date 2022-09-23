
require('dotenv').config({path:'./Config/.env'});
const port=process.env.Port || 7000
const ConnectDB=require('./Config/Server');
const express=require('express');
const useRoute=require('./routes/userroute');
const app=express();
ConnectDB()
app.listen(port,(e)=>{
    if(e){
        console.log('server is failed !');
    }
    else{
        console.log(`server is running on ${port}`);
    }
   

})

app.use(express.json());
app.use('/api',useRoute);