import {TrainModel} from '../../db/trains'

const resolveFunctions = {
    Query: {
        train (_, {name}){
            let where = {};
            if (name != undefined) {
                Object.assign(where, {name: name})
            }
            return TrainModel.find(where, (err, trains) => {
                if (err) {
                    console.log("Error- ", err);
                }
            })
        }

    },
    Mutation: {
        addTrain (_, {name, speed, diesel}) {
            let newTrain = new TrainModel({name, speed, diesel})
            newTrain.save((err, savedTrain) => {
                if(err) {
                    console.log('Got error - ', err)
                }
            })
        },

        deleteTrain(_, {name}) {
            console.log('Deleting ' + name );
            let where = {};
            Object.assign(where, {name: name});
            TrainModel.findOneAndRemove(where, (err, trains) => {
                if (err) {
                    console.log('Got error - ', err);
                }
                console.log('Removed train - ', trains);
                return trains;
            })
        }
    }
};

export default resolveFunctions;