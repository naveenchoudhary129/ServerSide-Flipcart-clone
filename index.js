const express = require("express") ;
require("dotenv").config();
const connection = require("./database/db")

const DefaultData = require("./default")
const app = express();


const PORT = 8000 ;
connection();

app.listen(PORT , () => {
    console.log(`Server is listening on port ${PORT}`);
})

DefaultData()