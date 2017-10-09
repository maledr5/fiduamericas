import React from 'react';

import FaqQuestion from '../../components/FaqQuestion.js'


const question = "¿Qué es un fondo de inversión?";

const answer = 
<div>
	<p>Los fondos de inversión, se clasifican en:</p>
	<ul>
		<li><strong>Fondos administrados:</strong> son aquellos que admiten la incorporación, en cualquier momento de aportantes, así como el retiro de uno o varios, por lo que el monto del patrimonio y el valor de sus respectivas unidades es variable. En este caso, la administradora actuará por cuenta y riesgo de sus aportantes o partícipes.</li>
		<li><strong>Fondos colectivos:</strong> son aquellos que tienen como finalidad invertir en valores de proyectos productivos específicos. Estos fondos y su administrador se someterán a las normas del fideicomiso mercantil. Las cuotas de estos fondos deberán someterse a calificación de riesgo y serán libremente negociables.</li>
		<li><strong>Fondos cotizados:</strong> Son aquellos fondos que no podrán invertir en proyectos, sino exclusivamente en valores admitidos a cotización bursátil. Estos fondos podrán replicar la misma composición de un índice bursátil. La Junta de Política y Regulación Monetaria y Financiera establecerá las normas para la constitución de los fondos cotizados y la negociación y registro de sus cuotas, que constituyen valores negociables en el mercado de valores.</li>
	</ul>
</div>;

const faqQuestion = 
<FaqQuestion
	question={ question }
	answer={ answer }
/>;

export default faqQuestion;
