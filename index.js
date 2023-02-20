const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

// Later we have to specify the cors
// we don't need to specify Access-Control-Allow-Origin : "*" type of things 

require('dotenv').config()
// to load the env variables from .env file to process.env object
// later used in the project

  

const PORT = 3000;
const app = express();
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log("LISTENING")
})