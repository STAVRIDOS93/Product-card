import React from "react";

import "./ButtonYellow.css";

export const ButtonYellow = ({ width, height, txt }) => {
	console.log(txt);
	return (
		<a href="/" className="buttonYellow" style={{ width: width, height: height }}>
			{txt}
		</a>
	);
};

export default ButtonYellow;
