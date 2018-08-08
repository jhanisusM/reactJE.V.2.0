import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import { throws } from "assert";


class Horses extends Component {
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(event.name)
        if (this.state.name && this.state.sire) {
            API.saveHorse({
                name: this.state.name,
                sire: this.state.sire,
                mare: this.state.mare,
                gender: this.state.gender,
                age: this.state.age,
            })
                .then(res => this.loadHorses())
                .catch(err => console.log(err));
        }
    };

    searchByMare = event => {
        event.preventDefault();
        API.getHorseByMare(this.state.name)
            .then(res => {
                this.setState({ foundHorse: [res.data], horses: [], name: "", sire: "", mare: "", gender: "", age: "" });
            }).catch(err => console.log(err));
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

    searchByName = (event) => {
        event.preventDefault();
        API.getHorseByName(this.state.name)
            .then(res => {
                this.setState({ foundHorse: [res.data] });
            }).catch(err => console.log(err));
    };



    searchBySire = (event) => {
        event.preventDefault();
        API.getHorseBySire(this.state.sire)
            .then(res => {
                this.setState({ foundHorse: res.data, horses: [], name: "", sire: "", mare: "", gender: "", age: "" });
            }).catch(err => console.log(err));
    };

    searchByMare = (event) => {
        event.preventDefault();
        API.getHorseByMare(this.state.mare)
            .then(res => {
                this.setState({ foundHorse: res.data, horses: [], name: "", sire: "", mare: "", gender: "", age: "" });
            }).catch(err => console.log(err));
    };



    renderSearchResults = () => {
        return (
            <List>
                {this.state.foundHorse.map(Horses => (
                    <ListItem key={Horses._id}>
                        <Link to={"/horses/" + Horses._id}>
                            <strong>
                                {Horses.name} by {Horses.sire} {Horses.age}
                            </strong>
                        </Link>
                        <DeleteBtn onClick={() => this.deleteHorse(Horses._id)} />
                    </ListItem>
                ))}
            </List>
        )
    };

    render() {
        return (
            <Row>




                {/* 
                Search by MARE: 
                This form searches the db by MARE only.
                ------------------------------------ */
                }
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Search by Mare </h1>
                    </Jumbotron>
                    <form>
                        <Input
                            value={this.state.mare}
                            onChange={this.handleInputChange}
                            name="mare"
                            placeholder="Mare (required)"
                        />
                        <FormBtn
                            disabled={!(this.state.mare)}
                            onClick={this.searchByMare}
                        >
                            Search
                        </FormBtn>
                    </form>
                    <br />
                    {this.state.foundHorse.length ? (
                        <div>
                            {this.renderSearchResults()}
                        </div>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
                {/* 
        End of searchByMare
        *******************************************/
                }


                {/* 
                Search by SIRE: 
                This form searches the db by Sire only.
                ------------------------------------ */
                }
                {/* <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Search by Sire </h1>
                    </Jumbotron>
                    <form>
                        <Input
                            value={this.state.sire}
                            onChange={this.handleInputChange}
                            name="sire"
                            placeholder="Sire (required)"
                        />
                        <FormBtn
                            disabled={!(this.state.sire)}
                            onClick={this.searchBySire}
                        >
                            Search
          </FormBtn>
                    </form>
                    <br />
                    {this.state.foundHorse.length ? (
                        <div>
                            {this.renderSearchResults()}
                        </div>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col> */}
                {/* 
            End of searchBySire
            *******************************************/
                }


                {/* 
                Search by NAME: 
                This form searches the db by NAME only.
                ------------------------------------ */
                }
                {/* <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Search by name </h1>
                    </Jumbotron>
                    <form>
                        <Input
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name"
                            placeholder="Name (required)"
                        />
                        <FormBtn
                            disabled={!(this.state.name)}
                            onClick={this.searchByName}
                        >
                            Search
              </FormBtn>
                    </form>
                    <br />
                    {this.state.foundHorse ? (
                        <div>
                            {this.renderSearchResults()}
                        </div>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col> */}
                {/* 
                End of searchByName
                *******************************************/
                }


                {/* 
                Add a Horse form: 
                This form adds a HORSE to the db.
                ------------------------------------ */
                }


                {/* <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Add a Horse </h1>
                    </Jumbotron>
                    <form>
                        <Input
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name"
                            placeholder="Name (required)"
                        />
                        <Input
                            value={this.state.sire}
                            onChange={this.handleInputChange}
                            name="sire"
                            placeholder=" Sire (required)"
                        />
                        <Input
                            value={this.state.mare}
                            onChange={this.handleInputChange}
                            name="mare"
                            placeholder=" Mare (required)"
                        />
                        <Input
                            value={this.state.gender}
                            onChange={this.handleInputChange}
                            name="gender"
                            placeholder=" Gender (required)"
                        />
                        <Input
                            value={this.state.age}
                            onChange={this.handleInputChange}
                            name="age"
                            placeholder=" Age (required)"
                        />
                        <FormBtn
                            disabled={!(this.state.name && this.state.sire)}
                            onClick={this.handleFormSubmit}
                        >
                            Add Horse
              </FormBtn>
                    </form>
                </Col> */}

                {/* 
                End of Add Horse form
                *******************************************/
                }


              {/* 
                Code of BLock displays ALL DB of Caballus: 
                ------------------------------------ */
                }
                {/* <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Horses dB</h1>
                    </Jumbotron>
                    {this.state.horses ? (
                        <List>
                            {this.state.horses.map(horse => (
                                <ListItem key={horse._id}>
                                    <Link to={"/horses/" + horse._id}>
                                        <strong>
                                            {horse.name} by {horse.sire} {horse.age}
                                        </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => this.deleteHorse(horse._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col> */}
                {/* 
                End of db Display
                *******************************************/
                }



                {/* 
                Code of BLock displays Weanlings: 
                ------------------------------------ */
                }

                {/* <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Weanlings</h1>
                    </Jumbotron>
                    {this.state.horses ? (<div>{this.weanlings()}</div>) : (
                        <h3>No Results to Display</h3>
                    )}
                </Col> */}

                {/* End of Weanlings
                ******************************************* */}



                {/* 
                Code of BLock displays Yearlings: 
                ------------------------------------ */
                }

                {/*
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Yearlings</h1>
                    </Jumbotron>
                    {this.state.horses ? (<div>{this.yearlings()}</div>) : (
                        <h3>No Results to Display</h3>
                    )}
                </Col> */}

                {/* End of Yearlings
                ******************************************* */}

            </Row>
        );
    }
}

export default Horses;
