require("dotenv").config();
const express = require("express");
const connection = require("./config/DBconnect")
const cors = require("cors");
const productRouter = require("./routes/productRoute")
const port = process.env.PORT || 8082
const server = express();

server.use(cors())
server.use(express.json());
server.use(express.urlencoded({ extended: true }))
server.use("/products", productRouter)
connection()
server.listen(port, () => {
    console.log("listening on port " + port)
})
