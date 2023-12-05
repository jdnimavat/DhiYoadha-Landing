import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {
	return (
		<React.Fragment>
			<footer className="footer p-4" style={{background: '#1b2634', color: "#fff"}}>
				<Container>
					<Row>
						<Col sm={12} className='text-center'>
							© {new Date().getFullYear()} All Copyright Reserved.
						</Col>
					</Row>
				</Container>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
