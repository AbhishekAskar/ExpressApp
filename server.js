const express = require("express");
const app = express();

//Middleware function to log requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

//without next() the code will not move past this line and none of the routes will be called or displayed
//not even the home route

app.get("/", (req, res) => {
    res.send("Welcome to the Home Page! 🚀");
});

app.get("/about", (req, res) => {
    res.send("This is the About Page!");
});

app.get("/contact", (req, res) => {
    res.send("This is the Contact Page!");
});

app.get("/services", (req, res) => {
    res.send("Our Services: Web Development, App Development!");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});