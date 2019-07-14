import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { getCarsQuery } from '../queries/query';

class CarList extends Component {
    displayCars() {
        var data = this.props.data;
        console.log(data)
        if (data.loading) {
            return (<div>Yükleniyor....</div>)
        }
        else {
            return data.cars.map(car => {
                return (
                    <li key={car.id}>
                        ID:{car.id}<br />
                        Marka:{car.brand}<br />
                        Model:{car.model}<br />
                        Color:{car.color}<br />
                        cost:{car.cost}
                    </li>

                )
            })
        }
    }
    render() {
        return (
            <div style={{backgroundColor:"#f9a1a1"}}>
                <h3 style={{paddingLeft:"45px"}}>Arabalar</h3>
                <ul>
                    {this.displayCars()}
                </ul>

            </div>
        )
    }
}

export default graphql(getCarsQuery)(CarList);
