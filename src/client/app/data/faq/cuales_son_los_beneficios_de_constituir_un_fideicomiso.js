import React from 'react';

import FaqQuestion from '../../components/FaqQuestion.js'


const question = "¿Cuáles son los beneficios de constituir un fideicomiso?";

const answer =
<div>
	<ul>
		<li> Separación patrimonial. </li>
		<li> Protección al patrimonio ya que no puede ser objeto de afectación por un tercero. </li>
		<li> Brinda seguridad jurídica debido a que sus instrucciones son irrevocables. </li>
		<li> Brinda transparencia a través del control fiduciario. </li>
		<li> Permite controlar la distribución del patrimonio. </li>
		<li> Secreto Fiduciario y confidencialidad. </li>
		<li> Mejora el costo del endeudamiento en la medida que mejora el riesgo. </li>
		<li> Brinda certeza y seguridad en el cumplimiento de los fines para los cuales fue creado. </li>
		<li> Permite establecer criterios de administración e inversión definidos. </li>
		<li> Beneficios fiscales previstos en las leyes para fomentar la inversión. </li>
		<li> Es una figura flexible que responde a las necesidades de cada cliente en particular. </li>
		<li> Imparcialidad, un tercero especializado, llamado Fiduciario, administra los bienes fideicomitidos. </li>
		<li> Eficiente para ejecutar una garantía en caso de incumplimiento. </li>
	</ul>
</div>;

const FaqQuestionWithData = () => {
	return (
		<FaqQuestion
			question={ question }
			answer={ answer }
			id="cuales_son_los_beneficios_de_constituir_un_fideicomiso"
		/>
	)
}

export default FaqQuestionWithData;



