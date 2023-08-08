//require express
const express = require('express');


//connects express instance to variable app
const app = express();
let firstName;
//sets engine
app.set('view engine', 'jsx');

//starts engine
app.engine('jsx', require('express-react-views').createEngine());

//set port
const PORT = 3000;

app.get('/',(req,res)=>{
    res.render("Index")
})

app.get('/greeting',(req,res)=>{
    res.render("Greeting")
})

app.get('/greeting/:name',(req,res)=>{
    res.render("Greeting",{name:req.params.name});
})

app.get('/tip',(req,res)=>{
    res.render("Tip")
})

app.get('/Tip/:total/:percent',(req,res)=>{
    res.render("Tip",{total:req.params.total, percent:req.params.percent});
})

app.get('/magic',(req,res)=>{
    res.render("Magic")
})

app.get('/magic/:question',(req,res)=>{
    res.render("Magic",{question:req.params.question});
})


// app.get('/fruits', (req,res)=>{
//     res.send(fruits)
// })


// app.get('/fruits/:indexOfFruitsArray',(req,res)=>{
//     res.render('Show', {
//         fruit: fruits[req.params.indexOfFruitsArray]
//     })
// })

//sets server and displays message if working
app.listen(PORT,(req, res)=>{
    console.log(`server is now listening on port ${PORT}`);
})