//imports from packages

const e = require('express');
const express = require('express');
const mongoose = require('mongoose');

//imports from other files
const authRouter = require("./routes/auth");



//init
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://chulez:tjdtnr1288@cluster0.ovsdisg.mongodb.net/?retryWrites=true&w=majority";

//middleware
app.use(express.json());
app.use(authRouter);

//connections
mongoose.connect(DB).then(() => { console.log("Connection Successful"); }).catch((e) => { console.log(e); });



app.listen(PORT, () => {
    console.log(`connected at port ${PORT}`);
});

