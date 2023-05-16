const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000 ;
const app = express();

// Middleware 
app.use(cors())
app.use(express.json())


app.get('/' , (req , res ) =>{
    res.send("ema-john-server running")
})

app.listen(port , ()=>{
     console.log('Ema-john-server is running on port ' + port);
})