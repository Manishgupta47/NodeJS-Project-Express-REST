const express = require ("express");
const app = express();

let port = 7070;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register", (req, res) =>{
    let {user, password} = req.query;
    res.send(`Statnder get response.welcome ${user}`);
});

app.post("/register", (req, res) =>{
    let {user, password} = req.body;
    res.send(`Statnder get response.welcome ${user}`);
    
});

app.listen(port, () => {
    console.log(`app listodemon ning on port ${port}`);
});