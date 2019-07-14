import { gql } from 'apollo-boost';

const getCarsQuery = gql`
{
    cars{
        id
        brand
        model
        color
        cost
    }
}
`

const addCarsQuery = gql`
mutation($brand:String!,$model:String!,$color:String!,$cost:String!){
    addCar(brand:$brand,model:$model,color:$color,cost:$cost){
      brand
      model
      color
      cost
    }
}
`

const updateCarsQuery = gql`
mutation($id:ID!,$brand:String!,$model:String!,$color:String!,$cost:String!){
    updateCar(id:$id,brand:$brand,model:$model,color:$color,cost:$cost){
      brand
      model
      color
      cost
    }
}
`

const deleteCarsQuery=gql`
mutation($id:ID!){
  deleteCar(id:$id){
    id
  }
}
`

export { getCarsQuery, addCarsQuery ,updateCarsQuery,deleteCarsQuery};

