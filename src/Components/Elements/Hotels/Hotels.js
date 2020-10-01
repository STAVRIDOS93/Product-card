import React, { Component } from "react";
import ButtonYellow from "../ButtonYellow/ButtonYellow";

import "./Hotel.css";

export class Hotels extends Component {
	state = {
		hotelsCounter: 2,
		stepHotels: 2,
	};

	addHotels = () => {
		this.setState({
			...this.state,
			hotelsCounter: this.state.hotelsCounter + this.state.stepHotels,
		});
	};
	render() {
		let { hotels } = this.props;
		let { hotelsCounter, stepHotels } = this.state;
		return (
			<>
				<div className="row__hotels">
					{hotels.map((data, index) => {
						return (
							hotelsCounter > index && (
								<div className="line__hotel">
									<div className="hotel__info-row">
										<div className="hotel__info">
											<div>
												<p>
													<span className="txt__black">{data.dateStart}</span> вылет
												</p>
												<p>
													<span className="txt__black">{data.dateFinish}</span> прилет обратно
												</p>
											</div>
											<div>
												<p>
													<span className="txt__black">{data.days}</span> ночей
												</p>
											</div>
											<div>
												<p>
													<span className="txt__black">{data.add}</span>
												</p>
												<p>Все включено</p>
											</div>
											<div>
												<p>
													<span className="txt__black">{data.peaples}</span> туристов
												</p>
											</div>
											<div>
												<p>Стандарт {data.standart}</p>
											</div>
										</div>
									</div>
									<div className="hotel__reserv-row">
										<div>
											<div className="hotel__reserv-price">
												<div className="old__price">112 419 ₽ </div>
												<div className="new__price">112 419 ₽ </div>
												<div className="peoples__price">на двоих</div>
											</div>
											<ButtonYellow width={175} height={40} txt="Забронировать" />
										</div>
									</div>
								</div>
							)
						);
					})}
				</div>
				{hotelsCounter < hotels.length && (
					<div onClick={this.addHotels} className="hotels__add">
						Показать еще
					</div>
				)}
			</>
		);
	}
}

export default Hotels;
