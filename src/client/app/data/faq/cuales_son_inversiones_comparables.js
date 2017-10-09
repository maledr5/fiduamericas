import React from 'react';

import FaqQuestion from '../../components/FaqQuestion.js'

import faqImage from '../../images/faq/cuales_son_inversiones_comparables.svg';

const question = "¿Cuáles son inversiones comparables?";

const answer =
<div>
	<img src={ faqImage } />
</div>;

const faqQuestion =
<FaqQuestion
	question={ question }
	answer={ answer }
/>;

export default faqQuestion;
