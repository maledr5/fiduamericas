import React from 'react';

import FaqQuestion from '../../components/FaqQuestion.js'


const question = "¿Qué significa negocio fiduciario?";

const answer =
<div>
	<p>Negocio fiduciario, es el acto de confianza mediante el cual unas personas llamadas
Constituyentes: (i) transfieren de manera temporal e irrevocable, la propiedad de bienes a un patrimonio autónomo dotado de personalidad jurídica para que la Fiduciaria cumpla con las finalidades específicas señaladas en un contrato constitutivo, en favor del Beneficiario; o (ii) instruyen irrevocablemente a una Fiduciaria para que cumpla con las finalidades específicas señaladas en un contrato constitutivo, en favor del Beneficiario. </p>
</div>;

const faqQuestion =
<FaqQuestion
	question={ question }
	answer={ answer }
	id="que_significa_negocio_fiduciario"
/>;

export default faqQuestion;
