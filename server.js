const express = require("express");
const app = express();
const server = require("http").Server(app);
var nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    port : 465,
    host : "smtp.gmail.com",
    auth : {
        user : "asthanavs19@gmail.com" ,
        pass : "dnhgpmkydpktrlak"
    },
   secure: true
})
app.use(express.json())

server.listen(process.env.PORT || 3030);
