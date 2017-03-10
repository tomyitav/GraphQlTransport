import { CarModel } from './connectors';

const resolveFunctions = {
  RootQuery: {

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
  }
}

export default resolveFunctions;
