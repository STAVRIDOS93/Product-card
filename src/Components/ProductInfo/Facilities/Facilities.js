import React, { Component } from "react";

import "./facilities.css";

export class Facilities extends Component {
	state = {
		view: 2,
		data: this.props.list,
		newData: this.props.list.filter((item, index) => (index < 3 ? item : false)),
	};

	allFacilities = () => {
		let newCount = this.props.list.length;
		this.setState({
			...this.state,
			view: newCount,
			newData: this.props.list.filter((item, index) => (index < newCount ? item : false)),
		});
	};

	render() {
		let { newData, view } = this.state;

		return (
			<>
				{newData.map(({ name, id, spriteOffset }) => (
					<div key={id} className="product__facilities">
						<div className="icon__facilities" style={{ backgroundPosition: `45px  ${spriteOffset}px` }}></div>
						{name}
					</div>
				))}

				{this.props.list.length > view && (
					<div className="all__facilities" onClick={this.allFacilities}>
						Все услуги и удобства
					</div>
				)}
			</>
		);
	}
}

export default Facilities;
