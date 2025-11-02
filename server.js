const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/user.routes");

// Middleware to parse JSON body
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

mongoose.connect("mongodb://localhost:27017/mydatabase")

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/user", userRoute);