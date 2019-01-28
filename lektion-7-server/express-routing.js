const express = require('express');
const app = express();

app.get("/", (req, res) => {
    const content = "<h1>Welcome to Express</h1>";
    res.send(content);
});

app.get("/about", (req, res) => {
    const content = "<h1>About Express</h1>";
    res.send(content);
});

app.get("/contact", (req, res) => {
    const content = "<h1>Kontakt Express</h1>";
    res.send(content);
});

app.listen(4242, () => {
    console.log("Express app kører...");
});