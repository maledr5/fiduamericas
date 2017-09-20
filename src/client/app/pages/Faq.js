import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


import FaqQuestion from '../components/FaqQuestion.js'

import q003 from '../images/faq/q003.png'


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

				<FaqQuestion
					question="¿Qué es un fondo de inversión?"
					answer={
						<div>
							<p>Los fondos de inversión, se clasifican en:</p>
							<ul>
								<li><strong>Fondos administrados:</strong> son aquellos que admiten la incorporación, en cualquier momento de aportantes, así como el retiro de uno o varios, por lo que el monto del patrimonio y el valor de sus respectivas unidades es variable. En este caso, la administradora actuará por cuenta y riesgo de sus aportantes o partícipes.</li>
								<li><strong>Fondos colectivos:</strong> son aquellos que tienen como finalidad invertir en valores de proyectos productivos específicos. Estos fondos y su administrador se someterán a las normas del fideicomiso mercantil. Las cuotas de estos fondos deberán someterse a calificación de riesgo y serán libremente negociables.</li>
								<li><strong>Fondos cotizados:</strong> Son aquellos fondos que no podrán invertir en proyectos, sino exclusivamente en valores admitidos a cotización bursátil. Estos fondos podrán replicar la misma composición de un índice bursátil. La Junta de Política y Regulación Monetaria y Financiera establecerá las normas para la constitución de los fondos cotizados y la negociación y registro de sus cuotas, que constituyen valores negociables en el mercado de valores.</li>
							</ul>
						</div>
					}
				/>

				<FaqQuestion
					question="¿Cuales son los beneficios de invertir en un fondo de inversión?"
					answer={
						<div>
							<ul>
								<li><strong>Administración profesional:</strong> Un inversionista común se enfrenta al desconocimiento de las técnicas que ayudan a optimizar el manejo de un portafolio de inversión y que ayudan a realizar una correcta administración de riesgos. </li>
								<li><strong>Rendimiento:</strong> Los fondos de inversión son más rentables que la mayoría de instrumentos financieros en el mercado.</li>
								<li><strong>Diversificación:</strong> El riesgo sistemático es el que podríamos llamar el riesgo inherente a un mercado. Por el contrario, el riesgo no sistemático es el riesgo particular de cada emisora. El riesgo no sistemático se dice que es diversificable, porque se puede reducir o controlar con una diversificación adecuada.</li>
								<li><strong>Liquidez:</strong> Los fondos de inversión ofrecen diferentes plazos de liquidación desde el momento en que el inversionista solicita la venta de los mismos hasta que recibe el dinero. </li>
								<li><strong>Economía de escala:</strong> Los costos involucrados en el manejo de un fondo de inversión se reparten entre todos los accionistas del mismo, lo cual hace accesible a los pequeños inversionistas el manejo profesional de sus inversiones.</li>
								<li><strong>Reinversión:</strong> Fiduamericas reinvierte el dinero recibido por cobro de interés, amortizaciones y dividendos, lo que permite que capitalicen continuamente los recursos del fondo. El inversionista no se tiene que preocupar de renovar su inversión al invertir en un fondo de inversión.</li>
								<li><strong>Montos de inversión:</strong> En el mercado existe una gran cantidad de fondos de inversión en los que se puede participar mediante montos bajos, obteniendo los beneficios que ofrecen estos instrumentos de inversión.</li>
								<li><strong>Regulación y supervisión:</strong> Los fondos de inversión, así como los prestadores de servicios correspondientes, están sujetos a la legislación ecuatoriana como la Ley de Mercado de Valores, regulaciones que tienen como objetivo proteger los intereses del público inversionista mediante la supervisión y vigilancia de la Superintendencia de Compañias, Seguros y Valores.</li>
							</ul>
						</div>
					}
				/>
			</div>
		</div>		
	);
};

export default Faq