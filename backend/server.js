const express = require('express');
const app = express()
require('dotenv').config() 
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')



app.use(cors({
    origin : ['http://localhost:3000'],
    credentials :  true
}))

app.use(bodyParser.json())
app.use(cookieParser())

// appel les routes
const authRoutes = require('./routes/authRoutes');
const { dbConnect } = require('./utils/db');

app.use('/api', authRoutes)

app.get('/', (req, res) => res.send("My backend"))

const port = process.env.PORT
dbConnect()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})