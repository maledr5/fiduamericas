import React from 'react';

import CalculadoraFondos from './CalculadoraFondos'

const CalculadoraFondoFit = () => {
    return (
        <div className="container">
            <div className="row">
                <h2 className="text-main left">Calculadora Fondo Fit</h2>
            </div>
            <hr/>
            <div className="row">
                <div className="col s12 m5 text-main left">
                    <p className="normal text-dark">
                        El Fondo Fit de inversión te permite tener un rendimiento a corto plazo. Para abrir un fondo necesitas un monto inicial y realizar incrementos mensuales desde $10. 
                        <br/><br/>
                        Esta calculadora te ayudará a evaluar tu rendimiento. 
                    </p>
                    <div id="caracteristicas" className="row">
						<div className="col s12 l8">
                            <hr/>
                            <p className="second text-dark">Tasa anual
							<span className="hightlight-sec text-main">5.35%</span></p>
							<hr/>
                            <p className="second text-dark">Plazo mínimo <br/> en días
							<span className="hightlight-sec text-main">90</span></p>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 offset-m1">
                    <CalculadoraFondos />
                </div>
            </div>
            <hr/>
        </div>
    )

}

export default CalculadoraFondoFit