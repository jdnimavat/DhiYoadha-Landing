import React from "react";
import { Container, Row, Col } from "reactstrap";

const ThreeBlocks = (props) => {
	return (
		<React.Fragment>
			<div className="three-blocks-section">
				<Container>
					<Row>
						<Col md={4}>
							<div className="home-3block-item h3i-item1">
								<div className="home-3block-item-inner">
									Home Made<br />Products
								</div>
							</div>
						</Col>
						<Col md={4}>
							<div className="home-3block-item h3i-item2">
								<div className="home-3block-item-inner">
									High Rating<br />Products
								</div>
							</div>
						</Col>
						<Col md={4}>
							<div className="home-3block-item h3i-item3">
								<div className="home-3block-item-inner">
									Premium Brand<br />Products
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</React.Fragment>
	);
};

export default ThreeBlocks;
