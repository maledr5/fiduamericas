import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { NavLink as Link } from 'react-router-dom';

import FondofitCta from '../components/FondofitCta.js'

import aprobacion from '../data/downloads/resoluciones_04.pdf'
import resoluciones_01 from '../data/downloads/resoluciones_01.pdf'

const FondoFit = () => {
	return (
		<div id="fondo-fit">
			<div className="container">
				<div className="brand-background">
					<div className="brand-fondo-fit"></div>
				</div>
				<div id="fondo-fit-banner">
					<div className="row">
						<h3 className="text-main col s12 l4 offset-l1">Características</h3>
					</div>
					<div id="caracteristicas" className="row">
						<div className="col s12 l4 offset-l1">
							<p className="second text-dark">Plazo mínimo <br/> en días
							<span className="hightlight text-main">90</span></p>
							<hr/>
							<p className="second text-dark">Retiros desde<br/> el día
							<span className="hightlight text-main">15</span></p>
							<hr/>
							<p className="second text-dark">Monto de <br/> apertura desde
							<span className="hightlight text-main">$50</span></p>
							<hr/>
						</div>
						<div className="col s12 l4 offset-l1">
							<p className="second text-dark">Incremento opcional <br/> desde
							<span className="hightlight text-main">$10</span></p>
							<hr/>
							<p className="second text-dark">Saldo mínimo <br/> de permanencia
							<span className="hightlight text-main">$1</span></p>
							<hr/>
							<p className="second text-dark">Política de Inversión: Títulos con
							 calificación de riesgo A- o superior</p>
							<hr/>
						</div>
					</div>
					<div className="row">
						<p className="third text-dark col s12 l12 offset-l1">
							<a className="inline-link">El Fondo Fit fue aprobado por
							 la Superintendencia de Compañías, Valores y Seguros.</a>
						</p>
					</div>
				</div>
				<div className="row fondo-fit-cta">
					<span className="col l4 m6 s10 offset-s2 offset-m4 offset-l4 border-box box-main">
						<Link to={"/contacto?product=fondofit"} className="main-link">Quiero Invertir</Link>
					</span>
				</div>

				<br/><br/>

				<div id="fondo-fit-descargas">
					<h3 className="text-main row">Documentos para descargar</h3>
					<div className="row ">
						<div className="col s10 m4 l4 link-row">
							<span className="pdf-icon"></span>
							<a href={resoluciones_01} className="pdf-link" target="_blank">Presentación</a>
						</div>
						<div className="col s10 m4 l4 link-row">
							<span className="pdf-icon"></span>
							<a href={resoluciones_01} className="pdf-link" target="_blank">Contrato de Incorporación</a>
						</div>
					</div>
					<div className="row ">
						<div className="col s10 m4 l4 link-row">
							<span className="pdf-icon"></span>
							<a href={resoluciones_01} className="pdf-link" target="_blank">Reglamento</a>
						</div>
						<div className="col s10 m4 l4 link-row">
							<span className="pdf-icon"></span>
							<a href={resoluciones_01} className="pdf-link" target="_blank">Portafolio</a>
						</div>
					</div>
				</div>

				<br/><br/>

				<div id="fondo-fit-apertura-cuenta">
					<h3 className="text-main row ">Apertura de Cuenta</h3>
					<p className="second text-dark row ">Para la apertura de du cuenta, necesita llenar los siguientes formularios.
					 Puede hacerlo en línea, o imprimiendo el formulario y llevándolo a nuestras oficinas.
						  Si tiene alguna duda, puede contactarse con nosotros llenando el
							<Link to={"/contacto?product=fondofit"} className="inline-link"> formulario de contacto.</Link></p>
					<div className="row">
						<div id="persona-natural" className="col s11 m6 l5">
							<p className="row second text-main">Persona Natural</p>
							<div className="row link-row">
								<span className="online-icon"></span>
								<a href="https://goo.gl/forms/2tpJM1VkgfugYnbz1" className="pdf-link" target="_blank">Llenar formulario en línea</a>
							</div>
							<div className="row link-row">
								<span className="xls-icon"></span>
								<a href={resoluciones_01} className="pdf-link" target="_blank">Descargar formulario para imprimir</a>
							</div>
						</div>
						<div id="persona-juridica" className="col s11 m6 l5">
							<p className="row second text-main">Persona Jurídica</p>
							<div className="row link-row">
								<span className="online-icon"></span>
								<a href="https://goo.gl/forms/LkwwrsDtrsj4KWJt2" className="pdf-link" target="_blank">Llenar formulario en línea</a>
							</div>
							<div className="row link-row">
								<span className="xls-icon"></span>
								<a href={resoluciones_01} className="pdf-link" target="_blank">Descargar formulario para imprimir</a>
							</div>
						</div>
					</div>
				</div>

				<br/><br/>
			</div>

			<div id="fondo-fit-notificaciones">
				<div className="container">
					<h3 className="text-dark text-center-align row">Notificaciones</h3>
					<p className="second text-dark text-center-align row ">Puede realizar sus notificaciones de
					 aportes a través de los siguientes enlaces:</p>
					<div className="row">
					<div className="col s10 offset-s1 m4 offset-m4 l4 offset-l4">
						<a href="https://goo.gl/forms/3hTyNTK8GLDbtlTO2" target="_blank" className="second-link block-display">Notificar aporte via web</a>
						<a href="https://goo.gl/forms/HEYenksPqoybwE8A2" target="_blank" className="second-link block-display">Solicitar rescate</a>
					</div>
					</div>
				</div>
			</div>

			<FondofitCta productCta="fondos" CurrentProduct="fideicomisos"/>
		</div>
	)
};

export default FondoFit