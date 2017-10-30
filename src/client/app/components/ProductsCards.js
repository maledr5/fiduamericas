import React, { Component } from 'react';

class ProductsCards extends Component {
	render() {
		return <div>{this._buildProducts()}</div>
	}

	_buildProducts() {
		const products = this.props.products;
		return products.map( (product) => {
			return (
				<div className="product-container box-light-grey">
					<h4 className="text-main">{product.nombre}</h4>
 					<p>{product.descripcion}</p>
	 			</div>
 			)
		});
	}

}

export default ProductsCards
