import {ApolloClient, createNetworkInterface} from "apollo-client";
import {SubscriptionClient, addGraphQLSubscriptions} from 'subscriptions-transport-ws';

let networkInterface = createNetworkInterface({
  uri: 'http://localhost:8080/graphql'
});

const wsClient = new SubscriptionClient(`ws://localhost:8090/`, {
  reconnect: true,
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
});

export function getClient(): ApolloClient {
  return client;
}
