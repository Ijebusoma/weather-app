const express = require('express')
const app = express()
app.set('view engine', 'ejs') //set the template engine to EJS
app.use(express.static('public')); //Says 'Yo i wanna access my static files from the public folder

app.get('/', function (req, res) {
  res.render('index');
})
app.post('/', function(req, res){
  
})

app.listen(3000, function () {
  console.log('Yo, listening on port 3000!')
})