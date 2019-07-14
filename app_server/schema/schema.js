const graphql = require('graphql');
var { PubSub, withFilter } = require("graphql-subscriptions");
const carDB = require('../models/carSchema');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull//zorunlu girilmesi gerekenler için
} = graphql;

const carType = new GraphQLObjectType({
    name: 'car',
    fields: () => ({
        id: { type: GraphQLID },
        brand: { type: GraphQLString },
        model: { type: GraphQLString },
        color: { type: GraphQLString },
        cost: { type: GraphQLString }
    })
})

const Queries = new GraphQLObjectType({
    name: "CarQueris",
    fields: {
        car: {
            type: carType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return carDB.findById(args.id);
            }
        },
        cars: {
            type: new GraphQLList(carType),
            resolve() {
                return carDB.find({});
            }
        }

    }
})

const Mutation = new GraphQLObjectType({
    name: 'mutation',
    fields: {
        addCar: {
            type: carType,
            args: {
                brand: { type: GraphQLString },
                model: { type: GraphQLString },
                color: { type: GraphQLString },
                cost: { type: GraphQLString }
            }, resolve(parent, args) {
                let car = new carDB({
                    brand: args.brand,
                    model: args.model,
                    color: args.color,
                    cost: args.cost
                })
                return car.save();
            }
        },
        updateCar: {
            type: carType,
            args: {
                id: { type: GraphQLID },
                brand: { type: GraphQLString },
                model: { type: GraphQLString },
                color: { type: GraphQLString },
                cost: { type: GraphQLString }
            }, resolve(parent, args) {
                carDB.findByIdAndUpdate(args.id).then(car => {
                    car.brand = args.brand;
                    car.model = args.model;
                    car.color = args.color;
                    car.cost = args.cost;
                    return car.save();
                })
            }
        },
        deleteCar: {
            type: carType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                carDB.findByIdAndDelete(args.id).then(car => {
                    car.save();
                })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Queries,
    mutation: Mutation,
})
