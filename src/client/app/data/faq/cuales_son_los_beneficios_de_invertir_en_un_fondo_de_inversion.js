import React from 'react';

import FaqQuestion from '../../components/FaqQuestion.js'

import administracionProfesional from '../../images/faq/administracionProfesional.svg';
import rendimiento from '../../images/faq/rendimiento.svg';
import diversificacion from '../../images/faq/diversificacion.svg';
import liquidez from '../../images/faq/liquidez.svg';
import economiaEscala from '../../images/faq/economiaEscala.svg';
import reinversion from '../../images/faq/reinversion.svg';
import regulacion from '../../images/faq/regulacion.svg';
import montos from '../../images/faq/paso4.svg';


const question = "¿Cuáles son los beneficios de invertir en un fondo de inversión?";

const answer =
<div>
	<ul>
		<li className="faq-icon-item">
			<img className="faq-icon" src={administracionProfesional} />
			<p><strong>Administración profesional:</strong> Un inversionista común se enfrenta al desconocimiento de las técnicas que ayudan a optimizar el manejo de un portafolio de inversión y que ayudan a realizar una correcta administración de riesgos. </p>
		</li>
		<li className="faq-icon-item">
			<img className="faq-icon" src={rendimiento} />
			<p><strong>Rendimiento:</strong> Los fondos de inversión son más rentables que la mayoría de instrumentos financieros en el mercado.</p>
		</li>
		<li className="faq-icon-item">
			<img className="faq-icon" src={diversificacion} />
			<p><strong>Diversificación:</strong> El riesgo sistemático es el que podríamos llamar el riesgo inherente a un mercado. Por el contrario, el riesgo no sistemático es el riesgo particular de cada emisora. El riesgo no sistemático se dice que es diversificable, porque se puede reducir o controlar con una diversificación adecuada.</p>
		</li>
		<li className="faq-icon-item">
			<img className="faq-icon" src={liquidez} />
			<p><strong>Liquidez:</strong> Los fondos de inversión ofrecen diferentes plazos de liquidación desde el momento en que el inversionista solicita la venta de los mismos hasta que recibe el dinero. </p>
		</li>
		<li className="faq-icon-item">
			<img className="faq-icon" src={economiaEscala} />
			<p><strong>Economía de escala:</strong> Los costos involucrados en el manejo de un fondo de inversión se reparten entre todos los accionistas del mismo, lo cual hace accesible a los pequeños inversionistas el manejo profesional de sus inversiones.</p>
		</li>
		<li className="faq-icon-item">
			<img className="faq-icon" src={reinversion} />
			<p><strong>Reinversión:</strong> Fiduamericas reinvierte el dinero recibido por cobro de interés, amortizaciones y dividendos, lo que permite que capitalicen continuamente los recursos del fondo. El inversionista no se tiene que preocupar de renovar su inversión al invertir en un fondo de inversión.</p>
		</li>
		<li className="faq-icon-item">
			<img className="faq-icon" src={montos} />
			<p><strong>Montos de inversión:</strong> En el mercado existe una gran cantidad de fondos de inversión en los que se puede participar mediante montos bajos, obteniendo los beneficios que ofrecen estos instrumentos de inversión.</p>
		</li>
		<li className="faq-icon-item">
			<img className="faq-icon" src={regulacion} />
			<p><strong>Regulación y supervisión:</strong> Los fondos de inversión, así como los prestadores de servicios correspondientes, están sujetos a la legislación ecuatoriana como la Ley de Mercado de Valores, regulaciones que tienen como objetivo proteger los intereses del público inversionista mediante la supervisión y vigilancia de la Superintendencia de Compañias, Seguros y Valores.</p>
		</li>
	</ul>
</div>;

const faqQuestion =
<FaqQuestion
	question={ question }
	answer={ answer }
/>;

export default faqQuestion;
