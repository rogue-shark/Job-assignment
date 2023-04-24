const mongoose = require('mongoose');
const data = require('./sample_data.json');
const dbUrl = require('../config/db')

mongoose.connect(dbUrl)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error!!! :')) 
db.once('open', () => {
    console.log('SampleData Loaded to MongoDB! ¯\(°_o)/¯')
})

const userSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  income: String,
  city: String,
  car: String,
  quote: String,
  phone_price: String,
});

const User = mongoose.model('User', userSchema);

const loadSampleData = async () => {
    await User.deleteMany()
    await User.insertMany(data)
}

loadSampleData().then(() => {
    mongoose.connection.close()
})
