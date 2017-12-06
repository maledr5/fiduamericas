import React from 'react';

import FaqQuestion from '../../components/FaqQuestion.js'


const question = "¿Cómo puedo invertir?";

const answer =
<div>
	<ul className="no-bullets">
		<li><strong>Paso 1:</strong> Asesórate, nuestro objetivo es conocer tus necesidades y expectativas para poder ofrecerte el tipo de fondo que más te convenga. </li>
		<li><strong>Paso 2:</strong> Una vez que hayas escogido en qué fondo quieres invertir, tienes que llenar unos formularios con información como tu cédula, tu domicilio y tus ingresos. Firmamos el contrato en el cual se especifica el reglamento interno de tu fondo. </li>
		<li><strong>Paso 3:</strong> Verificamos tus datos y nuestro oficial de cumplimiento procede a dar el visto bueno sobre tu expediente.  </li>
		<li><strong>Paso 4:</strong> Invierte, tienes que transferir o depositar en nuestras cuentas bancarias los correspondientes montos. </li>
		<li><strong>Paso 5:</strong> Espera y gana. Nosotros nos ocupamos del resto. </li>
	</ul>
</div>;

const faqQuestion =
<FaqQuestion
	question={ question }
	answer={ answer }
/>;

export default faqQuestion;