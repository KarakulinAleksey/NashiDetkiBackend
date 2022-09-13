const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes.js');
const { PORT = 3000} = process.env;
const app = express();
const path = require('path');

const timeLog = (req, res, next) => {
    console.log('Time:', Date.now());
    console.log('Request Type:', req.method);
    next();
  };
  
app.use(timeLog);

app.use(bodyParser.json());

app.use('/animal', router);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{
    console.log(`Приложение слушает порт ${PORT}`);
  
});

