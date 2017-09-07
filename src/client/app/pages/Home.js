import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

import Carousel from '../components/HomeCarousel.js'

import fondos from '../images/home_fondos.jpg'
import fideicomisos from '../images/home_fideicomisos_2.jpg'


const Home = () => {
	return (
		<div>

			<div id="home-banner"><Carousel /></div>

			<div id="home-cta" className="container">
				<div className="row">
					<span className="col s8 m4 offset-s2 border-box box-main">
						<Link to="#home-fondos" className="main-link">Negocios Fiduciarios</Link>
					</span>
					<span className="col s8 m4 offset-s2 offset-l1 offset-m1 border-box box-main">
						<Link to="#home-fideicomisos" className="main-link">Fondos de Inversión</Link>
					</span>
				</div>
			</div>

			<div id="home-fondos">
				<div className="l5 text-main right">
					<h2>Pequeños ahorros hacia grandes sueños.</h2>
					<p className="normal text-dark">El <strong>fondo de inversión</strong> es un patrimonio común <br/> cuyo objetivo es generar rendimientos.</p>
                	<Link to="/fondos#header" className="second-link">¿Cómo funciona un fondo de inversión?</Link>
				</div>
				<img src={fondos} />
			</div>
			
			<div id="home-info-fondos" className="container">
				<div className="row">
					<div id="quote" className="col l6 offset-l3">
						<div className="quote-dark quote-icon"></div>
						<div className="quote-phrase">
							<p className="second text-dark">Me encanta como con un fondo de inversión incrementa mi rendimiento comparado con una cuenta de ahorros en un banco.</p>
							<h3 className="text-dark">Francisco S. Lasso</h3>
						</div>
					</div>
				</div>
			</div>

			<div id="home-fideicomisos">
				<div className="l5 text-main left">
					<h2>Bienes administrados con seguridad y eficiencia.</h2>
					<p className="normal text-dark">El <strong>fideicomiso</strong> es un contrato con un objetivo determinado, vinculado a un patrimonio.</p>
					<Link to="/fideicomisos#header" className="second-link">¿Cómo funciona un fideicomiso?</Link>
				</div>
				<img src={fideicomisos} />
			</div>
			
			<div id="home-info-fideicomisos" className="container">
				<div className="row">
					<div id="quote" className="col l6 offset-l3">
						<div className="quote-dark quote-icon"></div>
						<div className="quote-phrase">
							<p className="second text-dark">El fideicomiso me ayudó a asegurar un patrimonio para el futuro de mis nietos. Estoy muy satisfecha.</p>
							<h3 className="text-dark">Cecilia Ruiz</h3>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
};

export default Home
