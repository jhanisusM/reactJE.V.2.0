import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import Card from "../../components/Card";
import Footer from "../../components/Footer";



class YearlingWeanlings extends Component {
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

    yearlings = () => {
        const yearlings = this.state.horses.filter(horse => (horse.age < 5));
        return (
            <List>
                {yearlings.map(horse => (
                    <ListItem key={horse._id}>
                        <Link to={"/horses/" + horse._id}>
                            <strong>
                                {horse.name} by {horse.sire}
                            </strong>
                        </Link>
                        <DeleteBtn onClick={() => this.deleteHorse(horse._id)} />
                    </ListItem>
                ))}
            </List>
        )
    };

    weanlings = () => {
        const weanlings = this.state.horses.filter(horse => (horse.age >= 5));
        return (
            <List>
                {weanlings.map(horse => (
                    <ListItem key={horse._id}>
                        <Link to={"/horses/" + horse._id}>
                            <strong>
                                {horse.name} by {horse.sire}
                            </strong>
                        </Link>
                        <DeleteBtn onClick={() => this.deleteHorse(horse._id)} />
                    </ListItem>
                ))}
            </List>
        )
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
                            <Card title="Yearlings|| Weanlings" icon="">

                                <div className="card mt-3 tab-card">
                                    <div className="card-header tab-card-header">
                                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true">Yearlings (Name)</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false">Weanlings</a>
                                            </li>

                                        </ul>
                                    </div>

                                    {/*---------- Yearlings -------*/}
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
                                            <h5 className="card-title">
                                                <span className="fa fa-bullseye"></span> Yearlings (Name)</h5>
                                            <div className="card-body">
                                                {this.state.horses ? (<div>{this.yearlings()}</div>) : (<h3>No Results to Display</h3>)}
                                            </div>
                                        </div>

                                        {/*---------- Weanlings -------*/}
                                        <div className="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
                                            <h5 className="card-title">
                                                <span className="fa fa-sitemap"></span> Weanlings</h5>
                                            <div className="card-body">
                                                {this.state.horses ? (<div>{this.weanlings()}</div>) : (<h3>No Results to Display</h3>)}
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <Footer />
                            </Card>
                            <br />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

};

export default YearlingWeanlings;