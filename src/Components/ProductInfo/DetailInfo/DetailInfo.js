import React from "react";

import "./DetailInfo.css";

export const DetailInfo = ({ data, price }) => {
	return (
		<div className="row__deatailInfo">
			{data.map((item) => (
				<>
					<div className="detailInfo__name">{item.name}</div>
					<div className="detailInfo__value" dangerouslySetInnerHTML={{ __html: item.value }}></div>
				</>
			))}
			<div className="price__name">{price.name}</div>
			<div className="price__value">
				<div className="old__price">
					{price.oldPrice} {price.currency}
				</div>
				<div className="new__price">
					{price.newPrice} {price.currency}
				</div>
			</div>
		</div>
	);
};

export default DetailInfo;
