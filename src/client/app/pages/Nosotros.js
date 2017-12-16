import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import confianza from '../images/confianza.svg'
import compromiso from '../images/compromiso.svg'
import eficiencia from '../images/eficiencia.svg'


const Nosotros = () => {
	return (
		<div>
			<div id="nos-banner">
				<div className="full-screen banner-height banner-second parallax">
					<p className="banner-text text-light">
						<span className="font-second"> Fiduciaria de las Américas </span>
						<span className="font-main"> es una administradora de fondos y fideicomisos, conformada por un grupo de profesionales multidisciplinarios con amplia experiencia en materia fiduciaria, financiera y legal.</span>
					</p>
				</div>
				<div className="container">
					<div className="row">
				  		<div className="col l6 offset-l4 m8 offset-m2">
							<div className="border-box box-dark">
								<div className="light-grey copy-box">
									¡fiduamericas le brinda seguridad, control y confidencialidad <br/>en el manejo de su patrimonio!
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="nos-values">
				<div className="container center-text">
					<div className="row">
						<h5 className="col s12">Nuestros Valores</h5>
					</div>
					<div className="row">
						<div className="col l4 value">
							<img src={confianza} width="150" height="150" alt="confianza" />
							<h3>Confianza</h3>
							<p>La confianza que depositan nuestros clientes en nosotros es fundamental por lo que les ofrecemos la mayor seguridad y discreción.</p>
						</div>
						<div className="col l4 value">
							<img src={compromiso} width="150" height="150" alt="compromiso" />
							<h3>Compromiso</h3>
							<p>Trabajamos con la visión de establecer vínculos duraderos con nuestros clientes. Realizamos de forma seria y ética todas nuestras actividades.</p>
						</div>
						<div className="col l4 value">
							<img src={eficiencia} width="150" height="150" alt="eficiencia" />
							<h3>Eficiencia</h3>
							<p>Gestionamos con rapidez los requerimientos de nuestros clientes. Nos preocupamos por conocerlos, así como de sus necesidades.</p>
						</div>

					</div>
				</div>
			</div>
			<div id="nos-phrases">
				<div className="full-screen banner-height banner-lider-bg parallax">
					<div className="border-box box-light text-dark">
						<div className="nos-quote">
							<div className="quote-main quote-icon"></div>
							<p className="main"> Inviertimos de manera segura y rentable con una visión a largo plazo para maximizar los recursos de nuestros clientes. </p>
							<p className="second text-main">Juan Francisco Andrade<br/>Gerente General Fiduaméricas</p>
						</div>
					</div>
					<div className="banner-lider"></div>
				</div>
			</div>
			<div id="opciones-cta" className="container center-text">
				<div className="row">
					<h5 className="col s12">DESCUBRE NUESTROS PRODUCTOS Y SERVICIOS</h5>
				</div>
				<div className="row">
					<span className="col l3 m4 s8 offset-l2 offset-m1 offset-s2 border-box box-dark">
						<Link to="/fideicomisos" className="main-link">Negocios Fiduciarios</Link>
					</span>
					<span className="col l3 m4 s8 offset-l2 offset-m2 offset-s2 border-box box-dark">
						<Link to="/fondos" className="main-link">Fondos de Inversión</Link>
					</span>
				</div>
			</div>
		</div>
	)
};

export default Nosotros