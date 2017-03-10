import Mongoose from 'mongoose';

const mongo = Mongoose.connect('mongodb://localhost:27017/trains', (err) => {
  if(err){
    console.error('Could not connect to MongoDB on port 27017');
  }
  console.log('Connected to mongo!')
});
const CarSchema = Mongoose.Schema({
    name: {type: String, required: true}
}, {collection : 'Car'});

const CarModel= Mongoose.model('Car', CarSchema);

export { CarModel };
