const express = require ("express");
const app = express ();
// console.dir(app);

let port = 8080;
app.listen (port, ()=> {
    console.log(`app listening on port ${port}`);
});

// app.use((req, res) => {
//     // console.log(req);
//     console.log("new incoming request");
//     res.send("this is response")
// });
app.get("/", (req, res)=> {
    res.send("you connected  path");
});
// app.get("/apple", (req, res)=> {
//     res.send("you connected apple path");
// });
// app.get("/mango", (req, res)=> {
//     res.send("you connected mango path");
// });
// app.get("*", (req, res)=> {
//     res.send("you connected not path");
// });
// app.post("/", (req, res)=> {
//     res.send("you connected any path");
// });
app.get("/:username/:id", (req, res)=> {
    // console.log(req.params);
    let{username, id} = req.params;
    res.send(`welcome to the page of @ ${username}`);
});
app.get("/search", (req, res)=> {
   
    let{q} = req.query;
    // if(!q){
    //     res.send("<h1>nothing searched</h1>");
    //   }
    res.send(`<h1>search result for query: ${q}</h1>`);
});