import React, { Component } from "react";
import Card from "../../components/Card";
import { Col, Row, Container } from "../../components/Grid";
import "./Home.css"
import Slider from "react-slick";
import Footer from "../../components/Footer";


class Home extends Component {
    render() {
          var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Container>
                <Row>

                    <Col size="md-12">
                        <br />
                        <br />
                        <br />
                        <Card title="Welcome to JockeyExpress!" icon="">
                            <div className="pic">
                                <Slider {...settings}>
                                    <div>
                                        <img src="https://c2.staticflickr.com/8/7513/15811731456_c52eab0ee2_b.jpg" />
                                        <h3>1</h3>
                                    </div>
                                    <div>
                                        <img src={"https://c1.staticflickr.com/3/2874/33216679470_213cec8d21_b.jpg"} />
                                        <h3>2</h3>
                                    </div>
                                    <div>
                                        <img src={"https://c1.staticflickr.com/9/8081/8291262070_711e4fa6f8_b.jpg"} />
                                        <h3>3</h3>
                                    </div>
                                    <div>
                                        <img src={"https://c2.staticflickr.com/6/5560/14981083767_fe58976880_b.jpg"} />
                                        <h3>4</h3>
                                    </div>
                                    <div>
                                        <img src={"https://c1.staticflickr.com/9/8151/7517782448_828ed0b0a3_b.jpg"} />
                                        <h3>5</h3>
                                    </div>
                                    <div>
                                        <img src={"https://c1.staticflickr.com/5/4107/4988737130_a66a0a51a4_b.jpg"} />
                                        <h3>6</h3>
                                    </div>
                                </Slider>
                            </div>
                            <br />
                            <div className="centerText">
                                <strong><span className="fa fa-link"></span> Links</strong>
                                <hr />
                                <a href="https://www.ownerview.com/state-licensing/state-racing-commissions" target="blank">
                                    <h6>
                                        <span className="fa fa-external-link"></span> Link to State Racing Commissions for License Renewal:</h6>
                                </a>
                                <a href="https://www.registry.jockeyclub.com/registry.cfm?page=namesrch&search=#" target="blank">
                                    <h6>
                                        <span className="fa fa-external-link"></span> Link to The Jockey Club Registry for Horse Name Registry: </h6>
                                </a>
                                <a href="https://www.tvg.com/" target="blank">
                                    <h6>
                                        <span className="fa fa-external-link" target="blank"></span> Link to TVG for to Watch Live Horse Racing:</h6>
                                </a>
                                <a href="https://www.tvg.com/races" target="blank">
                                    <h6>
                                        <span className="fa fa-external-link"></span> Link to schedule of all Horse Races:</h6>
                                </a>
                            </div>
                            <hr />
                           <Footer />
                        </Card>
                        <br />
                    </Col>
                </Row>
            </Container>

        );
    };
}
export default Home;
