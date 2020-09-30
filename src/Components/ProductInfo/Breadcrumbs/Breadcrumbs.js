import React from "react";

import "./Breadcrumbs.css";

export const Breadcrumbs = ({ city, resort, country }) => {
	return (
		<div className="breadcrumbs">
			<a className="breadcrumbs__item" href={country.urlFriendlyName}>
				<span className="item__txt">{country.name}</span>
			</a>
			<a className="breadcrumbs__item" href={resort.urlFriendlyName}>
				<span className="item__txt">{resort.name}</span>
			</a>
			<a className="breadcrumbs__item" href={city.urlFriendlyName}>
				<span className="item__txt">{city.name}</span>
			</a>
		</div>
	);
};
