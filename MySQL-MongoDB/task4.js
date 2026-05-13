require('dotenv').config();

const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');


    const userSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      }
    });

  
    const User = mongoose.model('User', userSchema);

    console.log('Schema created');

    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Connection failed:', err);
  });