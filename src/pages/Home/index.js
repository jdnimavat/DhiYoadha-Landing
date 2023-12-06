import React from "react";
import TopBanner from "./sections/TopBanner";
import ItemMenu from "./sections/ItemMenu";
import ThreeBlocks from "./sections/ThreeBlocks";

const Home = () => {

    document.title = 'Dashboard ' + process.env.REACT_APP_PAGE_TITLE_POSTFIX;

    return (
		<React.Fragment>
			<div className="page-content">
				<TopBanner />
				<ItemMenu />
				<ThreeBlocks />
				<div className="p-5"></div>
			</div>
		</React.Fragment>
	);

};

export default Home;
