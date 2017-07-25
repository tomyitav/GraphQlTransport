import {Injectable} from "@angular/core";
import "rxjs/add/observable/of";
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";

@Injectable()
export class ApolloTrainsService {

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

        subscription onTrainUpdated{
          trainUpdated {
            _id
            name
            speed
            diesel
          }
        }`,
      variables: {},
    })
    this.clientAddSubscription = this.apollo.subscribe({
      query: gql`
        subscription onTrainAdded{
          trainAdded {
            _id
            name
            speed
            diesel
          }
        }`,
      variables: {},
    })
    this.clientDeleteSubscription = this.apollo.subscribe({
      query: gql`
        subscription onTrainDeleted{
          trainDeleted {
            _id
            name
            speed
            diesel
          }
        }`,
      variables: {},
    })
  }


  getAllTrains(): any {
    return this.apollo.query({
      query: gql`
        query train{
          train {
            _id
            name
            speed
            diesel
          }
        }`,
      fetchPolicy: 'network-only'
    })
  }

  addTrain(name, speed, diesel) {
    let quatedName = '"' + name + '"';
    return this.apollo.mutate({
      mutation: gql`
        mutation addTrain{
          addTrain(name : ${quatedName}, speed : ${speed}, diesel : ${diesel}){
            _id
            name
            speed
            diesel
          }
        }`
    });
  }

  editTrain(id, name, speed, diesel) {
    let quatedId = '"' + id + '"';
    let quatedName = '"' + name + '"';
    return this.apollo.mutate({
      mutation: gql`
        mutation updateTrain{
          updateTrain(id: ${quatedId}, name : ${quatedName}, speed : ${speed}, diesel : ${diesel}){
            _id
            name
            speed
            diesel
            }
          }`
    });

  }

  deleteTrain(name) {
    let quatedName = '"' + name + '"';
    return this.apollo.mutate({
      mutation: gql`
        mutation deleteTrain{
        deleteTrain(name : ${quatedName}){
            _id
          }
        }`
    });
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
