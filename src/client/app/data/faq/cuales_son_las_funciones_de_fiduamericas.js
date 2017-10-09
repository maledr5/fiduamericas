import React from 'react';

import FaqQuestion from '../../components/FaqQuestion.js'


const question = "¿Cuáles son las funciones de Fiduaméricas?";

const answer =
<div>
	<p>Las funciones de un fiduciario se encuentran establecidas en el contrato constitutivo, sin perjuicio de los cual dentro de sus obligaciones generales encontramos:</p>
	<ul>
		<li> Administrar los bienes. </li>
		<li> Justificar el cumplimiento del contrato. </li>
		<li> Hacer inventario de los bienes fideicomitidos. </li>
		<li> Transferir los bienes a quien corresponda. </li>
		<li> Recibir su remuneración. </li>
		<li> Rendir cuentas. </li>
	</ul>
</div>;

const faqQuestion =
<FaqQuestion
	question={ question }
	answer={ answer }
/>;

export default faqQuestion;

