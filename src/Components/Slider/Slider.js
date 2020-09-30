import React, { Component } from "react";
import Slider from "react-slick";

import "./slider.css";
export class SimpleSlider extends Component {
	state = {
		nav1: null,
		nav2: null,
	};
	componentDidMount() {
		this.setState({
			nav1: this.slider1,
			nav2: this.slider2,
		});
	}
	render() {
		const { photos } = this.props;
		return (
			<div className="row__slider">
				<link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

				<Slider className="slider1" asNavFor={this.state.nav2} ref={(slider) => (this.slider1 = slider)}>
					{photos.map((photo, index) => (
						<div key={index}>
							<div className="slider__img" style={{ background: `url(${photo})` }}></div>
						</div>
					))}
				</Slider>

				<Slider
					className="slider2"
					asNavFor={this.state.nav1}
					ref={(slider) => (this.slider2 = slider)}
					slidesToShow={6}
					swipeToSlide={true}
					focusOnSelect={true}
				>
					{photos.map((photo, index) => (
						<div key={index}>
							<div className="slider__img" style={{ background: `url(${photo})` }}></div>
						</div>
					))}
				</Slider>
			</div>
		);
	}
}

export default SimpleSlider;
