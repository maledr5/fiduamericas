import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import que_es_un_fondo_de_inversion from '../data/faq/que_es_un_fondo_de_inversion.js'
import cuales_son_los_beneficios_de_invertir_en_un_fondo_de_inversion from '../data/faq/cuales_son_los_beneficios_de_invertir_en_un_fondo_de_inversion.js'
import cuales_son_los_diferentes_tipos_de_fondos_de_inversion from '../data/faq/cuales_son_los_diferentes_tipos_de_fondos_de_inversion.js'
import cuales_son_inversiones_comparables from '../data/faq/cuales_son_inversiones_comparables.js'
import como_puedo_invertir from '../data/faq/como_puedo_invertir.js'

import que_significa_fideicomiso from '../data/faq/que_significa_fideicomiso.js'
import que_significa_negocio_fiduciario from '../data/faq/que_significa_negocio_fiduciario.js'
import quien_interviene_en_un_negocio_fiduciario from '../data/faq/quien_interviene_en_un_negocio_fiduciario.js'
import que_tipos_de_negocios_fiduciarios_existen from '../data/faq/que_tipos_de_negocios_fiduciarios_existen.js'
import quienes_pueden_ser_parte_de_un_negocio_fiduciario from '../data/faq/quienes_pueden_ser_parte_de_un_negocio_fiduciario.js'
import cuales_son_los_beneficios_de_constituir_un_fideicomiso from '../data/faq/cuales_son_los_beneficios_de_constituir_un_fideicomiso.js'

import cuales_son_las_funciones_de_fiduamericas from '../data/faq/cuales_son_las_funciones_de_fiduamericas.js'


const Faq = () => {
	return (
		<div id="faq" className="container">
			<div className="page-header text-main">
				<div className="row">
					<h1 className="col offset-s1">FAQ</h1>
					<div className="col offset-s1 header-division header-division-no-margin"></div>
					<h3 className="col offset-s1">Preguntas Frecuentes</h3>
				</div>
			</div>

			<div id="faq-cta" className="container">
				<div className="row">
					<span className="col s8 m4 offset-s2 border-box box-main">
						<Link to="/faq#faq-fondos" className="main-link">Preguntas Fondos de Inversión</Link>
					</span>
					<span className="col s8 m4 offset-s2 offset-l1 offset-m1 border-box box-main">
						<Link to="/faq#faq-fiduciarios" className="main-link">Preguntas Negocios Fiduciarios</Link>
					</span>
				</div>
			</div>

			<div className="row">

				<h2 id="faq-fondos" className="col offset-l1 text-dark"> Fondos de Inversión </h2>

				<div className="col offset-l1 l10">
					<span id="que_es_un_fondo_de_inversion">{ que_es_un_fondo_de_inversion }</span>
					<span id="cuales_son_los_beneficios_de_invertir_en_un_fondo_de_inversion">{ cuales_son_los_beneficios_de_invertir_en_un_fondo_de_inversion }</span>
					<span id="cuales_son_los_diferentes_tipos_de_fondos_de_inversion">{ cuales_son_los_diferentes_tipos_de_fondos_de_inversion }</span>
					<span id="cuales_son_inversiones_comparables">{ cuales_son_inversiones_comparables }</span>
					<span id="como_puedo_invertir">{ como_puedo_invertir }</span>
				</div>

				<h2 id="faq-fiduciarios" className="col offset-l1 text-dark"> Fideicomisos </h2>

				<div className="col offset-l1 l10">
					<span id="que_significa_fideicomiso">{ que_significa_fideicomiso }</span>
					<span id="que_significa_negocio_fiduciario">{ que_significa_negocio_fiduciario }</span>
					<span id="quien_interviene_en_un_negocio_fiduciario">{ quien_interviene_en_un_negocio_fiduciario }</span>
					<span id="quienes_pueden_ser_parte_de_un_negocio_fiduciario">{ quienes_pueden_ser_parte_de_un_negocio_fiduciario }</span>
					<span id="cuales_son_las_funciones_de_fiduamericas">{ cuales_son_las_funciones_de_fiduamericas }</span>
					<span id="cuales_son_los_beneficios_de_constituir_un_fideicomiso">{ cuales_son_los_beneficios_de_constituir_un_fideicomiso }</span>
					<span id="que_tipos_de_negocios_fiduciarios_existen">{ que_tipos_de_negocios_fiduciarios_existen }</span>
				</div>

			</div>
		</div>
	);
};

export default Faq