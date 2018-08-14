import React, { Component } from "react";
import Card from "../../components/Card";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import Footer from "../../components/Footer";

class AllHorses extends Component {
    state = {
        horses: [],
        foundHorse: [],
        name: "",
        sire: "",
        mare: "",
        gender: "",
        age: "",
    };

    componentDidMount() {
        this.loadHorses();
    }

    loadHorses = () => {
        API.getHorses()
            .then(res =>
                this.setState({ horses: res.data, foundHorse: [], name: "", sire: "", mare: "", gender: "", age: "" })
            )
            .catch(err => console.log(err));
    };

    deleteHorse = id => {
        API.deleteHorse(id)
            .then(res => this.loadHorses())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <br />
                            <br />
                            <br />
                            <Card title="View All Horses" icon="">
                                {this.state.horses ? (
                                    <List>
                                        {this.state.horses.map(horse => (
                                            <ListItem key={horse._id}>
                                                <Link to={"/horses/" + horse._id}>
                                                    <strong>
                                                    {horse.name} || {horse.sire} || {horse.mare} || {horse.gender} || {horse.age}                                                    </strong>
                                                </Link>
                                                <DeleteBtn onClick={() => this.deleteHorse(horse._id)} />
                                            </ListItem>
                                        ))}
                                    </List>
                                ) : ( <h3>No Results to Display</h3>)}
                           <Footer />
                            </Card>
                            <br />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    };
};

export default AllHorses;