const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 5000 || process.env.PORT;


app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });





///mongoose to connect to mongo db
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDb connection successfully established")
})
const tablesRouter = require('./routes/tables');
app.use('/tables', tablesRouter);

const usersRouter = require('./routes/user');
app.use('/users', usersRouter);


app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});