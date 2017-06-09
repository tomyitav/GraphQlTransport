import Mongoose from 'mongoose';

const CarSchema = Mongoose.Schema({
    name: {type: String, required: true},
    station: {type: String, required: false}
}, {collection : 'Car'});

const CarModel= Mongoose.model('Car', CarSchema);

export { CarModel };