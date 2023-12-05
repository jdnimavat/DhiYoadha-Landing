import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
// import Section from "./Section";

const Home = () => {

    document.title = 'Dashboard ' + process.env.REACT_APP_PAGE_TITLE_POSTFIX;

    return (
		<React.Fragment>
			<div className="page-content">
				<Container fluid>
					
				</Container>
			</div>
		</React.Fragment>
	);

};

export default Home;
