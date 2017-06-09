const schema = `
type CarStation {
 _id : String
 name: String
 cars: [Car]
}

# the schema allows the following query:
type Query {
  car_station(name: String): [CarStation]
}

`;

export default schema;