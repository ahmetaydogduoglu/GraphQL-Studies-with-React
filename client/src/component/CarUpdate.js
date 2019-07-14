import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { updateCarsQuery } from '../queries/query';
class CarUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            brand: '',
            model: '',
            color: '',
            cost: ''
        }
    }

    updateForm(e) {
        e.preventDefault();
        console.log(this.state);
        if (!this.state.id||!this.state.color||!this.state.brand||!this.state.cost||!this.state.model) {
            alert("Boşlukları doldurunuz");
        }
        else {
            this.props.updateCarsQuery({
                variables: {
                    id: this.state.id,
                    brand: this.state.brand,
                    model: this.state.model,
                    color: this.state.color,
                    cost: this.state.cost
                }
            })
        }
    }

    render() {
        console.log(this.props);
        return (
            <div style={{ padding: "50px",backgroundColor:"#c7c7f7" }}>
                <form onSubmit={this.updateForm.bind(this)}>
                    <input type="text" onChange={(e) =>
                        this.setState({ id: e.target.value })} style={{ margin: "5px" }} className="form-control" placeholder="ID"></input>

                    <input type="text" onChange={(e) =>
                        this.setState({ brand: e.target.value })} style={{ margin: "5px" }} className="form-control" placeholder="Marka"></input>

                    <input type="text" onChange={(e) =>
                        this.setState({ model: e.target.value })} style={{ margin: "5px" }} className="form-control" placeholder="Model"></input>

                    <input type="text" onChange={(e) =>
                        this.setState({ color: e.target.value })} style={{ margin: "5px" }} className="form-control" placeholder="Renk"></input>

                    <input type="number" onChange={(e) =>
                        this.setState({ cost: e.target.value })} style={{ margin: "5px" }} className="form-control" placeholder="Fiyat"></input>

                    <div style={{ padding: "5px" }}>
                        <button className="btn btn-primary" >Güncelle</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default graphql(updateCarsQuery, { name: "updateCarsQuery" })(CarUpdate);
