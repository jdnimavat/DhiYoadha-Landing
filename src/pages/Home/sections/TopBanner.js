import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

//import images
import bannerImg from "../../../assets/images/banner-image.jpg";

const TopBanner = (props) => {
    return (
		<React.Fragment>
			<div className="site-top-banner">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="ps-md-5">
                            <h1 className="banner-title mb-2">Crazy Combo Sale</h1>
                            <p className="banner-subtitle mb-4">Unlock unbeatable <br/>double deal-ights</p>

                            <p className="banner-colorline mb-4">Starting at just &#x20B9;199</p>
                            <a href="#shop" className="banner-btn">Shop Now</a>
                        </Col>
                        <Col md={6}>
                            <img src={bannerImg} alt="Banner right" width="500px" />
                        </Col>
                    </Row>
                </Container>
			</div>
		</React.Fragment>
	);
}

export default TopBanner;