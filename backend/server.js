require('dotenv').config();
// require('express-async-errors')
//express
const express = require('express')
const app = express();
const connectToMongoDB = require("../backend/database/connectToMongoDB")
const PORT = process.env.PORT || 5000
const cors = require("cors")
const donationRoutes = require('./routes/donationRoutes');
//middleware
app.use(express.json());

app.use(cors());


//routes

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/donations', donationRoutes);
// app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`))

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
})
