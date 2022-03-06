const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || "8000";
app.get("/", (req, res) => {
    // res.status(200).send("INNNNN");
    // res.sendFile("./src/login.html");
    res.sendFile(__dirname + "/StudyMap.html");
  });
app.get("/addgroups", (req, res) => {
    res.sendFile(__dirname+ "/Study_Groups.html")
})

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });