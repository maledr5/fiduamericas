
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
    

    constructor(props) {
		super(props);
		this.state = {
            montoInicial: "",
            permanencia: "",
            incrementoMensual: ""
		};
    }
    
    updateValue(event) {
        var targetName = event.target.name;
        var targetValue = event.target.value;
        console.log('targetName: ', targetName)
		this.setState({[targetName]: targetValue});
	}

    render() {
        const {montoInicial, permanencia, incrementoMensual} = this.state
        return (
                <form>
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
                            />
                        </div>
                    </div>
                    <h2>Valor a recibir: </h2>
                    <h4>Rendimiento obtenido en el Fondo Fit: </h4>
                    <h4>Rendimiento que obtendrías en un banco: </h4>
                </form>
        )
    }
}

export default ContactoForm