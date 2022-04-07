import React, {useEffect, useState} from 'react';
import "./category.scss"
import {getCategory} from "../api/API";

const Category = () => {
	const [categories,setCategories]=useState([])
		useEffect(()=>{
			getCategory()
				.then(res=>setCategories(res.data))
		},[])
		console.log(typeof categories)
		console.log( categories)

 return (
	 <>
	 	<ul className="category">
			 <li>{categories.map(category=>category.name)}</li>
		</ul>
	 </>
		
	)
};

export default Category;