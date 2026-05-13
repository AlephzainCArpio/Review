require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected');

    const userSchema = new mongoose.Schema({
      name: String,
      age: Number
    });

    const User = mongoose.model('User', userSchema);


    await User.insertMany([
      { name: 'Alice', age: 22 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 28 }
    ]);

    console.log('3 users saved');

   
    const users = await User.find({}, { _id: 0, __v: 0 });

    console.log(users);

    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
  });