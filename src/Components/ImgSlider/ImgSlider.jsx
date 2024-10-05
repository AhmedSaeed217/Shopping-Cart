import React from "react";
import "./ImgSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
function ImgSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: true,
  };

  return (
    <div className="slider">
      {/* <div className="container"> */}
      <Slider {...settings}>
        <div>
          <img className="slider-img" src={slider1} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slider2} alt="" />
        </div>
      </Slider>
      {/* </div> */}
    </div>
  );
}

export default ImgSlider;
