import React, { Component } from "react";
import Card from "../../components/Card";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input,  FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import Footer from "../../components/Footer";

class SearchHorses extends Component {
    state = {
        horses: [],
        foundHorse: [],
        name: "",
        sire: "",
        mare: "",
        gender: "",
        age: "",
    };

    resultsReset = () => {
        this.setState({ foundHorse: [], horses: [], name: "", sire: "", mare: "", gender: "", age: "" });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    deleteHorse = id => {
        API.deleteHorse(id)
            .then(res => this.loadHorses())
            .catch(err => console.log(err));
    };

    searchByName = (event) => {
        event.preventDefault();
        API.getHorseByName(this.state.name)
            .then(res => {
                this.setState({ foundHorse: res.data, horses: [], name: "", sire: "", mare: "", gender: "", age: "" });
            }).catch(err => console.log(err))
    };

    searchBySire = (event) => {
        event.preventDefault();
        API.getHorseBySire(this.state.sire)
            .then(res => {
                this.setState({ foundHorse: res.data, horses: [], name: "", sire: "", mare: "", gender: "", age: "" });
            }).catch(err => console.log(err));
    };

    searchByMare = event => {
        event.preventDefault();
        API.getHorseByMare(this.state.mare)
            .then(res => {
                this.setState({ foundHorse: res.data, horses: [], name: "", sire: "", mare: "", gender: "", age: "" });
            }).catch(err => console.log(err));
    };
    searchByGender = event => {
        event.preventDefault();
        API.getHorseByGender(this.state.gender)
            .then(res => {
                this.setState({ foundHorse: res.data, horses: [], name: "", sire: "", mare: "", gender: "", age: "" });
            }).catch(err => console.log(err));
    };

    renderSearchResults = () => {
        console.log(this.state.foundHorse);
        return (
            <List>
                {this.state.foundHorse.map(horse => (
                    <ListItem key={horse._id}>
                        <Link to={"/horses/" + horse._id}>
                            <strong>
                                {horse.name} || {horse.sire} || {horse.mare} || {horse.gender} || {horse.age}
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
                            <Card title="Search for Horses" icon="fa fa-eye">



                                <div className="card mt-3 tab-card">
                                    <div className="card-header tab-card-header">
                                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true">Horse Search (Name)</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false">Sire Search</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three" aria-selected="false">Mare Search</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="four-tab" data-toggle="tab" href="#four" role="tab" aria-controls="four" aria-selected="false">Gender Search</a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/*---------- Name Search -------*/}
                                    {/* {window.location.reload()} */}
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
                                            <h5 className="card-title">
                                                <span className="fa fa-bullseye"></span> Horse Search (Name)</h5>
                                            <div className="card-body">
                                                <form>
                                                    <Input
                                                        value={this.state.name}
                                                        onChange={this.handleInputChange}
                                                        name="name"
                                                        placeholder="Name (required)"
                                                    />
                                                    <FormBtn
                                                        disabled={!(this.state.name)}
                                                        onClick={this.searchByName}>  Search
                                                     </FormBtn>
                                                    <span></span>
                                                    <FormBtn
                                                        disabled={(this.state.name)}
                                                        onClick={this.resultsReset}>  Clear
                                                     </FormBtn>
                                                </form>
                                                <br />
                                                <br />
                                                {this.state.foundHorse.length ? (<div>{this.renderSearchResults()}</div>) : (<h3>No Results to Display</h3>)}
                                            </div>
                                        </div>

                                        {/*---------- Sire Search -------*/}

                                        <div className="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
                                            <h5 className="card-title">
                                                <span className="fa fa-sitemap"></span> Sire Search</h5>
                                            <div className="card-body">
                                                <form>
                                                    <Input
                                                        value={this.state.sire}
                                                        onChange={this.handleInputChange}
                                                        name="sire"
                                                        placeholder="Sire (required)"
                                                    />
                                                    <FormBtn
                                                        disabled={!(this.state.sire)}
                                                        onClick={this.searchBySire}>  Search
                                                    </FormBtn>
                                                    <FormBtn
                                                        disabled={(this.state.name)}
                                                        onClick={this.resultsReset}>  Clear
                                                     </FormBtn>
                                                </form>
                                                <br />
                                                <br />
                                                {this.state.foundHorse.length ? (<div>{this.renderSearchResults()}</div>) : (<h3>No Results to Display</h3>)}
                                            </div>
                                        </div>

                                        {/*---------- Mare Search -------*/}
                                        <div className="tab-pane fade p-3" id="three" role="tabpanel" aria-labelledby="three-tab">
                                            <h5 className="card-title">
                                                <span className="fa fa-dot-circle-o"></span> Mare Search</h5>
                                            <div className="card-body">
                                                <form>
                                                    <Input
                                                        value={this.state.mare}
                                                        onChange={this.handleInputChange}
                                                        name="mare"
                                                        placeholder="Mare (required)"
                                                    />
                                                    <FormBtn
                                                        disabled={!(this.state.mare)}
                                                        onClick={this.searchByMare}>
                                                        Search
                                                    </FormBtn>
                                                    <FormBtn
                                                        disabled={(this.state.name)}
                                                        onClick={this.resultsReset}>  Clear
                                                     </FormBtn>
                                                </form>
                                                <br />
                                                <br />
                                                {this.state.foundHorse.length ? (<div>{this.renderSearchResults()}</div>) : (<h3>No Results to Display</h3>)}
                                            </div>

                                        </div>

                                        {/*---------- Gender Search -------*/}
                                        <div className="tab-pane fade p-3" id="four" role="tabpanel" aria-labelledby="four-tab">
                                            <h5 className="card-title">
                                                <span className="fa fa-circle"></span> Gender Search</h5>

                                            <div className="card-body">
                                                <form>
                                                    <Input
                                                        value={this.state.gender}
                                                        onChange={this.handleInputChange}
                                                        name="gender"
                                                        placeholder="Gender (required)"
                                                    />
                                                    <FormBtn
                                                        disabled={!(this.state.gender)}
                                                        onClick={this.searchByGender}>
                                                        Search
                                                    </FormBtn>
                                                    <FormBtn
                                                        disabled={(this.state.gender)}
                                                        onClick={this.resultsReset}>  Clear
                                                     </FormBtn>
                                                </form>
                                                <br />
                                                <br />
                                                {this.state.foundHorse.length ? (<div>{this.renderSearchResults()}</div>) : (<h3>No Results to Display</h3>)}
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

        );
    };
};

export default SearchHorses;
