import React from 'react';

import FaqQuestion from '../../components/FaqQuestion.js'

import faqImage from '../../images/faq/cuales_son_inversiones_comparables.svg';

const question = "¿Cuáles son inversiones comparables?";

const answer =
<div>
	<img src={ faqImage } />
</div>;

const FaqQuestionWithData = () => {
	return (
		<FaqQuestion
			question={ question }
			answer={ answer }
			id="cuales_son_inversiones_comparables"
		/>
	)
}	

export default FaqQuestionWithData;
