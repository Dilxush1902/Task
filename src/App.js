import React from 'react';
import Category from "./Category/Categories";
import ProductNewList from "./Product/New/ProductNewList";
import ProductAllList from "./Product/All/ProductAllList";
const App = () => {
	return (
		<>
			<Category/>
			<ProductNewList/>
			<ProductAllList/>
		</>
	);
};

export default App;