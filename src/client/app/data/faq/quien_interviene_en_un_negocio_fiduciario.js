import React from 'react';

import FaqQuestion from '../../components/FaqQuestion.js'

import faqImage from '../../images/faq/quien_interviene_en_un_negocio_fiduciario.svg';


const question = "¿Quién interviene en un negocio fiduciario?";

const answer =
<div>
	<p>En un fideicomiso existen al menos, los siguientes partícipes: (I) Constituyente, (II) Fiduciario, (III) Beneficiario. </p>
	<img src="" />
	<p>En una estructura general de un Fideicomiso, de acuerdo con el ejemplo presentado, existe un Constituyente, que celebra un contrato de fideicomiso mercantil mediante el cual establece instrucciones, a ser cumplidos por una persona de confianza denominada Fiduciario. El cumplimiento de dichas instrucciones es entregado a favor de un Beneficiario o Fideicomisario. El Constituyente también puede ser el Beneficiario. </p>
	<img src={ faqImage } />
</div>;

const faqQuestion =
<FaqQuestion
	question={ question }
	answer={ answer }
/>;

export default faqQuestion;
