import React from 'react';

import ContactForm from '../components/ContactForm.js'
import ContactDetails from '../components/ContactDetails.js'
import CustomMap from '../components/CustomMap.js'

import { scrollTop } from '../helpers.js'


class Contacto extends React.Component {

	constructor(props) {
		super(props);
	}

	getDefaultType(location) {
		var params = this.props.location.search
		if (!!params) {
			var currentProduct = params.replace("?product=", "");
			return currentProduct;
		}
		return null;
	}

	render() {
		scrollTop()
		return (
			<div id="contacto">
				<ContactForm formType="main" defaultType={this.getDefaultType(this.props.location)}/>
				<div className ="container">
					<div className="row">
						<div className="col l4 m5 s12 offset-s1 offset-m1 offset-l1 contact-details-container cotact-details-main text-main">
							<ContactDetails />
						</div>
						<div className="col l5 m6 s12 customMap">
							<CustomMap
								isMarkerShown
								googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgyLHK2O0QJ8090_BIMMUM3cWU_yoYBYY&v=3.exp&libraries=geometry,drawing,places"
								loadingElement={<div style={{ height: "100%" }} />}
								containerElement={<div style={{ height: "400px" }} />}
								mapElement={<div style={{ height: "100%" }} />}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default Contacto