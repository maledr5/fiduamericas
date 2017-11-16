import React from 'react';


import marcoLegal_01 from '../data/downloads/marcoLegal_01.pdf'
import marcoLegal_02 from '../data/downloads/marcoLegal_02.pdf'


const MarcoLegal = () => {
	return (
		<div>
			<div className="container text-main">
				<div className="row">
					<h1 className="col offset-s1">Marco Legal</h1>
					<div className="col offset-s1 header-division"></div>
				</div>
			</div>

			<div id="marcoLegal">
				<div className="container">
					<div className="row">
						<p className="col offset-s1 second">A continuación, encontrará información y documentación relevante:</p>
					</div>
					<div className="row link-row">
						<span className="col offset-s1 pdf-icon"></span>
						<a href={marcoLegal_01} className="" target="_blank">Código Orgánico Monetario y Financiero</a>
					</div>
					<div className="row link-row">
						<span className="col offset-s1 pdf-icon"></span>
						<a href={marcoLegal_02} className="" target="_blank">Codificación de Resoluciones Monetarias, Financieras, de Valores y Seguros</a>
					</div>
				</div>
			</div>
		</div>
	)
};

export default MarcoLegal