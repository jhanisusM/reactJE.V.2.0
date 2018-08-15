import React, { Component } from "react";
import Card from "../../components/Card";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Footer from "../../components/Footer";

class AddHorse extends Component {
    state = {
        horses: [],
        foundHorse: [],
        name: "",
        sire: "",
        mare: "",
        gender: "",
        age: "",
        note:"",
        img:"",
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.name);
        if (this.state.name && this.state.sire) {
            API.saveHorse({
                name: this.state.name,
                sire: this.state.sire,
                mare: this.state.mare,
                gender: this.state.gender,
                age: this.state.age,
                note: this.state.note,
                img: this.state.img,
            })
                .then(res => console.log("Horse was successfully added"))
                .catch(err => console.log(err));
                window.location.reload();
        };
        this.addHorseForm();
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    addHorseForm = () => {
        return (
            <div>
                <form>
                    <label for="">Name:</label>
                    <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="Name (required)"
                    />
                    <label for="">Sire:</label>
                    <Input
                        value={this.state.sire}
                        onChange={this.handleInputChange}
                        name="sire"
                        placeholder=" Sire (required)"
                    />
                    <label for="">Mare:</label>
                    <Input
                        value={this.state.mare}
                        onChange={this.handleInputChange}
                        name="mare"
                        placeholder=" Mare (required)"
                    />
                    <label for="">Gender:</label>
                    <Input
                        value={this.state.gender}
                        onChange={this.handleInputChange}
                        name="gender"
                        placeholder=" Gender (required)"
                    />
                    <label for="">Age:</label>
                    <Input
                        value={this.state.age}
                        onChange={this.handleInputChange}
                        name="age"
                        type="number"
                        placeholder=" Age (required)"
                    />
                     <label for="">Notes:</label>
                    <Input
                        value={this.state.note}
                        onChange={this.handleInputChange}
                        name="note"
                        placeholder=" Additional Notes:"
                    />
                     <label for="">Image URL:</label>
                    <Input
                        value={this.state.img}
                        onChange={this.handleInputChange}
                        name="img"
                        placeholder=" URL image"
                    />
                    <FormBtn
                        disabled={!(this.state.name && this.state.sire)}
                        onClick={this.handleFormSubmit}>
                        Add Horse
                    </FormBtn>
                </form>
            </div>
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
                            <Card title="Add a Horse" icon="">
                                {this.addHorseForm()}
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

export default AddHorse;