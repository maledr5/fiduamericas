import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

class HomeCarousel extends React.Component {
  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:4000
    };
    return (
      <Slider {...settings}>
      
      	<div id="nos-banner">
    			<div className="full-screen banner-height banner-home banner-a">
    				<div className="text-sec container">
    					<h2>El mayor rendimiento <br/> del mercado</h2>
    					<p className="main">Descubre nuestros fondos de inversión</p>
    				</div>
    			</div>
    		</div>
    		<div id="nos-banner">
    			<div className="full-screen banner-height banner-home banner-c">
    				<div className="text-sec container">
    					<h2>La mejor administración <br/>fiduciaria del mercado</h2>
    					<p className="main">Contáctanos y te asesoramos <br/>sobre las mejores opciones</p>
    				</div>
    			</div>
        </div>
        

      </Slider>
    );
  }
}

export default HomeCarousel
