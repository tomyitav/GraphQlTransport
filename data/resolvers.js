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
      updateCar (name) {
        console.log('Updating...');
      }
  },
  Subscription: {
      carUpdated(car) {
      return car;
    },
  }
};

export default resolveFunctions;
