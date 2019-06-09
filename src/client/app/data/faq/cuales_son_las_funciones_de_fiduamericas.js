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

const FaqQuestionWithData = () => {
	return (
		<FaqQuestion
			question={ question }
			answer={ answer }
			id="cuales_son_las_funciones_de_fiduamericas"
		/>
	)
}

export default FaqQuestionWithData;

