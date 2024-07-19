require('dotenv').config();
// require('express-async-errors')
//express
const express = require('express')
const app = express();
const connectToMongoDB = require("../backend/database/connectToMongoDB")
const PORT = process.env.PORT || 5000
const cors = require("cors")
const donationRoutes = require('./routes/donationRoutes');
const path = require("path")

const staticPath = path.join(__dirname, "../frontend/dist")
console.log("Static path is ", staticPath);

//middleware
app.use(express.json());

app.use(cors());


//routes

app.use('/donations', donationRoutes);
// app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`))

//server static files
app.use(express.static(staticPath))

//redirects

app.get("*", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"))
})

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
})
