import Mongoose from 'mongoose';

const TrainSchema = Mongoose.Schema({
    name: {type: String, required: true},
    speed: {type: Number, required: true},
    diesel: {type: Boolean, required: true}
}, {collection : 'Train'});

const TrainModel= Mongoose.model('Train', TrainSchema);

export { TrainModel };