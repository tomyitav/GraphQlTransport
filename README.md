# apollo-server-tutorial
**Note: The Tutorial uses Apollo Server v0.1, which is not the current version. To get to the current version, follow the tutorial, and then update following this [migration guide](http://dev.apollodata.com/tools/apollo-server/migration.html).**

**All The changes necessary to update to Apollo Server v0.2 can be found in the diff of [@p4bloch's PR](https://github.com/apollostack/apollo-server-tutorial/pull/6/files)**

This repo contains the full code for the GraphQL server tutorial (SQL, MongoDB + REST).

Documentation and explanations can be found on [docs.apollostack.com](http://dev.apollodata.com/tools/apollo-server/index.html)

## How to use

In order for the MongoDB part of this example to work, you need to have MongoDB installed on your machine. All other required parts come with this package.

```sh
npm install
npm start
```

The server should now accept requests at http://localhost:8080/graphql
