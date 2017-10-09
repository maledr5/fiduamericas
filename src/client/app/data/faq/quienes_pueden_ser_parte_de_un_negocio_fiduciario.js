import React from 'react';

import FaqQuestion from '../../components/FaqQuestion.js'


const question = "¿Quiénes pueden ser parte de un negocio fiduciario?";

const answer =
<div>
	<p>Los constituyentes pueden ser las personas naturales o jurídicas, nacionales o extranjeras que transfieran bienes o derechos a un fideicomiso para que los administre a su nombre.
Los beneficiarios pueden ser personas naturales o jurídicas, nacionales o extranjeras que existen o que se espera que existan al momento de la constitución o de la extinción del fideicomiso. (Los Constituyentes pueden ser Beneficiarios). </p>
</div>;

const faqQuestion =
<FaqQuestion
	question={ question }
	answer={ answer }
/>;

export default faqQuestion;
