import React, { Component } from "react";
import Slider from "react-slick";

import "./Recomendation.css";

const SampleNextArrow = (props) =>{
    const { onClick } = props;
    return (
        <div
            className={'next__custom-arr circle'}
            onClick={onClick}
        />
    );
}
const SamplePrevArrow = (props) =>{
    const { onClick } = props;
    return (
        <div
            className={'prev__custom-arr circle'}
            onClick={onClick}
        />
    );
}

export class Recomendation extends Component {
    render() {
        const { cards } = this.props;
        const setting = {
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
            speed: 500,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };
        return (
            <div className="container-multislider">
                <div className="multislider-line">
                    <div className="multislider__title">
                        <h3>Вам могут понравиться эти отели</h3>
                    </div>
                </div>
                <div className="multislider-line">
                    <div className="multislider">
                        <div className="multislider__wrap">
                            <Slider {...setting}>
                                {cards.map((hotel, index) => (
                                    <div className="sliders__slide">
                                        <div key={index} className="multi__slide" onClick={() => window.open(`${hotel.link}`)}>
                                            <div className="slide__box-img" style={{ backgroundImage: `url(${hotel.img})` }}>
                                            </div>
                                            <div className="slide__box-container">
                                                <div className="slide__box-wrap">
                                                    <div className="slide__title">
                                                        { hotel.hotel }
                                                    </div>
                                                    <div className="slide__sub-title">
                                                        { hotel.region }
                                                    </div>
                                                </div>
                                                <div className="slide__body">
                                                    { hotel.acomodation }
                                                </div>
                                                <div className="slide__btn">
                                                    <a href={ `${ hotel.link }` } target="_blank" rel='noopener noreferrer'>от <span>{ hotel.price }</span> { hotel.currency }</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recomendation;