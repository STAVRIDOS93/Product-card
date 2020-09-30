import React from "react";

import "./Tabs.css";

export const Tabs = ({ data }) => {
	let newTab = () => {
		console.log("aaaa");
	};
	return (
		<div className="row__tabs">
			<div className="tabs__buttons">
				{data.map((item, index) => (
					<div onClick={newTab} data-key={index} key={index} className={index == 0 ? "tabs__button active__tab" : "tabs__button"}>
						{item}
					</div>
				))}
			</div>
			<div className="tabs__data"></div>
		</div>
	);
};

export default Tabs;
