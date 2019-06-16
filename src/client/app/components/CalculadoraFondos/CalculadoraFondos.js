
import React from 'react';

class ContactoForm extends React.Component {

    CONSTANT = {
        id: {
            montoInicial: "montoInicial",
            permanencia: "permanencia",
            incrementoMensual: "incrementoMensual"
        },
        nombre: {
            montoInicial: "Monto inicial",
            permanencia: "Dias de permanencia",
            incrementoMensual: "Incremento Mensual",
            calcularRendimiento: "Calcular Rendimiento"
        }
    }

    INSERT_ALL_VALUES_ERROR = "Debe ingresar todos los campos antes de calcular.";
    TASA_FONDO_FIT = 0.0535;
    PERIOD_IN_DAYS = 30
    YEAR_IN_DAYS = 360

    constructor(props) {
		super(props);
		this.state = {
            montoInicial: "",
            permanencia: 90,
            incrementoMensual: 10,
            totalRecibir: "",
            rendimientoFondo: "",
            rendimientoBanco: ""
		};
    }

    round(number) {
        number = parseFloat(number)
        return number.toFixed(2)
    }

    updateValue(event) {
        var targetName = event.target.name;
        var targetValue = event.target.value;
		this.setState({[targetName]: targetValue});
    }

    calcularRetornoMensual(incrementalAmount, time, foundRate) {
        var remainingTime = time - this.PERIOD_IN_DAYS;
        var totalretornoMensual = 0
        do {
          var retornoMensual = incrementalAmount * foundRate * remainingTime / this.YEAR_IN_DAYS
          totalretornoMensual += retornoMensual
          remainingTime = remainingTime - this.PERIOD_IN_DAYS
        } while (remainingTime > 0)
        return totalretornoMensual
    }

    showResults(montoInicial, permanencia, incrementoMensual) {
        const retornoMensual = this.calcularRetornoMensual(incrementoMensual, permanencia, this.TASA_FONDO_FIT)
        const retornoAnualDeMontoInicial = montoInicial * this.TASA_FONDO_FIT * permanencia / this.YEAR_IN_DAYS

        const monthlyStay = Math.floor(permanencia / this.PERIOD_IN_DAYS)

        const totalAmount = parseFloat(montoInicial) +
        parseFloat(incrementoMensual * monthlyStay) +
        parseFloat(retornoMensual) +
        parseFloat(retornoAnualDeMontoInicial)

        const totalReturn = retornoMensual + retornoAnualDeMontoInicial
        const banckReturn = 0

        this.setState({["totalRecibir"]: this.round(totalAmount)});
        this.setState({["rendimientoFondo"]: this.round(totalReturn)});
        this.setState({["rendimientoBanco"]: this.round(banckReturn)});
    }

    calculate(event) {
        event.preventDefault()
        const {montoInicial, permanencia, incrementoMensual} = this.state
        this.showResults(montoInicial, permanencia, incrementoMensual)
    }

    render() {
        const {montoInicial, permanencia, incrementoMensual, error, totalRecibir, rendimientoFondo, rendimeintoBanco} = this.state
        return (
                <form>
                    <div className="row errorNotification">
                        {error}
                    </div>
                    <div className="row">
                        <div className="col s12 l6">
                            <label htmlFor={this.CONSTANT.id.montoInicial}>{this.CONSTANT.nombre.montoInicial}</label>
                            <input
                                className="input-main"
                                type="number"
                                value={montoInicial}
                                onChange={event => this.updateValue(event)}
                                name={this.CONSTANT.id.montoInicial}
                                id={this.CONSTANT.id.montoInicial}
                                required="required"
                            />
                        </div>
                        <div className="col s12 l6">
                            <label htmlFor={this.CONSTANT.id.permanencia}>{this.CONSTANT.nombre.permanencia}</label>
                            <input
                                className="input-main"
                                type="number"
                                value={permanencia}
                                onChange={event => this.updateValue(event)}
                                name={this.CONSTANT.id.permanencia}
                                id={this.CONSTANT.id.permanencia}
                                required="required"
                            />
                        </div>
                    </div>
                    <div className="row flex-display flex-align-end">
                        <div className="col s12 l6">
                            <label htmlFor={this.CONSTANT.id.incrementoMensual}>{this.CONSTANT.nombre.incrementoMensual}</label>
                            <input
                                className="input-main"
                                type="number"
                                value={incrementoMensual}
                                onChange={event => this.updateValue(event)}
                                name={this.CONSTANT.id.incrementoMensual}
                                id={this.CONSTANT.id.incrementoMensual}
                                required="required"
                            />
                        </div>
                        <div className="col s12 l6">
                            <input
                                className="input-main"
                                type="submit"
                                name="footer-submit"
                                value={this.CONSTANT.nombre.calcularRendimiento}
                                onClick={event => this.calculate(event)}
                            />
                        </div>
                    </div>
                    <h2 className="text-main">Valor a recibir: {totalRecibir} </h2>
                    <h4>Rendimiento obtenido en el Fondo Fit: {rendimientoFondo}</h4>
                    {/* <h4>Rendimiento que obtendrías en un banco: {rendimeintoBanco}</h4> */}
                </form>
        )
    }
}

export default ContactoForm