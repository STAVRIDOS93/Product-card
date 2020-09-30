import React, { Component } from "react";
import { SimpleSlider, HeaderInfo, Breadcrumbs } from "./";

import "./App.css";

export class App extends Component {
	state = {
		data: {
			id: 29531,
			name: "SMART Hotel Mirabell",
			categoryStarsCount: 4,
			photoUrls: [
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=bfdecb3c-4e14-4400-83d9-4e426598fd1c",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=838f926a-4462-43db-bff9-644907d4a6d0",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=f8b06b60-2ef4-4191-a7e8-06965f0fd67c",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=fb3b134f-fe31-4775-a32f-4e3429ddded0",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=48ae855b-fa77-4098-8ec0-ab4bd7769933",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=72e4f745-bf54-4955-98ab-00c29a5fda51",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=2530cf53-3001-4926-8b69-2f244e5e08d7",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=e26a69f3-4654-4ad3-b7d6-1c5a04d6120c",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=c82a02b9-bb63-494d-b8dd-0e0530051ca8",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=d1ccb67a-02ad-40d2-9326-44c3f69c8811",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=86c86c40-3a5b-4156-9ee9-1bb2622342a9",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=d6f8c07d-32be-4cb4-87c1-f7bdcbfc624e",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=0d387d94-5f91-4dd3-bb51-42896886471f",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=6ce38560-2c06-46ad-ac47-c388cfdcdd47",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=be845e7d-52e2-49e8-a309-f6ebbdd630d7",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=a99fa204-3d24-4c5f-8cb2-c0533c97ae31",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=337f4e65-43ca-41f4-97bd-6474652df3de",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=4a361431-1b52-416d-8fa4-60310673aea0",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=9937a507-9c6b-4d2a-9f8b-4bfe7d5fbbb5",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=1116a13f-1cfe-4cb2-9a21-1ffaf96d2c32",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=96337c7e-b812-4383-a08e-a647748dc695",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=d2028a82-f72f-4b96-8cbc-5a4fa4eec69c",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=5dafc1db-531d-4e2a-b6b2-a71044c28281",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=fe559ea9-3bf9-43d9-a5e0-1493745b6d6d",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=f8d0ea29-ae1f-4b53-9246-57fa42d8e9f9",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=7d8f292b-c493-438a-b72f-dcc7121c5554",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=6ca120ad-0cf6-4abe-849f-da742bea8005",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=72db980b-473a-4199-bfa6-9c31e1a5d864",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=e3fa0b02-1baf-433b-9941-af935adafae4",
				"https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=0ac44bd8-a737-4a66-97ad-bc724fd50533",
			],
			shortDescription:
				"Стильный современный отель расположен в 7 км от центра города. Здесь можно заняться водным спортом, принять расслабляющие солнечные ванны на пляже, или взять в аренду автомобиль и отправиться на увлекательную прогулку по живописным окрестностям.",
			descriptionBlocks: [
				{
					typeId: 0,
					name: "Новинки этого сезона",
					text:
						'Отель работает по концепции <a href="/concepts/smart/" target="_blank"><strong><u>SMART</u></a></strong><strong>&nbsp;с 20.07.2020 г.</strong>, включая детский клуб <strong>Тукан.</strong><br />\n<br />\n&bull; новая инфраструктура: кафе-пекарня, пивной бар, a la carte ресторан на пляже, детский клуб Тукан, детский бассейн с горкой, сцена для вечерних шоу<br />\n&bull; реновация территории, зоны лобби, главного ресторана <br />\n&bull; реновация номеров в дизайне SMART и обновление кондиционеров',
				},
				{ typeId: 13097, name: "Время заезда/отъезда", text: "Время заселения &ndash; после 14:00, время сдачи номера &ndash; до 12:00." },
				{
					typeId: 4,
					name: "Расположение",
					text:
						"Отель расположен в 3,5 км от центра курортного района Конаклы, в 7 км от центра г. Аланья.<br />\nОбщая площадь территории отеля &ndash; 6400 кв.м.<br />\nГод постройки &ndash; 1996 г. Последняя реновация &ndash; 2020 г.",
				},
				{
					typeId: 40,
					name: "Размещение",
					text:
						"Отель состоит из одного 5-этажного здания.<br />\nВсего 172 номера.<br />\n<br />\n- 151 <strong>Standard </strong><br />\n<br />\n&bull; 24 кв.м, вид на территорию/море, макс. 3 чел.<br />\n&bull; однокомнатный, 2 односпальные кровати 100х200 см, доп. кровать 100х200 см<br />\n&bull; напольное покрытие &ndash; ламинат, балкон, ванная комната с душем<br />\n<br />\n- 16 <strong>Large Room </strong><br />\n<br />\n&bull; 30 кв.м, вид на море, макс. 4 чел.<br />\n&bull; однокомнатный, 3 односпальные кровати/1 двуспальная кровать 200х200 см + 1 односпальная кровать 100х200 см<br />\n&bull; напольное покрытие &ndash; ламинат, балкон, ванная комната с душем<br />\n<br />\n- 5 <strong>Connection Room </strong><br />\n<br />\n&bull; 40 кв.м., вид на территорию, макс. 4 чел.<br />\n&bull; 2 номера с межкомнатной дверью; 4 односпальные кровати 100х200 см<br />\n&bull; напольное покрытие &ndash; ламинат, балкон, 2 ванные комнаты с душем<br />\n<br />\nДля людей с ограниченными физическими возможностями: <strong>Standard </strong><br />\n",
				},
				{
					typeId: 39,
					name: "Пляж",
					text:
						"Собственный песчано-галечный, в 90 м от отеля, через подземный переход. Протяженность &ndash; 300 м. Есть пирс.<br />\nДля гостей: зонтики, шезлонги, матрасы, полотенца.",
				},
				{
					typeId: 6,
					name: "В номере",
					text:
						"<strong><em>В ванной комнате:</em></strong><br />\n<br />\n- тапочки для взрослых<br />\n- фен<br />\n- туалетно-косметические принадлежности<br />\n<br />\n<strong><em>Оснащение:</em></strong><br />\n<br />\n- индивидуальный кондиционер<br />\n- телевизор (есть российские, украинские каналы)<br />\n- телефон<br />\n- чайный набор (чайник, чайная посуда)<br />\n- сейф<br />\n- мини-бар<br />\n&nbsp;<br />\n<strong><em>Услуги:<br />\n</em></strong><br />\n- Wi-Fi<br />\n- уборка номера (6 раз в неделю)<br />\n- смена постельного белья (3 раза в неделю)<br />\n- смена полотенец (3 раза в неделю/ по запросу)<br />\n- чай, кофе (1 раз при заселении)<br />\n- пополнение мини-бара (вода &ndash; ежедневно)<br />\n- утюг, гладильная доска (по запросу)<br />\n&nbsp;",
				},
				{
					typeId: 11,
					name: "Территория",
					text:
						"- главный ресторан<br />\n- a la carte ресторан<br />\n- 3 бара<br />\n- снэк-бар<br />\n- кафе-пекарня Cupcake<br />\n- обмен валюты<br />\n- Wi-Fi<br />\n- парковка<br />\n- магазины<br />\n- амфитеатр<br />\n- конференц-зал<br />\n- 2 открытых бассейна<br />\n- 2 водные горки<br />\n- SPA &amp; Wellness<br />\n-&nbsp;ЭКО огород с пряными травами<strong>*</strong><br />\n<br />\n<strong>*Услуги будут предоставлены с сезона 2021 г.</strong>",
				},
				{
					typeId: 8,
					name: "Развлечения и спорт",
					text:
						"- тренажерный зал<strong>*</strong><br />\n- аэробика<br />\n- водное поло<br />\n- настольный теннис<br />\n- дартс<br />\n- бочче<br />\n- пляжный волейбол<br />\n- анимация на русском языке<br />\n- пенная вечеринка раз в неделю<strong>*</strong><br />\n- вечерние шоу и живая музыка<br />\n<br />\n<strong>*Услуги будут предоставлены с сезона 2021 г.</strong>",
				},
				{
					typeId: 15,
					name: "Для детей",
					text:
						'- детский клуб Тукан для детей 4-12 лет&nbsp;(подробнее о программе клуба&nbsp;<a href="/concepts/tui-toucan/" target="_blank"><u><strong>Тукан</strong>)</u><strong>&nbsp;</strong></a><br />\n- анимация на русском языке<br />\n- открытый бассейн (глубина 35 см)<br />\n- водная горка<br />\n- стулья в ресторане<br />\n- игровая площадка<br />\n- инвентарь: горшок, коляска, кроватка в номере',
				},
				{
					typeId: 5,
					name: "Питание",
					text:
						"Отель предлагает питание по системе&nbsp;<strong>&quot;</strong><strong>All </strong><strong>Inclusive&quot;:<br />\n</strong><br />\n- трехразовое питание, шведский стол<br />\n- поздний завтрак, шведский стол<br />\n- закуски и напитки в течение дня<br />\n- a la carte ресторан (турецкий, 1 раз за время пребывания по предварительной резервации)<br />\n- пекарня Cupcake с кофе сорта 100% Арабика, травяным чаем, свежей выпечкой<br />\n- пивной бар Enjoy с различными сортами пива местного производства и закусками<br />\n- мороженое (в определенные часы)<br />\n- местные алкогольные и безалкогольные напитки<br />\n- 1 бренд импортного виски<br />\n- попкорн перед вечерним шоу (5 раз в неделю)<br />\n- фирменный стритфуд &ndash; гирос<br />\n- блюда для веганов и аллергиков<br />\n- блюда славянской кухни<br />\n- смарт-уголок: микроволновка, стерилизатор, блендер, чайник (07:00-00:00)<br />\n<br />\n<em>*Актуальное расписание ресторанов и баров рекомендуем уточнять на месте</em><br />\n",
				},
				{
					typeId: 13007,
					name: "Платно",
					text:
						"- алкогольные и безалкогольные напитки, не входящие в концепцию<br />\n- услуги телефонной связи<br />\n- услуги доктора<br />\n- прачечная<br />\n- прокат автомобиля<br />\n- конференц-услуги<br />\n- SPA-процедуры<br />\n- турецкая баня<br />\n- парная<br />\n- сауна<br />\n- бильярд<strong>*</strong><br />\n- водные виды спорта на пляже<br />\n- прокат велосипедов<br />\n<br />\n<strong>*Услуги будут предоставлены с сезона 2021 г.</strong><br />\n&nbsp;",
				},
				{
					typeId: 13085,
					name: "Важная информация",
					text:
						'<strong>Сертификат Здоровья 2020 г.&nbsp;<strong><a href="http://agent.tui.ru/getmedia/8dc64417-0f3d-4fcd-8abd-4e7703898fe1/SM-CHM-S-T" target="_blank"><u>посмотреть</u></a></strong> </strong><br />\n&nbsp;<br />\n<strong>О концепции <a href="/concepts/smart/" target="_blank"><u>SMART</u></strong><br />\n<br />\n<img p="" src="//agent.tui.ru/getmedia/ac82b990-1441-45d5-836d-8047fa1782db/toucan-icon-20x27" style="float: left; margin-right: 5px;" /><strong>О детском клубе <a href="/concepts/tui-toucan/" target="_blank"><strong><u>Тукан</u>&nbsp;</strong></strong><br />\n</a> <u><br />\n<u>Есть вопросы по концепции? </u><br />\n</u>Пишите на почту<strong> <a href="mailto:diffproduct@tui.ru">diffproduct@tui.ru</strong></a> и вам оперативно ответят.<u> </u>\n\n<p></p>\n',
				},
				{
					typeId: 204,
					name: "Дополнительная информация",
					text: "Размещение с животными &ndash; нет.<br />\nБанковские карты: Visa, Mastercard, AmEx.<br />\nАренда инвалидного кресла (по запросу).",
				},
			],
			services: [],
			recommendations: [
				{ name: "Эксклюзивный", spriteOffset: 996, id: 38, order: 2 },
				{ name: "Открытый бассейн", spriteOffset: 1275, id: 68, order: 36 },
				{ name: "Клуб Тукан", spriteOffset: 1538, id: 341, order: 1 },
				{ name: "Бесплатный Wi-Fi", spriteOffset: 2815, id: 357, order: 3 },
				{ name: "All Inclusive", spriteOffset: 84, id: 368, order: 5 },
				{ name: "SMART", spriteOffset: 4004, id: 719, order: 0 },
				{ name: "Verified Safe Tourism", spriteOffset: 4239, id: 738, order: 0 },
			],
			geoUrl: "/Tours/Europe/Turkey/Alanya/Konakli/SMART-Club-Hotel-Mirabell",
			urlFriendlyName: "Europe-Turkey-Alanya-Konakli-SMART__Club__Hotel__Mirabell",
			geoPath: "Турция >> Аланья >> Конаклы",
			tuiRating: { rating: 999.0 },
			tripAdvisorInfo: { rating: 3.0, ratingImageUrl: "//www.tripadvisor.ru/img/cdsi/img2/ratings/traveler/3.0-15955-4.png" },
			geoCoordinates: { longitude: 31.91625, latitude: 36.566945 },
			country: { id: 18803, name: "Турция", englishName: "Turkey", urlFriendlyName: "Turkey" },
			resort: { id: 296786, name: "Аланья", englishName: "Alanya", urlFriendlyName: "Alanya" },
			city: { id: 297572, name: "Конаклы", englishName: "Konakli", urlFriendlyName: "Konakli" },
			detailInfo: [
				{
					name: "Даты",
					value: "12 июн - 15 июн, 7 ночей ",
				},
				{
					name: "Туристы",
					value: "Все включено",
				},
				{
					name: "Тип номера",
					value: "Люкс двухкомнатный",
				},
				{
					name: "Итого",
					value: "<span className='old__price'>102 500 ₽</span> <span className='new__price'>112 419 ₽</span>",
				},
			],
			price: {
				name: "Итого",
				oldPrice: 102500,
				newPrice: 112419,
				currency: "₽",
			},
		},
	};

	render() {
		let { data } = this.state;
		return (
			<div className="row__product">
				<Breadcrumbs country={data.country} resort={data.resort} city={data.city} />
				<header className="header__info">
					<SimpleSlider photos={data.photoUrls} />
					<HeaderInfo data={data} />
				</header>
			</div>
		);
	}
}

export default App;
