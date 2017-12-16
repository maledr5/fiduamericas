import React, { Component } from 'react';

class ProductsCards extends Component {
	render() {
		return <div>{this._buildProducts()}</div>
	}

	_buildProducts() {
		const products = this.props.products;
		return products.map( (product, index) => {
			return (
				<div key={index} className="product-container box-light-grey">
					<h4 className="text-main">{product.nombre}</h4>
					<p>{product.descripcion}</p>
					<a className="second-link" href={ "/producto" }>Conoce más</a>
	 			</div>
			)
		});
	}

}

export default ProductsCards
