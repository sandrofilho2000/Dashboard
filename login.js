const mysql = require("mysql");
const express =  require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
const app = express();
app.use('/assets', express.static("assets"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reallife"
});

connection.connect(function(error){
    if(error) console.log(error);
    else console.log("CONNECTED DO THE DATABASE!")
})

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

app.post("/", encoder, function(req, res){
    var username = req.body.username;
    var password = req.body.password; 

    connection.query("SELECT * FROM adminLogin where user_name = ? and user_pass = ?",[username,password],function(error, results, fields){
        if(results.length > 0){
            res.redirect("/painel.html")
        }else{
            res.redirect("/")
        }
        res.end()
    })
})

app.get('/painel.html', function(req, res){
    res.sendFile(__dirname + '/painel.html')
})
app.get('/products.html', function(req, res){
    res.sendFile(__dirname + '/products.html')
})

app.listen(4000)