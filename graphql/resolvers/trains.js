import {TrainModel} from '../../db/trains'
import {pubsub} from '../subscriptions/subscriptions'

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
        updateTrain (_, {currName, newName, newSpeed, newDiesel}) {
            console.log('Updating  ' + currName + " with new name " + newName);
            let where = {};
            Object.assign(where, {name: currName});
            TrainModel.findOneAndUpdate(where, {$set:{name:newName, speed:newSpeed, diesel:newDiesel}} , {upsert : true}, (err, trains) => {
                if(err) {
                    console.log('Got error - ' , err);
                }
                trains.name = newName;
                pubsub.publish('trainUpdated', trains);
                return trains
            })
        },

        addTrain (_, {name, speed, diesel}) {
            let newTrain = new TrainModel({name, speed, diesel})
            newTrain.save((err, savedTrain) => {
                if(err) {
                    console.log('Got error - ', err)
                    pubsub.publish('trainAdded', savedTrain);
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
                pubsub.publish('trainDeleted', trains);
                return trains;
            })
        }
    },
    Subscription: {
        trainUpdated(train) {
            return train;
        },
        trainAdded(train) {
            return train;
        },
        trainDeleted(train) {
            return train;
        },
    }
};

export default resolveFunctions;