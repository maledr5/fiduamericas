import React from 'react';

import CalculadoraFondos from './CalculadoraFondos'
import fondoFitBrand from '../images/brand_fondo_fit_icon.svg'

const CalculadoraFondoFit = () => {
    return (
        <div>
            <div className="row brand">
                <img src={fondoFitBrand} /><h2 className="text-main left">Calculadora Fondo Fit</h2>
            </div>
            <hr/>
            <div className="row">
                <div className="col s12 m5 text-main left">
                    <p className="normal text-dark">
                        El Fondo Fit de inversión te permite tener un rendimiento a corto plazo.
                        Para abrir un fondo solo necesitas un monto inicial, con la capacidad de
                        realizar incrementos mensuales desde $10.
                        <br/><br/>
                        Esta calculadora te ayudará a evaluar tu rendimiento.
                    </p>
                    <div id="caracteristicas" className="row">
						<div className="col s12 l8">
                            <hr/>
                            <p className="second text-dark">Tasa de rendimiento anual proyectada
							<span className="hightlight-sec text-main">6.00%</span></p>
							<hr/>
                            <p className="second text-dark">Permanencia mínima <br/> en días
							<span className="hightlight-sec text-main">90</span></p>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="col s12 m7">
                    <CalculadoraFondos />
                </div>
            </div>
            <hr/>
        </div>
    )

}

export default CalculadoraFondoFit