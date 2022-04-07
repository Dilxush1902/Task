import React, {useEffect, useState} from 'react';
import {getProducts} from "../../api/API";
import ProductAllItem from "./ProductAllItem";
import Skeleton from "react-loading-skeleton";


const ProductAllList = () => {
	const [productAll, setProductAll] = useState([]);
	const [show, setShow] = useState(false);
	useEffect(() => {

		getProducts()
			.then(res => {
				setProductAll(res.data)
			})
	}, [])
	const fade = productAll.slice(0, 6).map((product) => (<ProductAllItem key={product.id} product={product}/>))
	const all = productAll.map((product) => (<ProductAllItem key={product.id} product={product}/>))
	console.log(productAll)
	return (
		<div className="container">
			<div className="d-flex justify-content-between">
				<h1>{"Выбор покупателей" || !<Skeleton/>}</h1>
				{<button type="button" className="btn_style"
													onClick={() => setShow(!show)}>{!show ? "Смотреть все" : "Секрет"}</button>||<Skeleton/>}

			</div>
			<div className="product">
				{show ? all : fade}
			</div>

		</div>
	);
};

export default ProductAllList;