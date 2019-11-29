import React from 'react'
import Slider from 'infinite-react-carousel'
import imgOne from '../images/preview/preview-01.jpg'
import imgTwo from '../images/preview/preview-02.jpg'
import imgThree from '../images/preview/preview-03.jpg'
import imgFour from '../images/preview/preview-04.jpg'

class PreviewSlider extends React.Component {
    render() {
        const settings = {
            adaptiveHeight: false,
            arrows: false,
            centerMode: true,
            dots: true,
            initialSlide: 2,
            shift: 20
        }
        return (
            <Slider {...settings}>
                <img className="preview__image" src={imgOne} />
                <img className="preview__image" src={imgTwo} />
                <img className="preview__image" src={imgThree} />
                <img className="preview__image" src={imgFour} />
            </Slider>
        )
    }
}

export default PreviewSlider