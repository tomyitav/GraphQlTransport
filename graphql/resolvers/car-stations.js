import {pubsub} from "../subscriptions/subscriptions";
import {CarStationModel} from "../../db/car-stations";
import {CarModel} from "../../db/cars";

const resolveFunctions = {
    Query: {
        car_station (_, {name}){
            let where = {};
            if(name != undefined) {
                Object.assign(where, {name: name})
            }
            return CarStationModel.find(where ,(err, cars) => {
                if(err) {
                    console.log("Error- ", err);
                }
            })
        }
    },
    CarStation: {
        cars(station) {
            return CarModel.find({station: station.name}, (err, cars) => {
                if(err) {
                    console.log("Error- ", err);
                }
            })
        }
    }
    // CarStation: {
    //     cars(station) {
    //         return CarModel.find({station: station}, (err, ))
    //     }
    // }
};

export default resolveFunctions;
