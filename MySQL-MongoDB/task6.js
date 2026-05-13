require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected');

    const userSchema = new mongoose.Schema({
      name: String,
      age: Number
    });

    const User = mongoose.models.User || mongoose.model('User', userSchema);


    const alice = await User.findOne({ name: 'Alice' });
    const bob = await User.findOne({ name: 'Bob' });


    await User.findByIdAndUpdate(alice._id, { age: 23 });
    console.log("Updated: Alice's age changed to 23");

  
    await User.findByIdAndDelete(bob._id);
    console.log("Deleted: Bob removed");


    const remaining = await User.find({}, { _id: 0, __v: 0 });

    console.log('Remaining:', remaining);

    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
  });