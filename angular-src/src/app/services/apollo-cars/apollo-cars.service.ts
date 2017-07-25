import {Injectable} from "@angular/core";
import gql from "graphql-tag";
import {Apollo} from "apollo-angular";

@Injectable()
export class ApolloCarsService {

  private apollo: Apollo;
  clientAddSubscription;
  clientUpdateSubscription;
  clientDeleteSubscription;
  constructor(apollo: Apollo) {
    this.apollo= apollo;
    this.createServiceSubscriptions();
  }

  createServiceSubscriptions(){
    console.log('Creating subscriptions...');
    this.clientUpdateSubscription = this.apollo.subscribe({
      query: gql`

        subscription onCarUpdated{
          carUpdated {
            _id
            name
          }
        }`,
      variables: {},
    })
    this.clientAddSubscription = this.apollo.subscribe({
      query: gql`
        subscription onCarAdded{
          carAdded {
            _id
            name
          }
        }`,
      variables: {},
    })
    this.clientDeleteSubscription = this.apollo.subscribe({
      query: gql`
        subscription onCarDeleted{
          carDeleted {
            _id
            name
          }
        }`,
      variables: {},
    })
  }

  getAllCars(): any {
    return this.apollo.query({
      query: gql`
        query car{
          car{
            _id
            name
          }
        }`,
      fetchPolicy: 'network-only'
    })
  }

  addNewCar (carName) {
    let quatedName = '"' + carName + '"';
    return this.apollo.mutate({
      mutation: gql`
        mutation {
          addCar(name : ${quatedName}) {
            name
          }
        }
      `,
    })
  }

  editCar (previousName, currentName) {
    let prevQuatedName = '"' + previousName + '"';
    let currentQuatedName = '"' + currentName + '"';
    return this.apollo.mutate({
      mutation: gql`
        mutation {
          updateCar(currName : ${prevQuatedName}, newName : ${currentQuatedName}) {
            name
          }
        }
      `,
    })
  }
  deleteCar (name) {
    let quatedName = '"' + name + '"';
    return this.apollo.mutate({
      mutation: gql`
        mutation {
          deleteCar(name : ${quatedName}) {
            _id
            name
          }
        }
      `,
    })
  }

  subscribeToUpdates() {
    return this.clientUpdateSubscription;
  }
  subscribeToAdds() {
    return this.clientAddSubscription;
  }
  subscribeToDeletes() {
    return this.clientDeleteSubscription;
  }
}
