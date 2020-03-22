const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();



const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const feedRoutes = require('./routes/questions');

app.use('/questions', feedRoutes);


mongoose.connect(
    process.env.DB_Connection,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}
    )
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 4040;        

app.listen(PORT , console.log(`Server started on port ${PORT}`));
