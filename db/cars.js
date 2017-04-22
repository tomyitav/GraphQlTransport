import Mongoose from 'mongoose';

const CarSchema = Mongoose.Schema({
    name: {type: String, required: true}
}, {collection : 'Car'});

const CarModel= Mongoose.model('Car', CarSchema);

export { CarModel };