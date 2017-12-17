import React, { Component } from 'react';

import ProductsCards from '../components/ProductsCards.js'
import fideicomisosData from '../data/fideicomisos_data.js';


class ProductCard extends Component {
	render(props) {
		const fideicomisos = fideicomisosData()
		const productKey = this.props.match.params.name
		const currentProduct = fideicomisos[productKey]

		return (
			<div id="fid-info" className="container">
				<div className="row">
					<h2 className="text-main">Negocios Fiduciarios</h2>
					<h3 className="text-main">{currentProduct.nombre}</h3>
					<p className="col m9 s12 text-dark">{currentProduct.descripcionLarga}</p>
					<img src={ currentProduct.imgsrc } />
				</div>
				<div id="fid-negocios" >
					<h3 className="text-main">Otros Negocios Fiduciarios</h3>
					<ProductsCards products={fideicomisos} type="fideicomisos" />
				</div>
			</div>
		)
	}
}


export default ProductCard