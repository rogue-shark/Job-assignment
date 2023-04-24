const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan')
const routes = require('./routes');

const app = express();

const dbUrl = require('./config/db');

const PORT = process.env.PORT || 8080;

//Connecting to MongoDB
mongoose.connect(dbUrl, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error!!! :'));
db.once('open', () => {
  console.log(`Ayo, Database CONNECTED!`);
});

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'))

// use ROUTES
app.use('/api', routes);


app.listen(PORT, () => console.log(`Now serving PORT:${PORT}`));

module.exports = app;
