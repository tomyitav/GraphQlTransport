import { find, filter } from 'lodash';
import { pubsub } from './subscriptions';
import { CarModel } from './connectors';

const resolveFunctions = {
  Query: {
      car (_, {name}){
          let where = {};
          if(name != undefined) {
              Object.assign(where, {name: name})
          }
          return CarModel.find(where ,(err, cars) => {
              if(err) {
                  console.log("Error- ", err);
              }
          })
      }

  },
  Mutation: {
      updateCar (_, {currName, newName}) {
        console.log('Updating  ' + currName + " with new name " + newName);
        let where = {};
        Object.assign(where, {name: currName});
        CarModel.findOneAndUpdate(where, {$set:{name:newName}} , {upsert : true}, (err, cars) => {
          if(err) {
              console.log('Got error - ' , err);
          }
          cars.name = newName;
          pubsub.publish('carUpdated', cars);
          return cars
        })
      },

      addCar (_, {name}) {
          let newCar = new CarModel({name})
          newCar.save((err, savedCar) => {
              if(err) {
                  console.log('Got error - ', err)
              }
            console.log('Logging saved car-');
            console.log(savedCar);
        })
      },

      deleteCar (_, {name}) {
          console.log('Deleting ' + name );
          let where = {};
          Object.assign(where, {name: name});
          CarModel.findOneAndRemove(where, (err, cars) => {
              if (err) {
                  console.log('Got error - ', err);
              }
              return cars
          })
      }
  },
  Subscription: {
      carUpdated(car) {
      return car;
    },
  }
};

export default resolveFunctions;
