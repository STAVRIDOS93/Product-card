import React from "react";

import Facilities from "./Facilities/Facilities";
import DetaiInfo from "./DetailInfo/DetailInfo";
import { ButtonYellow, Tabs, InputDate, InputSelect } from "../Elements";

import "./ProductInfo.css";

export const HeaderInfo = ({ data }) => {
	let tabs = [];
	return (
		<>
			<div className="product__informations">
				<div className="product__info-right">
					<div className="product__title">{data.name}</div>
					<div className="product__description-title">Главные удобства отеля</div>
					<Facilities list={data.recommendations}></Facilities>
				</div>
				<div className="product__description-title title__new">Бронирование проживания</div>
				<DetaiInfo data={data.detailInfo} price={data.price} />
				<ButtonYellow txt="Забронировать отель" />
				<a href="/" className="all__facilities">
					Подобрать еще варианты
				</a>
				<a href="/" className="all__facilities">
					Подобрать авиабилеты
				</a>
			</div>

			<div>
				<Tabs tabs={["проживание", "туры", "описание", "характеристики", "номера", "отзывы", "на карте", "акции"]} />
			</div>
		</>
	);
};
