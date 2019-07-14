const { gql } = require('apollo-server');
import { PubSub, withFilter } from "graphql-subscriptions";

const pubsub = new PubSub();



const sub=gql`
type Subscription {
    messageAdded(id: ID!): Message
  }
`