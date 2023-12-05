import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//import images
import websiteLogo from "../assets/images/logo.jpg";

//im
import { useSelector, useDispatch } from "react-redux";
import { Input } from 'reactstrap';

// import { getTheTitle } from "../helpers/functions_helper";

const Header = ({ headerClass }) => {

	const toogleMenuBtn = () => {
		var windowSize = document.documentElement.clientWidth;
	};
	
	return (
		<React.Fragment>
			<header id="page-header" className={headerClass}>
				<div className='page-topbar pt-3 pb-2' style={{borderBottom: '2px solid #000'}}>
					<div className="layout-width container">
						<div className='d-flex'>
							<div className='topbar-left d-flex justify-content-between' style={{width: '25%'}}>
								<Link href='#support'>Support</Link>
								<Link href='#soter-location'>Store location</Link>
							</div>
							<div className='topbar-left d-flex justify-content-center px-2' style={{width: '50%'}}>
								<Link href='#shop'>Show All Products</Link>
							</div>
							<div className='topbar-left d-flex justify-content-between' style={{width: '25%'}}>
								<Link href='#support'>English</Link>
								<Link href='#soter-location'>INR</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="layout-width container">
					<div className="navbar-header pt-2 pb-3">
						<div className="d-flex align-items-center">
							<div className="navbar-brand-box horizontal-logo" style={{width: '30%'}}>
								<Link to="/" className="logo">
									<span className="logo-sm">
										<img src={websiteLogo} alt="" height="70" />
									</span>
								</Link>
							</div>

							<div className='searchbox' style={{width: '40%'}}>
								<Input type='text' />
							</div>

							<div className='iconslist text-end' style={{width: '30%'}}>
								<span className='p-2'>Rajkot</span>
								<span className='p-2'>Jeel</span>
								<span className='p-2'>Cart</span>
							</div>

						</div>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
};

export default Header;