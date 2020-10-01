import React from "react";

import "./Input.css";

export const InputSelect = ({ title, data }) => {
	return (
		<div className="row__input-block">
			{/* <div> */}
			<div className="title__input">{title}</div>
			<select>
				{data.map((item) => (
					<option>{item}</option>
				))}
			</select>
			{/* </div> */}
		</div>
	);
};

export default InputSelect;
