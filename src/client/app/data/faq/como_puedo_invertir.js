import React from 'react';

import FaqQuestion from '../../components/FaqQuestion.js'

import paso1 from '../../images/faq/paso1.svg';
import paso2 from '../../images/faq/paso2.svg';
import paso3 from '../../images/faq/paso3.svg';
import paso4 from '../../images/faq/paso4.svg';
import paso5 from '../../images/faq/paso5.svg';


const question = "¿Cómo puedo invertir?";

const answer =
<div>
	<ul className="no-bullets">
		<li className="faq-icon-item">
			<img src={ paso1 } className="faq-icon" />
			<p> <strong>Paso 1:</strong> Asesórate, nuestro objetivo es conocer tus necesidades y expectativas para poder ofrecerte el tipo de fondo que más te convenga.  </p> 
		</li>
		<li className="faq-icon-item">
			<img src={ paso2 } className="faq-icon" />
			<p> <strong>Paso 2:</strong> Una vez que hayas escogido en qué fondo quieres invertir, tienes que llenar unos formularios con información como tu cédula, tu domicilio y tus ingresos. Firmamos el contrato en el cual se especifica el reglamento interno de tu fondo.  </p> 
		</li>
		<li className="faq-icon-item">
			<img src={ paso3 } className="faq-icon" />
			<p> <strong>Paso 3:</strong> Verificamos tus datos y nuestro oficial de cumplimiento procede a dar el visto bueno sobre tu expediente.   </p> 
		</li>
		<li className="faq-icon-item">
			<img src={ paso4 } className="faq-icon" />
			<p> <strong>Paso 4:</strong> Invierte, tienes que transferir o depositar en nuestras cuentas bancarias los correspondientes montos.  </p> 
		</li>
		<li className="faq-icon-item">
			<img src={ paso5 } className="faq-icon" />
			<p> <strong>Paso 5:</strong> Espera y gana. Nosotros nos ocupamos del resto.  </p> 
		</li>
	</ul>
</div>;

const faqQuestion =
<FaqQuestion
	question={ question }
	answer={ answer }
	id="como_puedo_invertir"
/>;

export default faqQuestion;