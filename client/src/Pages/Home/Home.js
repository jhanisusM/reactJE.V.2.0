import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import { Col, Row, Container } from "../../components/Grid";


class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                   
                    <Col size="md-12">
                    <br />
                    <br />
                    <br />
                        <Card title="Welcome to JockeyExpress!" icon="">
                             <div>
                              <img src={'http://placehold.it/400x20&text=slide1'} />
                             </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        );
    };
}
export default Home;
