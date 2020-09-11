//Importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//route file setup
const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb @ 27017');
});

mongoose.connection.on('error',(err)=>{
    if (err){
        console.log('Error in database connection: '+ err);
    }
});

//port number
const port = 3000;

//add middleware-cors
app.use(cors());

//body-parser
app.use(bodyparser.json());    

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

//routing testing method
app.get('/', (req, res)=>{
    res.send('foobar');
});

//bind app to listen the port
app.listen(port,()=>{
    console.log('Server started at port ' + port);
});