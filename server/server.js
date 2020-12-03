const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/api')

const app = express();
const PORT = process.env.PORT || 8080;
const URL = 'mongodb+srv://opportun16:nZJxFmLrhK5sWuZ@cluster0.qtrsx.mongodb.net/Cluster0?retryWrites=true&w=majority';

mongoose.connect(URL,{
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'));
app.use('/api',routes);

app.listen(PORT, console.log(`Server is tarting at ${PORT}`));