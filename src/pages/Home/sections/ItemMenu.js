import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

//import images
import itemImg1 from "../../../assets/images/grocery.png";
import itemImg2 from "../../../assets/images/mobiles.png";
import itemImg3 from "../../../assets/images/fashion.png";
import itemImg4 from "../../../assets/images/electronics.png";
import itemImg5 from "../../../assets/images/applience.jpg";
import itemImg6 from "../../../assets/images/travel.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ItemMenu = (props) => {
    return (
		<React.Fragment>
            <div className="item-menu-wrap">
                <div className="item-menu-inner">
                    
                    <div className="menu-item">
                        <div className="menu-item-inner">
                            <div className="item-img me-3">
                                <img src={itemImg1} alt="" width="65" />
                            </div>
                            <div className="item-info">
                                <span className="me-2">Grocery</span> <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-inner">
                            <div className="item-img me-3">
                                <img src={itemImg2} alt="" width="65" />
                            </div>
                            <div className="item-info">
                                <span className="me-2">Mobiles</span> <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-inner">
                            <div className="item-img me-3">
                                <img src={itemImg3} alt="" width="65" />
                            </div>
                            <div className="item-info">
                                <span className="me-2">Fashion</span> <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-inner">
                            <div className="item-img me-3">
                                <img src={itemImg4} alt="" width="65" />
                            </div>
                            <div className="item-info">
                                <span className="me-2">Electronics</span> <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-inner">
                            <div className="item-img me-3">
                                <img src={itemImg5} alt="" width="65" />
                            </div>
                            <div className="item-info">
                                <span className="me-2">Appliances</span> <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-inner">
                            <div className="item-img me-3">
                                <img src={itemImg6} alt="" width="65" />
                            </div>
                            <div className="item-info">
                                <span className="me-2">Travel</span> <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-item-inner">
                            <div className="item-img me-3">
                                <img src={itemImg1} alt="" width="65" />
                            </div>
                            <div className="item-info">
                                <span className="me-2">Top Offers</span> <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
	);
}


export default ItemMenu;
