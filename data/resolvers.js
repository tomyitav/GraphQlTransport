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
        CarModel.find(where ,(err, cars) => {
          if(err) {
              console.log('Got error - ' , err);
          }
          console.log('Found matching cars - ', cars)
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
