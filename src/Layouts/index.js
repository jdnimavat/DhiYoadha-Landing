import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import withRouter from '../Components/Common/withRouter';

//import Components
import Header from './Header';
import Footer from './Footer';
// import RightSidebar from '../Components/Common/RightSidebar';

//redux
import { useSelector, useDispatch } from "react-redux";


const Layout = (props) => {
    const [headerClass, setHeaderClass] = useState("");
    const dispatch = useDispatch();

    // class add remove in header
    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    });
    function scrollNavigation() {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            setHeaderClass("topbar-shadow");
        } else {
            setHeaderClass("");
        }
    }

    return (
        <React.Fragment>
            <div id="layout-wrapper">
                <Header headerClass={headerClass} />
                <div className="main-content">{props.children}
                    <Footer />
                </div>
            </div>
            {/* <RightSidebar /> */}
        </React.Fragment>

    );
};

Layout.propTypes = {
    children: PropTypes.object,
};

export default withRouter(Layout);