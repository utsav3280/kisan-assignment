const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const contactRoute = require("./routes/contacts.js")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));
app.use("/", contactRoute)

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to DB");
    }
);

app.listen(5000, () => { console.log("server is up and running"); })