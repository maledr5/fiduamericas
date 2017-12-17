import React from 'react';
import { HashLink } from 'react-router-hash-link';

import FaqQuestion from '../../components/FaqQuestion.js'


const question = "¿Qué tipos de negocios fiduciarios existen?";

const answer =
<div>
	<p>Dentro de la legislación ecuatoriana existen dos tipos de negocios fiduciarios: </p>
	<p className="second text-sec">1. Fideicomiso Mercantil</p>
	<p>Es el contrato por medio el cual acuerdo una o más personas llamadas Constituyentes, transfieren de manera temporal e irrevocable, la propiedad de bienes muebles o inmuebles, corporales o incorporales, que existen o se espera que existan, a un patrimonio autónomo dotado de personalidad jurídica, para que la Fiduciaria cumpla con las finalidades específicas señaladas en él a favor del Beneficiario. Sus características son: </p>
	<ul>
		<li><strong>Solemnidad:</strong> quiere decir que se debe celebrar por escritura pública. </li>
		<li><strong>Inembargabilidad:</strong> quiere decir que los bienes del fideicomiso no podrán ser embargados por deudas de sus constituyentes, beneficiarios o de su fiduciario. </li>
		<li><strong>Irrevocabilidad:</strong> quiere decir que las condiciones establecidas no pueden ser revocadas, sino por mutuo acuerdo de todos los participantes. </li>
		<li><strong>Indelegabilidad:</strong> quiere decir que no cabe delegación de las actividades del fiduciario. </li>
		<li><strong>Herramienta </strong>de Medio: quiere decir que el fiduciario no puede garantizar los resultados de su gestión, pero debe realizar su mejor esfuerzo para el cumplimiento del mandato otorgado.  </li>
		<li><strong>Responsabilidad </strong>fiscal: quiere decir que de acuerdo con la legislación tributaria los fideicomisos son sociedades, por lo que tienen la misma responsabilidad que estos entes. </li>
		<li><strong>Onerosidad:</strong> significa que por su gestión el fiduciario debe recibir un honorario. </li>
	</ul>
	<br/>
	<HashLink className="second-link" to="fideicomisos#fid-negocios">Ver más Negocios Fiduciarios</HashLink>
</div>;

const faqQuestion =
<FaqQuestion
	question={ question }
	answer={ answer }
/>;

export default faqQuestion;
