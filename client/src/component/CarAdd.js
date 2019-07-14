import { graphql } from 'react-apollo';
import { addCarsQuery } from '../queries/query';
import React, { Component } from 'react';

class CarAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brand: '',
            model: '',
            color: '',
            cost: ''
        }
    }

    SumbitForm(e) {
        e.preventDefault();
        if (!this.state.brand || !this.state.model || !this.state.color || !this.state.cost) {
            alert("Bütün Boşlukları Giriniz.")
        }
        else {
            this.props.addCarsQuery({
                variables: {
                    brand: this.state.brand,
                    model: this.state.model,
                    color: this.state.color,
                    cost: this.state.cost
                }
            });
        }
    }

    render() {
        console.log(this.props);
        return (
            <div style={{backgroundColor:"#f6f186"}}>

                <h3 style={{ paddingLeft: "45px"}}>Araba Ekle</h3>
                <form onSubmit={this.SumbitForm.bind(this)}>
                    <div className="col text-center" style={{ padding: "50px" }} >
                        <input style={{ margin: "2px" }} onChange={(e) =>
                            this.setState({ brand: e.target.value })} className="form-control" placeholder="Marka" type="text"></input>

                        <input style={{ margin: "2px" }}
                            onChange={(e) =>
                                this.setState({ model: e.target.value })} className="form-control" placeholder="Model" type="text"></input>

                        <input style={{ margin: "2px" }}
                            onChange={(e) =>
                                this.setState({ color: e.target.value })} className="form-control" placeholder="Renk" type="text"></input>

                        <input style={{ margin: "2px" }}
                            onChange={(e) =>
                                this.setState({ cost: e.target.value })} className="form-control" placeholder="Fiyat" type="number"></input>

                        <div style={{ padding: "5px" }}>
                            <button className="btn btn-warning" style={{ height: "45px", width: "75px" }}>EKLE</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default graphql(addCarsQuery, { name: "addCarsQuery" })(CarAdd);
