const express = require("express");
const app = express();

// Middleware to serve static files from 'public' folder
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html"); // Send HTML file
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
