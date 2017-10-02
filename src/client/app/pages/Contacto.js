import React from 'react';
import axios from 'axios';

import sentIcon from '../images/sent_icon.svg'


class Contacto extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			nameValue: '',
			mailValue: '',
			phoneValue: '',
			messageValue: '',
			typeValue: '',
			errorMessage: '',
			hasError: false,
			isMessageSent: false
		};
	}

	send(submitEvent, contex) {
		submitEvent.preventDefault();

		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.post("http://fiduamericas.com/ContactController.php", {
			"name": contex.state.nameValue,
			"mail": contex.state.mailValue,
			"phone": contex.state.phoneValue,
			"message": contex.state.messageValue,
			"type": contex.state.typeValue
		})
		  .then(function (response) {
		    console.log(response);
		    contex.hanldeSuccess();
		  })
		  .catch(function (error) {
		    console.log(error); // TODO: Handle error
		  });
		return false;
	}

	updateValue(evt) {
		var targetName = evt.target.name + "Value";
		var targetValue = evt.target.value;
		this.setState({[targetName]: targetValue});
	}

	hanldeSuccess() {
		this.setState({ hasError: false });
		this.setState({ isMessageSent: true });
	}
	
	render() {
		return (
			<div>
				<div className="container text-main">
					<div className="row">
						<h1 className="col offset-s1">Contacto</h1>
						<div className="col offset-s1 header-division"></div>
					</div>
				</div>
				<div id="contact-form">
					<div className="container">
					{this.state.isMessageSent?
						<div className="row form-response">
							<img src={sentIcon} className="col s2 offset-s4 icon-sent"></img>
							<p className="col s2">"Gracias por su mensaje. Nos contactaremos pronto con usted."</p>
						</div>
						:
						<div>
							<div className="form-message"></div>
							<form onSubmit={evt => this.send(evt, this)}>
								<div className="row">
									<input
										className="col s10 l4 offset-s1 offset-m1 offset-l2 input-main"
										type="text"
										value={this.state.nameValue}
										onChange={evt => this.updateValue(evt)}
										name="name"
										ref="formName"
										placeholder="Nombre y Apellido*"
										required="required" />
									<input
										className="col s10 l3 offset-s1 offset-m1 offset-l1 input-main"
										type="email"
										value={this.state.mailValue}
										onChange={evt => this.updateValue(evt)}
										name="mail"
										placeholder="Email*"
										required="required" />
								</div>
								<div className="row">
									<input
										className="col s10 l4 offset-s1 offset-m1 offset-l2 input-main"
										type="tel"
										pattern='^\+?\d{0,13}'
										value={this.state.phoneValue} onChange={evt => this.updateValue(evt)}
										name="phone"
										placeholder="Teléfono o celular" />
									<p className="col s10 l3 offset-s1 offset-m1 offset-l1 second text-main">Quiero información acerca de:</p>
								</div>
								<div className="row">
									<textarea className="col s10 l4 offset-s1 offset-m1 offset-l2 input-main" rows="3" cols="30" value={this.state.messageValue} onChange={evt => this.updateValue(evt)} name="message" placeholder="Consulta o Mensaje"></textarea>
									<select className="col s10 l3 offset-s1 offset-m1 offset-l1 input-main" value={this.state.typeValue} onChange={evt => this.updateValue(evt)} name="type">
										<option value="" disabled defaultValue>Escoge un tipo de consulta</option>
										<option value="Negocios Fiduciarios">Negocios Fiduciarios</option>
										<option value="Fondos de Inversión">Fondos de Inversión</option>
										<option value="Otro tipo de consulta">Otro tipo de consulta</option>
									</select>
								</div>
								<div className="row">
									<input className="col s10 l8 offset-s1 offset-m1 offset-l2 input-main" type="submit" name="footer-submit" value="Enviar Consulta" />
								</div>
							</form>
						</div>
					}
					</div>
				</div>
			</div>
		)
	}
};

export default Contacto