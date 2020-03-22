const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();



mongoose.connect(
    process.env.DB_Connection,
    { useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.use('/', require('./routes/feed'));


const PORT = process.env.PORT || 4040;        

app.listen(PORT , console.log(`Server started on port ${PORT}`));
