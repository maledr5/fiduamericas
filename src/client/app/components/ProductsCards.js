import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';


class ProductsCards extends Component {
	render() {
		return <div>{this._buildProducts()}</div>
	}

	_buildProducts() {
		const products = this.props.products;
		const type = this.props.type

		return Object.keys(products).map( (productKey, index) => {
			const product = products[productKey]
			return (
				<div key={index} className="product-container box-light-grey">
					<h4 className="text-main">{product.nombre}</h4>
					<p>{product.descripcion}</p>
					<Link className="second-link" to={ "/" + type + "/" + productKey }>Conoce más</Link>
	 			</div>
			)
		});
	}

}

export default ProductsCards
