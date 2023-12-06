import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import TopBanner from "./sections/TopBanner";

const Home = () => {

    document.title = 'Dashboard ' + process.env.REACT_APP_PAGE_TITLE_POSTFIX;

    return (
		<React.Fragment>
			<div className="page-content">
				<TopBanner />
				<Container fluid>
				</Container>
			</div>
		</React.Fragment>
	);

};

export default Home;
