import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faLocationDot, faCartShopping } from '@fortawesome/free-solid-svg-icons';

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

	//Dropdown Toggle
	const [isLanguageDropdown, setIsLanguageDropdown] = useState(false);
	const toggleLanguageDropdown = () => {
		setIsLanguageDropdown(!isLanguageDropdown);
	};
	const [isCurrencyDropdown, setIsCurrencyDropdown] = useState(false);
	const toggleCurrencyDropdown = () => {
		setIsCurrencyDropdown(!isCurrencyDropdown);
	};
	
	return (
		<React.Fragment>
			<header id="page-header" className={headerClass}>
				<div className='page-topbar pt-3 pb-2' style={{borderBottom: '2px solid #000'}}>
					<div className="layout-width container">
						<div className='d-flex'>
							<div className='topbar-left d-flex justify-content-between' style={{width: '25%'}}>
								<Link href='#support'><FontAwesomeIcon icon={faEnvelope} /> Support</Link>
								<Link href='#soter-location'>Store location</Link>
							</div>
							<div className='topbar-left d-flex justify-content-center px-2' style={{width: '50%'}}>
								<Link href='#shop' className='show-all-link'>Show All Products</Link>
							</div>
							<div className='topbar-left d-flex justify-content-between' style={{width: '25%'}}>
								
								<Dropdown isOpen={isLanguageDropdown} toggle={toggleLanguageDropdown} className="ms-sm-3 header-item topbar-user">
									<DropdownToggle tag="button" type="button" className="btn">
										<span>English</span> <FontAwesomeIcon icon={faChevronDown} />
									</DropdownToggle>
									<DropdownMenu className="dropdown-menu-end">
										<DropdownItem href="#"><span className="align-middle">Spanish</span></DropdownItem>
										<DropdownItem href="#"><span className="align-middle">Hindi</span></DropdownItem>
										<DropdownItem href="#"><span className="align-middle">French</span></DropdownItem>
										<DropdownItem href="#"><span className="align-middle">Russian</span></DropdownItem>
									</DropdownMenu>
								</Dropdown>

								<Dropdown isOpen={isCurrencyDropdown} toggle={toggleCurrencyDropdown} className="ms-sm-3 header-item topbar-user">
									<DropdownToggle tag="button" type="button" className="btn">
										<span>INR</span> <FontAwesomeIcon icon={faChevronDown} />
									</DropdownToggle>
									<DropdownMenu className="dropdown-menu-end">
										<DropdownItem href="#"><span className="align-middle">USD</span></DropdownItem>
										<DropdownItem href="#"><span className="align-middle">EUR</span></DropdownItem>
										<DropdownItem href="#"><span className="align-middle">GBP</span></DropdownItem>
										<DropdownItem href="#"><span className="align-middle">CHF</span></DropdownItem>
									</DropdownMenu>
								</Dropdown>
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
								<a href="#location" className='p-2'>Rajkot <FontAwesomeIcon icon={faLocationDot} /></a>
								<a href="#user" className='p-2'>Jeel <FontAwesomeIcon icon={faUser} /></a>
								<a href="#cart" className='p-2'>Cart <FontAwesomeIcon icon={faCartShopping} /></a>
							</div>

						</div>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
};

export default Header;