import Mongoose from 'mongoose';

const CarStationSchema = Mongoose.Schema({
    name: {type: String, required: true},
}, {collection : 'CarStation'});

const CarStationModel= Mongoose.model('CarStation', CarStationSchema);

export { CarStationModel };