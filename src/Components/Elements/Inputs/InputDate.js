import React from "react";

import "./Input.css";

export const InputDate = () => {
	return (
		<div className="row__input-block">
			<div className="title__input">Дата вылета</div>
			<input type="date" />
		</div>
	);
};

export default InputDate;
