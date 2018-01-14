import React from 'react';

import FaqQuestion from '../../components/FaqQuestion.js'


const question = "¿Qué es un fondo de inversión?";

const answer =
<div>
	<p>Un fondo de inversión es el patrimonio común, integrado por aportes de varios inversionistas, personas naturales y jurídicas legalmente reconocidas, para su inversión en los valores, bienes y demás activos que la Ley de Mercado de Valores permite.</p>
</div>;

const faqQuestion =
<FaqQuestion
	question={ question }
	answer={ answer }
	id="que_es_un_fondo_de_inversion"
/>;

export default faqQuestion;
