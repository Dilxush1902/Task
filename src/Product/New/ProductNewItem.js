import React from 'react';
const ProductNewItem = ({product}) => {
	return (
		<div className="card">
			<img src={product.image} className="card-img-top" alt={product.name}/>
				<div className="card-body">
					<h5 className="card-title">{product.name}</h5>
					<p className="card-text text-decoration-line-through">{product.old_price&&`$ ${product.old_price}`}</p>
					<p className="card-text ">{product.price&&`$ ${product.price}`}</p>
					<p className="card-text ">От {product.monthly_pay}$ 12 мес</p>
					<a href="#" className={product.in_stock===0 ?"btn btn-secondary disabled" : "btn btn-primary"}> В корзину</a>
				</div>
		</div>
	);
};

export default ProductNewItem;