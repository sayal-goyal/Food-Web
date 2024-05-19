const express = require('express')
const mongoDB = require('./db')
const app = express()
const port = 5000

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json())
app.use('/user/createuser',require('./Routes/CreateUser'))
app.use('/user/loginuser',require('./Routes/LoginUser'))

mongoDB()

app.get('/',(req,res) => {
    res.send("Server is working correctly!!")
})

app.listen(port,() => {
    console.log("Listening on port",port)
})