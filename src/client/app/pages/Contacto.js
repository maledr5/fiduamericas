import React from 'react';

import ContactForm from '../components/ContactForm.js'
import ContactDetails from '../components/ContactDetails.js'
import CustomMap from '../components/CustomMap.js'


class Contacto extends React.Component {
	render() {
		return (
			<div id="contacto">
				<ContactForm formType="main"/>
				<div className ="container">
					<div className="row">
						<div className="col l4 m5 s12 offset-s1 offset-m1 offset-l1 contact-details-container cotact-details-main text-main">
							<ContactDetails />
						</div>
						<div className="col l5 m6 s12 customMap">
							<CustomMap
								isMarkerShown
								googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
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