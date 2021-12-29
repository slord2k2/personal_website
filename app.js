const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const PORT= process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));


// Middleware

app.use('/assets', express.static(__dirname + '/assets'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });

app.get("/index.html" ,(req,res)=>{
  res.redirect("/");
})



app.post("/",(req,res)=>{
  res.redirect("/");
})


app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
    console.log('Server started on port '+app.get('port'));
});

