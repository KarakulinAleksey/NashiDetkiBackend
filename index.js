const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const corsOption = require('./config/cors.js');
const router = require('./routes/all-routes.js');

const { PORT = 3000} = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/nashidetkidb',{
    useNewUrlParser: true,
})
.then(()=>console.log('Mongo_OK'))
.catch((err) => console.log(err));

const path = require('path');

app.use(cors(corsOption));                            
app.use(bodyParser.json());

const reqLog = (req, res, next) => {
    console.log('Request Type:', req.method);
    console.log('Request Body:', req.body);
    next();
  };
app.use(reqLog);

app.use(router);

// app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{
    console.log(`Приложение слушает порт ${PORT}`);
  
});

