import React, { Component } from 'react';
import './App.css';
import CarAdd from './component/CarAdd';
import CarList from './component/CarList';
import CarUpdate from './component/CarUpdate';
import CarDelete from './component/CarDelete';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { Button, Accordion, Card, } from 'react-bootstrap';


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main" style={{backgroundColor:"#9befed"}}>
          <h1>Araba GraphQL</h1>
          <header className="App-header">
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Araba Ekle
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <CarAdd />
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Arabalar
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <CarList />
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Araba Güncelle
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <CarUpdate />
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Araba Sil
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <CarDelete />
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
