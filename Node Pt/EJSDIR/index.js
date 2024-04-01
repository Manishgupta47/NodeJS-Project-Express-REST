const express = require ("express");
const app = express ();
// console.dir(app);

let port = 8080;

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/view"));


app.get("/", (req, res) => {
    res.render("home.ejs");
});

// app.get("/ig/:username", (req, res) => {
//     const follower = ["manish", "sjjsjs", "sjsjsm", "sjsjsh"];
//     let {username} = req.params;
//     res.render("instagram.ejs",{username, follower});
// });
app.get("/ig/:username", (req, res) => {
    const instaData = require("./")
    
    res.render("instagram.ejs");
});
app.get("/rolldice", (req, res) => {
    let diceval = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {diceval});
});
app.listen (port, ()=> {
    console.log(`app listening on port ${port}`);
});