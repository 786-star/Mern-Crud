const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const connectToDatabase = require('./config/db')
connectToDatabase()

const bookRoutes = require('./routes/bookRoutes')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// routes 
app.use('/api/book', bookRoutes)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running at PORT : ${PORT}`)
})