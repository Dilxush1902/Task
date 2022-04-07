import React, {useEffect, useState} from 'react';
import {getProducts} from "../../api/API";
import ProductNewItem from "./ProductNewItem";

const ProductNewList = () => {
	const [products,setProducts]=useState([])
useEffect(()=>{
getProducts()
	.then(res => setProducts(res.data))
},[])
	const productsNew = products.filter(item => item.status ==="new");

	console.log(productsNew)
	 return (
			<div className="container">
				<h1>Новинки</h1>
				<div className="product">
					{productsNew.map((product)=>(
						<ProductNewItem key={product.id} product={product}/>
					))}
				</div>
			</div>
	);
};

export default ProductNewList;