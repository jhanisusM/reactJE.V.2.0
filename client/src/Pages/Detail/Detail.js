import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import {FormBtn } from "../../components/Form";
import "./Details.css";

class Detail extends Component {
    state = {
        horse: {}
    };

    componentDidMount() {
        API.getHorse(this.props.match.params.id)
            .then(res => this.setState({ horse: res.data }))
            .catch(err => console.log(err));
    };

    goBack = ()=>{
        window.history.back();
    };


    render() {
        return (
            <Container fluid>
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <Col size="md-12">
                        <br />
                        <br />
                        <Card title="Horse Details" icon="">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Horse name</th>
                                        <th>Sire</th>
                                        <th>Mare</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.horse.name}</td>
                                        <td>{this.state.horse.sire}</td>
                                        <td>{this.state.horse.mare}</td>
                                        <td>{this.state.horse.age}</td>
                                        <td>{this.state.horse.gender}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <hr />
                            <article>
                                <h6>Notes:</h6>
                                <p>
                                    {this.state.horse.note}
                                </p>
                                <br/>
                                <div className="image">
                                    <img src={this.state.horse.img} alt="" />

                                </div>
                            </article>
                            <br/>


                            <FormBtn
                                onClick={this.goBack}> <span className="fa fa-arrow-left" />  Back to DataBase   </FormBtn>
                            <Footer />
                        </Card>
                        <br />

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Detail;