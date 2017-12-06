import React from 'react';


import resoluciones_01 from '../data/downloads/resoluciones_01.pdf'
import resoluciones_02 from '../data/downloads/resoluciones_02.pdf'
import resoluciones_03 from '../data/downloads/resoluciones_03.pdf'


const Resoluciones = () => {
	return (
		<div>
			<div className="container text-main">
				<div className="row">
					<h1 className="col offset-s1">Resoluciones</h1>
					<div className="col offset-s1 header-division"></div>
				</div>
			</div>

			<div id="resoluciones">
				<div className="container">
					<div className="row">
						<p className="col offset-s1 second">A continuación, encontrará información y documentación relevante:</p>
					</div>
					<div className="row link-row">
						<span className="col offset-s1 pdf-icon"></span>
						<a href={resoluciones_01} className="" target="_blank">Certificado de Inscripción</a>
					</div>
					<div className="row link-row">
						<span className="col offset-s1 pdf-icon"></span>
						<a href={resoluciones_02} className="" target="_blank">Resolución 20135</a>
					</div>
					<div className="row link-row">
						<span className="col offset-s1 pdf-icon"></span>
						<a href={resoluciones_03} className="" target="_blank">Resolución 23710</a>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Resoluciones