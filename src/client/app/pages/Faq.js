import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import que_es_un_fondo_de_inversion from '../data/faq/que_es_un_fondo_de_inversion.js'
import cuales_son_los_beneficios_de_invertir_en_un_fondo_de_inversión from '../data/faq/cuales_son_los_beneficios_de_invertir_en_un_fondo_de_inversión.js'


const Faq = () => {
	return (
		<div id="faq" className="container">
			<div className="page-header text-main">
				<div className="row">
					<h1 className="col offset-s1">FAQ Preguntas Frecuentes</h1>
					<div className="col offset-s1 header-division header-division-no-margin"></div>
					<h3 className="col offset-s1">Preguntas Frecuentes</h3>
				</div>
			</div>

			<div id="faq-cta" className="container">
				<div className="row">
					<span className="col s8 m4 offset-s2 border-box box-main">
						<Link to="/faq#header" className="main-link">Preguntas Fondos de Inversión</Link>
					</span>
					<span className="col s8 m4 offset-s2 offset-l1 offset-m1 border-box box-main">
						<Link to="/faq#header" className="main-link">Preguntas Negocios Fiduciarios</Link>
					</span>
				</div>
			</div>

			<div className="row">

				{ que_es_un_fondo_de_inversion }
				{ cuales_son_los_beneficios_de_invertir_en_un_fondo_de_inversión }

			</div>
		</div>
	);
};

export default Faq