const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config({"path":'./config.env'})

require('./DB/conn')

const PORT = process.env.PORT;

app.use(express.json())

app.use(require('./routes/routes'))

app.use(require('./models/appointment'))
app.use(require('./models/doctor'))
app.use(require('./models/patient'))
app.use(require('./models/admin'))
app.use(require('./authenticate/authenticate'))
app.use(require('./models/message'))


app.get('/hello',(req,res)=> {
    res.send("hello world")
})


app.listen(4000,()=>{
    console.log("app is running")
})
