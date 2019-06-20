
import React from 'react'
import {round, areValuesInserted} from '../../utils/utils'

class ContactoForm extends React.Component {

    CONSTANT = {
        id: {
            montoInicial: "montoInicial",
            permanencia: "permanencia",
            tipoDePermanencia: "tipoDePermanencia",
            incrementoMensual: "incrementoMensual"
        },
        nombre: {
            montoInicial: "Monto inicial",
            permanencia: "Permanencia",
            tipoDePermanencia: "Periodo",
            incrementoMensual: "Incremento Mensual",
            calcularRendimiento: "Calcular Rendimiento"
        }
    }

    PERMANENCIA = {
        dias: 1,
        meses: 30,
        anios: 360
    }

    TASA_FONDO_FIT = 0.060
    PERIODO_EN_DIAS = 30
    ANIO_EN_DIAS = 360
    MINIMO_PERMANENCIA = 90
    MINIMO_INCREMENTO = 10

    ERROR_INSERTE_VALORES = "Debe ingresar todos los campos antes de calcular"
    ERROR_PERMANENCIA_MINIMA = `El tiempo mínimo de permanencia es de ${this.MINIMO_PERMANENCIA} dias`
    ERROR_INCREMENTO_MINIMO = `El incremento mensual mínimo es de $${this.MINIMO_INCREMENTO}`

    constructor(props) {
		super(props)
		this.state = {
            montoInicial: "",
            permanencia: 90,
            incrementoMensual: 10,
            totalRecibir: "",
            rendimientoFondo: "",
            rendimientoBanco: "",
            error: "",
            tipoDePermanencia: "dias"
		}
    }

    updateValueFromEvent(event) {
        var targetName = event.target.name
        var targetValue = event.target.value
		this.setState({[targetName]: targetValue})
    }

    updateValue(key, value) {
        this.setState({[key]: value})
    }

    setErrorState(error) {
        this.updateValue("error", error)
    }

    calcularRetornoMensual(incremento, permanencia, tasaFondo) {
        var tiempoRestante = permanencia - this.PERIODO_EN_DIAS
        var totalretornoMensual = 0
        do {
          var retornoMensual = incremento * tasaFondo * tiempoRestante / this.ANIO_EN_DIAS
          totalretornoMensual += retornoMensual
          tiempoRestante = tiempoRestante - this.PERIODO_EN_DIAS
        } while (tiempoRestante > 0)
        return totalretornoMensual
    }

    actualizarValoresEnPantalla(totalARecibir, retornoTotal) {
        this.updateValue("totalRecibir", totalARecibir)
        this.updateValue("rendimientoFondo", retornoTotal)
        this.updateValue("rendimientoBanco", 0)
    }

    limpiarTotalesEnPantalla() {
        this.actualizarValoresEnPantalla("", "")
    }

    mesesDePermanencia(permanencia) {
        const mesesDePermanencia = Math.floor(permanencia / this.PERIODO_EN_DIAS)
        const mod = permanencia % this.PERIODO_EN_DIAS
        return mod > 0 ? mesesDePermanencia : mesesDePermanencia - 1
    }

    obtenerPermanenciaEnDias(permanencia, tipoDePermanencia) {
        return permanencia * this.PERMANENCIA[tipoDePermanencia]
    }

    mostrarResultados(montoInicial, permanenciaEnDias, incrementoMensual) {
        const retornoMensual = this.calcularRetornoMensual(incrementoMensual, permanenciaEnDias, this.TASA_FONDO_FIT)
        const retornoAnualDeMontoInicial = montoInicial * this.TASA_FONDO_FIT * permanenciaEnDias / this.ANIO_EN_DIAS

        const mesesDePermanencia = this.mesesDePermanencia(permanenciaEnDias)

        const totalARecibir = parseFloat(montoInicial) +
        parseFloat(incrementoMensual * mesesDePermanencia) +
        parseFloat(retornoMensual) +
        parseFloat(retornoAnualDeMontoInicial)

        const retornoTotal = retornoMensual + retornoAnualDeMontoInicial

        this.actualizarValoresEnPantalla('$' + round(totalARecibir), '$' + round(retornoTotal))
    }

    esTiempoPermanenciaMinimo(permanencia) {
        return permanencia >= this.MINIMO_PERMANENCIA
    }

    esIncrementoMensualMinimo(incrementoMensual) {
        return incrementoMensual >= this.MINIMO_INCREMENTO
    }

    esElInputValido(montoInicial, permanencia, incrementoMensual) {
        if(!areValuesInserted([montoInicial, permanencia, incrementoMensual])) {
            this.setErrorState(this.ERROR_INSERTE_VALORES)
            return false
        }

        if(!this.esTiempoPermanenciaMinimo(permanencia)) {
            this.setErrorState(this.ERROR_PERMANENCIA_MINIMA)
            return false
        }

        if(!this.esIncrementoMensualMinimo(incrementoMensual)) {
            this.setErrorState(this.ERROR_INCREMENTO_MINIMO)
            return false
        }

        return true
    }

    calculate(event) {
        event.preventDefault()
        const {montoInicial, permanencia, incrementoMensual, tipoDePermanencia} = this.state
        this.limpiarTotalesEnPantalla()
        const permanenciaEnDias = this.obtenerPermanenciaEnDias(permanencia, tipoDePermanencia)
        if(this.esElInputValido(montoInicial, permanenciaEnDias, incrementoMensual)){
            this.setErrorState("")
            this.mostrarResultados(montoInicial, permanenciaEnDias, incrementoMensual, tipoDePermanencia)
        }
    }

    render() {
        const {montoInicial, permanencia, incrementoMensual, error, totalRecibir, rendimientoFondo, tipoDePermanencia} = this.state
        return (
                <form className="container">
                    <div className="row">
                        <div className="col error-notification">{error}</div>
                    </div>
                    <div className="row">
                        <div className="col s12 l5">
                            <label htmlFor={this.CONSTANT.id.montoInicial}>{this.CONSTANT.nombre.montoInicial}</label>
                            <input
                                className="input-main"
                                type="number"
                                value={montoInicial}
                                onChange={event => this.updateValueFromEvent(event)}
                                name={this.CONSTANT.id.montoInicial}
                                id={this.CONSTANT.id.montoInicial}
                                required="required"
                            />
                        </div>
                        <div className="col s12 l4">
                            <label htmlFor={this.CONSTANT.id.permanencia}>{this.CONSTANT.nombre.permanencia}</label>
                            <input
                                className="input-main"
                                type="number"
                                value={permanencia}
                                onChange={event => this.updateValueFromEvent(event)}
                                name={this.CONSTANT.id.permanencia}
                                id={this.CONSTANT.id.permanencia}
                                required="required"
                            />
                        </div>
                        <div className="col s12 l3">
                            <label htmlFor={this.CONSTANT.id.tipoDePermanencia}> {this.CONSTANT.nombre.tipoDePermanencia} </label>
                            <select id={this.CONSTANT.id.tipoDePermanencia}
                                    value={tipoDePermanencia}
                                    onChange={event => this.updateValueFromEvent(event)}
                                    name={this.CONSTANT.id.tipoDePermanencia}>
                                <option value="dias">Dias</option>
                                <option value="meses">Meses</option>
                                <option value="anios">Años</option>
                            </select>
                            <span className="caret caret-down"></span>
                        </div>
                    </div>
                    <div className="row flex-display flex-align-end">
                        <div className="col s12 l6">
                            <label htmlFor={this.CONSTANT.id.permanencia}>{this.CONSTANT.nombre.incrementoMensual}</label>
                            <input
                                className="input-main"
                                type="number"
                                value={incrementoMensual}
                                onChange={event => this.updateValueFromEvent(event)}
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
                    <h3 className="text-main">Valor proyectado a recibir: {totalRecibir} </h3>
                    <p>Rendimiento proyectado en el Fondo Fit: {rendimientoFondo}</p>
                    {/* <h4>Rendimiento que obtendrías en un banco: {rendimeintoBanco}</h4> */}
                </form>
        )
    }
}

export default ContactoForm