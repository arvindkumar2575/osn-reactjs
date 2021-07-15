import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";
import ProductCard from "../common/ProductCard"

function Product() {
	return (
		<>
			<div id="product-catelog" className="product-catelog">
				<h3 className="section-head">Products</h3>
				{/* <p className="section-head-desc">Here's our services list</p> */}
				<div className="product-cards">
					<ProductCard title="Product Name goes here" />
					<ProductCard title="Product Name goes here Product Name goes hereProduct Name goes hereProduct Name goes here"/>
				</div>
			</div>
		</>
	);
}

export default Product;
