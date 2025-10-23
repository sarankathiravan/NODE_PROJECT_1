const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.get("/", (request, response) => {
  response.send("OK");
});

mongoose
  .connect("mongodb://0.0.0.0:27017/testdb")
  .then(() => {
    console.log("MongoDB is connected");
 
  })
  .catch((error) => {
    console.log("MongoDB is not connected ");
    console.error(error);
  });
   app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });