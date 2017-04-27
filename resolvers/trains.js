import { pubsub } from '../data/subscriptions';
import {TrainModel} from '../db/trains'

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
};

export default resolveFunctions;