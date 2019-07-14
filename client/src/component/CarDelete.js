import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo';
import { deleteCarsQuery, getCarsQuery } from "../queries/query";


class CarDelete extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
        }

    }
    deleteForm(e) {
        e.preventDefault();
        console.log(this.state.id)
        if (!this.state.id) {
            alert("Silmek için bir ID giriniz:")
        } else {
            this.props.deleteCarsQuery({
                variables: {
                    id: this.state.id
                },
                refetchQueries: [{ query: getCarsQuery }]
            })
            alert("Silme başarılı");
        }
    }

    render() {
        return (
            <div style={{ padding: "50px", backgroundColor: "#b5ffba" }} >
                <form onSubmit={this.deleteForm.bind(this)}>
                    <input type="text" onChange={(e) =>
                        this.setState({ id: e.target.value })} style={{ margin: "5px" }} className="form-control" placeholder="ID"></input>
                    <div style={{ padding: "5px" }}>
                        <button className="btn btn-danger" style={{ width: "70px", fontSize: "16px" }}>Sil</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default compose(
    graphql(deleteCarsQuery, { name: "deleteCarsQuery" }),
    graphql(getCarsQuery, { name: "getCarsQuery" })
)(CarDelete);