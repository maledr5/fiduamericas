import React from 'react';

import FaqQuestion from '../../components/FaqQuestion.js'


const question = "¿Qué significa fideicomiso?";

const answer =
<div>
	<p>Fideicomiso se deriva de las raíces latinas FIDES y COMMITIO, que significan comisión de fe o encargo de confianza. Se lo ha venido utilizando desde el Derecho Romano, incluido en el Derecho Anglosajón, hasta nuestros días con las modificaciones necesarias que se encuentran en cada país, para acoplarse a las leyes vigentes en los mismos. </p>
</div>;

const FaqQuestionWithData = () => {
	return (
		<FaqQuestion
			question={ question }
			answer={ answer }
			id="que_significa_fideicomiso"
		/>
	)
}

export default FaqQuestionWithData;
