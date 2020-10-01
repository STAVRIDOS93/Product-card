import React, { Component } from "react";
import Hotels from "../Hotels/Hotels";
import InputDate from "../Inputs/InputDate";
import InputSelect from "../Inputs/InputSelect";

import "./Tabs.css";

export class Tabs extends Component {
	state = {
		activeTab: 0,
	};

	newTab = ({ currentTarget }) => {
		let aciveButton = currentTarget.dataset.button;
		this.setState({
			...this.state,
			activeTab: Number(aciveButton),
		});
	};

	render() {
		let { tabs } = this.props;
		let { activeTab } = this.state;
		let hotels = [
			{
				dateStart: "12.06",
				dateFinish: "15.06",
				days: 7,
				peaples: 5,
				add: "ALL",
				standart: "TWIN",
			},
			{
				dateStart: "13.03",
				dateFinish: "15.06",
				days: 7,
				peaples: 5,
				add: "ALL",
				standart: "TWIN",
			},

			{
				dateStart: "13.03",
				dateFinish: "15.06",
				days: 7,
				peaples: 5,
				add: "ALL",
				standart: "TWIN",
			},

			{
				dateStart: "13.03",
				dateFinish: "15.06",
				days: 7,
				peaples: 5,
				add: "ALL",
				standart: "TWIN",
			},
			{
				dateStart: "13.03",
				dateFinish: "15.06",
				days: 7,
				peaples: 5,
				add: "ALL",
				standart: "TWIN",
			},

			{
				dateStart: "13.03",
				dateFinish: "15.06",
				days: 7,
				peaples: 5,
				add: "ALL",
				standart: "TWIN",
			},

			{
				dateStart: "13.03",
				dateFinish: "15.06",
				days: 7,
				peaples: 5,
				add: "ALL",
				standart: "TWIN",
			},
		];
		return (
			<div className="row__tabs">
				<div className="tabs__buttons">
					{tabs.map((item, index) => (
						<div
							onClick={(e) => {
								this.newTab(e);
							}}
							data-button={index}
							key={index}
							className={index === activeTab ? "tabs__button active__tab" : "tabs__button"}
						>
							{item}
						</div>
					))}
				</div>

				<div className="row__inputs">
					<InputDate />
					<InputSelect title="Количество ночей" data={[10, 15, 7, 3]} />
					<InputSelect title="Тип питания" data={["Любое питание", "Любое питание", "Любое питание", "Любое питание"]} />
					<InputSelect title="Туристы" data={[2, 5, 10, 15]} />
				</div>
				<div className="title__result">
					<div className="result__title">Найдено 16 вариантов</div>
					<div className="result__icons"></div>
				</div>
				<Hotels hotels={hotels} />
			</div>
		);
	}
}

export default Tabs;
